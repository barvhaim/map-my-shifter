import React from "react";
import {
  Add32,
  Add20,
  Close20,
  Delete20,
  SubtractAlt20,
} from "@carbon/icons-react";
import {
  Button,
  Dropdown,
  MultiSelect,
  TextInput,
} from "carbon-components-react";
import styles from "./to_stix.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataSourceField,
  openNewObjectModal,
  removeDataSourceField,
  removeObject,
  updateDataSourceField,
  removeMappingField,
  addMappingField,
  updateMappingField,
} from "../../store/actions/to_stix";

const Mapping = () => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.toStix.mapping);
  console.log(mapping);

  const getTransformers = () => {
    //TODO: NONE in func
    return [
      "None",
      "StringToBool",
      "EpochToTimestamp",
      "FormatMac",
      "FormatTCPProtocol",
      "EpochSecondsToTimestamp",
      "TimestampToMilliseconds",
      "ToInteger",
      "ToString",
      "ToLowercaseArray",
      "ToBase64",
      "ToFilePath",
      "ToDirectoryPath",
      "ToFileName",
      "ToDomainName",
      "ToIPv4",
      "DateTimeToUnixTimestamp",
      "NaiveToUTC",
      "TimestampToUTC",
      "SetToOne",
      "FilterIPv4List",
      "FilterIPv6List",
      "ValueToList",
      "GraphIDToPID",
    ];
  };

  const getObjects = () => {
    return ["None", ...Object.keys(mapping)];
  };

  return (
    <>
      <div className="bx--row">
        <div className="bx--col" style={{ textAlign: "right" }}>
          <Button
            renderIcon={Add32}
            onClick={() => {
              dispatch(openNewObjectModal());
            }}
          >
            New Object
          </Button>
        </div>
      </div>

      <div className="bx--row">
        <div className={`bx--col`}>
          {Object.keys(mapping).length === 0 ? (
            <p style={{ paddingTop: "1rem" }}>
              There are currently no objects to show. Click the “New object”
              button to start mapping or load configuration.
            </p>
          ) : (
            Object.keys(mapping).map((objectName) => {
              return (
                <div
                  key={objectName}
                  className={`bx--row ${styles.object__item_box}`}
                >
                  <div className={`bx--col ${styles.object__item_content}`}>
                    <div className={`bx--row`}>
                      <div className={`bx--col ${styles.object_item__title}`}>
                        "{objectName}"
                      </div>
                      <div className={`bx--col`} style={{ textAlign: "right" }}>
                        <Add20
                          className={`${styles.object_item__btn}`}
                          style={{
                            border: "1px solid #000000",
                            marginRight: ".5rem",
                          }}
                          onClick={() => {
                            dispatch(addDataSourceField(objectName, ""));
                          }}
                        />
                        <Close20
                          className={`${styles.object_item__btn}`}
                          style={{ border: "1px solid #000000" }}
                          onClick={() => {
                            dispatch(removeObject(objectName));
                          }}
                        />
                      </div>
                    </div>

                    {Object.keys(mapping[objectName]).length === 0 ? (
                      <div className={`bx--row`}>
                        <div className={`bx--col`}>
                          There are currently no data-source fields mapped.
                          Click the "+" button to add your first data-source
                          field.
                        </div>
                      </div>
                    ) : null}

                    {Object.keys(mapping[objectName]).map((fieldId) => {
                      return (
                        <div key={fieldId}>
                          <div className={styles.object_item__map}>
                            <div className={"bx--row"}>
                              <div>
                                <SubtractAlt20
                                  style={{ marginLeft: "1rem" }}
                                  className={`${styles.object_item__btn}`}
                                  onClick={() => {
                                    dispatch(
                                      removeDataSourceField(objectName, fieldId)
                                    );
                                  }}
                                />
                              </div>
                              <div className={`bx--col`}>
                                <TextInput
                                  labelText={"Field Name"}
                                  id={fieldId}
                                  onChange={(e) => {
                                    dispatch(
                                      updateDataSourceField(
                                        objectName,
                                        fieldId,
                                        e.target.value
                                      )
                                    );
                                  }}
                                  value={mapping[objectName][fieldId].field}
                                  size={"sm"}
                                />
                              </div>
                            </div>

                            <div
                              className={`bx--row ${styles.object_item__field}`}
                            >
                              <div className={"bx--col-sm-4"}>
                                <div
                                  className={`bx--row ${styles.object_item_field__header}`}
                                >
                                  <div className={"bx--col-sm-1"}>
                                    STIX field
                                  </div>
                                  <div className={"bx--col-sm-1"}>
                                    Transformer
                                  </div>
                                  <div className={"bx--col-sm-1"}>
                                    References
                                  </div>
                                  <div
                                    className={"bx--col-sm-1"}
                                    style={{ textAlign: "right" }}
                                  >
                                    <Add20
                                      className={`${styles.object_item__btn}`}
                                      style={{
                                        border: "1px solid #000000",
                                      }}
                                      onClick={() => {
                                        dispatch(
                                          addMappingField(
                                            objectName,
                                            fieldId,
                                            ""
                                          )
                                        );
                                      }}
                                    />
                                  </div>
                                </div>
                                {mapping[objectName][fieldId].mapped_to.map(
                                  (stixField) => {
                                    const stixFieldTransformer = mapping[
                                      objectName
                                    ][fieldId].mapped_to
                                      .filter(
                                        (o) =>
                                          o.id === stixField.id && o.transformer
                                      )
                                      .map((i) => i.transformer)[0];
                                    let stixFieldReferences = mapping[
                                      objectName
                                    ][fieldId].mapped_to
                                      .filter(
                                        (o) =>
                                          o.id === stixField.id && o.references
                                      )
                                      .map((i) => i.references);
                                    stixFieldReferences =
                                      stixField.key.endsWith("_refs")
                                        ? stixFieldReferences[0]
                                        : stixFieldReferences;
                                    return (
                                      <div key={fieldId + stixField.id}>
                                        <div
                                          className={`bx--row ${styles.object_item__field}`}
                                        >
                                          <div className={"bx--col-sm-1"}>
                                            <TextInput
                                              id={stixField.id + stixField.key}
                                              labelText={""}
                                              onChange={(e) => {
                                                dispatch(
                                                  updateMappingField(
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
                                              items={getTransformers()}
                                              label="None"
                                              selectedItem={
                                                stixFieldTransformer
                                              }
                                              onChange={(e) => {
                                                dispatch(
                                                  updateMappingField(
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
                                                stixFieldReferences.length !== 0
                                                  ? stixFieldReferences.map(
                                                      (r) =>
                                                        r !==
                                                        stixFieldReferences[
                                                          stixFieldReferences.length -
                                                            1
                                                        ]
                                                          ? r + ", "
                                                          : r
                                                    )
                                                  : "None"
                                              }
                                              invalid={false}
                                              invalidText="Invalid Selection"
                                              onChange={(e) => {
                                                dispatch(
                                                  updateMappingField(
                                                    objectName,
                                                    fieldId,
                                                    stixField.id,
                                                    e.selectedItems,
                                                    "references"
                                                  )
                                                );
                                              }}
                                              items={getObjects().filter(
                                                (o) => o !== objectName
                                              )}
                                              initialSelectedItems={
                                                stixFieldReferences
                                              }
                                              selectedItem={stixFieldReferences}
                                              itemToString={(item) =>
                                                item ? item : ""
                                              }
                                              inline={true}
                                            />
                                          </div>
                                          <div className={"bx--col-sm-1"}>
                                            <div className={"bx--row"}>
                                              <Delete20
                                                className={`${styles.object_item__btn}`}
                                                style={{
                                                  border: "1px solid #000000",
                                                }}
                                                onClick={() => {
                                                  dispatch(
                                                    removeMappingField(
                                                      objectName,
                                                      fieldId,
                                                      stixField.id
                                                    )
                                                  );
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Mapping;
