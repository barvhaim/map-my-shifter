import React from "react";
import { Delete20, List20 } from "@carbon/icons-react";
import { Dropdown, MultiSelect, TextInput } from "carbon-components-react";
import styles from "./to_stix.module.scss";
import { useDispatch } from "react-redux";
import {
  removeStixField,
  updateStixField,
  openSelectFieldModal,
} from "../../store/actions/to_stix";
import transformers from "../../global/transformers";
import SelectFieldModal from "./SelectFieldModal";

const StixField = ({ mapping, fieldId, objectName }) => {
  const dispatch = useDispatch();

  const getObjects = () => {
    return [...Object.keys(mapping)];
  };

  return Object.keys(mapping).map((stixField) => {
    const stixFieldTransformer = stixField?.transformer;
    const stixFieldReferences =
      stixField.references && stixField.references.length !== 0
        ? stixField.key.endsWith("_refs")
          ? stixField.references
          : [stixField.references]
        : [];
    return (
      <div key={`${fieldId}_${stixField.id}`}>
        <SelectFieldModal
          objectName={objectName}
          fieldId={fieldId}
          stixFieldId={stixField.id}
          type={"key"}
        />
        <div className={`bx--row ${styles.object_item__field}`}>
          <div>
            <List20
              onClick={() => {
                dispatch(openSelectFieldModal());
              }}
            />
          </div>
          <div className={"bx--col-sm-1"}>
            <TextInput
              id={`${stixField.id}_${stixField.key}`}
              labelText={""}
              onChange={(e) => {
                dispatch(
                  updateStixField(
                    objectName,
                    fieldId,
                    stixField.id,
                    e.target.value,
                    "key"
                  )
                );
              }}
              size={"sm"}
              value={stixField.key}
            />
          </div>
          <div className={"bx--col-sm-1"}>
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
                    objectName,
                    fieldId,
                    stixField.id,
                    e.selectedItem,
                    "transformer"
                  )
                );
              }}
            />
          </div>
          <div className={"bx--col-sm-1"}>
            <MultiSelect
              id={"references"}
              size={"sm"}
              useTitleInItem={false}
              label={
                stixFieldReferences?.length !== 0
                  ? stixFieldReferences.map((referenceObjectName) =>
                      referenceObjectName !==
                      stixFieldReferences[stixFieldReferences.length - 1]
                        ? referenceObjectName + ", "
                        : referenceObjectName
                    )
                  : "None"
              }
              invalid={false}
              invalidText="Invalid Selection"
              onChange={(e) => {
                dispatch(
                  updateStixField(
                    objectName,
                    fieldId,
                    stixField.id,
                    e.selectedItems,
                    "references"
                  )
                );
              }}
              items={getObjects().filter((o) => o !== objectName)}
              disabled={
                getObjects().filter((o) => o !== objectName).length === 0
              }
              initialSelectedItems={stixFieldReferences}
              selectedItem={stixFieldReferences}
              itemToString={(item) => (item ? item : "")}
              inline={true}
            />
          </div>
          <div>
            <Delete20
              className={`${styles.object_item__btn}`}
              onClick={() => {
                dispatch(removeStixField(objectName, fieldId, stixField.id));
              }}
            />
          </div>
        </div>
      </div>
    );
  });
};

export default StixField;
