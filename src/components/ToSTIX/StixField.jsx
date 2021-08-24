import React from "react";
import styles from "./to_stix.module.scss";
import {
  openSelectFieldModal,
  removeStixField,
  updateStixField,
} from "../../store/actions/to_stix";
import { Dropdown, TextInput } from "carbon-components-react";
import { useDispatch } from "react-redux";
import transformers from "../../global/transformers";
import { Delete20, List20 } from "@carbon/icons-react";
import ReferencesSelector from "./ReferencesSelector";

const StixField = ({
  objectKey,
  sourceFieldId,
  stixFieldId,
  stixFieldKey,
  stixFieldTransformer,
  stixFieldReferences,
}) => {
  const dispatch = useDispatch();
  return (
    <div key={stixFieldId}>
      <div className={`bx--row ${styles.object_item__field}`}>
        <div className={"bx--col-md-3"}>
          <div className={"bx--row"}>
            <div className={"bx--col"}>
              <TextInput
                id={stixFieldId}
                labelText={""}
                onChange={(e) => {
                  dispatch(
                    updateStixField(
                      e.target.value,
                      "key",
                      objectKey,
                      sourceFieldId,
                      stixFieldId
                    )
                  );
                }}
                size={"sm"}
                value={stixFieldKey}
              />
            </div>
            <div>
              <List20
                onClick={() => {
                  dispatch(
                    openSelectFieldModal(objectKey, sourceFieldId, stixFieldId)
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className={"bx--col-md-2"}>
          <Dropdown
            size={"sm"}
            ariaLabel="Dropdown"
            id="transformer"
            items={transformers}
            label="None"
            selectedItem={stixFieldTransformer}
            onChange={(e) => {
              dispatch(
                updateStixField(
                  e.selectedItem,
                  "transformer",
                  objectKey,
                  sourceFieldId,
                  stixFieldId
                )
              );
            }}
          />
        </div>

        <ReferencesSelector
          objectKey={objectKey}
          sourceFieldId={sourceFieldId}
          stixFieldId={stixFieldId}
          selectedReferences={stixFieldReferences}
        />

        <div>
          <Delete20
            className={`${styles.object_item__btn}`}
            onClick={() => {
              dispatch(removeStixField(objectKey, sourceFieldId, stixFieldId));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(StixField);
