import React from "react";
import { Add20, Delete20, SubtractAlt20, List20 } from "@carbon/icons-react";
import { Dropdown, MultiSelect, TextInput } from "carbon-components-react";
import styles from "./to_stix.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeDataSourceField,
  updateDataSourceField,
  removeStixField,
  addStixField,
  updateStixField,
  openSelectFieldModal,
} from "../../store/actions/to_stix";
import transformers from "../../global/transformers";
import SelectFieldModal from "./SelectFieldModal";

const StixField = ({ objectName, fieldId }) => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.toStix.mapping);

  const getObjects = () => {
    return [...Object.keys(mapping)];
  };

  return (
    <div key={fieldId}>
      <div className={styles.object_item__map}>
        <div className={"bx--row"}>
          <div>
            <SubtractAlt20
              style={{ marginLeft: "1rem" }}
              className={`${styles.object_item__btn}`}
              onClick={() => {
                dispatch(removeDataSourceField(objectName, fieldId));
              }}
            />
          </div>
          <div className={`bx--col`}>
            <TextInput
              labelText={"Field Name"}
              id={fieldId}
              onChange={(e) => {
                dispatch(
                  updateDataSourceField(objectName, fieldId, e.target.value)
                );
              }}
              value={mapping[objectName][fieldId].field}
              size={"sm"}
            />
          </div>
        </div>

        <div className={`bx--row ${styles.object_item__field}`}>
          <div className={"bx--col-sm-4"}>
            <div className={`bx--row ${styles.object_item_field__header}`}>
              <div className={"bx--col-sm-1"}>STIX field</div>
              <div className={"bx--col-sm-1"}>Transformer</div>
              <div className={"bx--col-sm-1"}>References</div>
              <div className={"bx--col-sm-1"} style={{ textAlign: "right" }}>
                <Add20
                  className={`${styles.object_item__btn}`}
                  onClick={() => {
                    dispatch(addStixField(objectName, fieldId, ""));
                  }}
                />
              </div>
            </div>
            {mapping[objectName][fieldId].mapped_to.map((stixField) => {
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
                                stixFieldReferences[
                                  stixFieldReferences.length - 1
                                ]
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
                          getObjects().filter((o) => o !== objectName)
                            .length === 0
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
                          dispatch(
                            removeStixField(objectName, fieldId, stixField.id)
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StixField;
