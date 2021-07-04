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
} from "../../store/actions/to_stix";

const Mapping = () => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.toStix.mapping);
  console.log(mapping);

  const getTransformers = () => {
    return [
      {
        id: 1,
        text: "func 1",
      },
      {
        id: 2,
        text: "func 2",
      },
      {
        id: 3,
        text: "func 3",
      },
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
                                size={"sm"}
                                value={mapping[objectName][fieldId].field}
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
                                <div className={"bx--col-sm-1"}>STIX field</div>
                                <div className={"bx--col-sm-1"}>Reference</div>
                                <div className={"bx--col-sm-1"}>
                                  Transformer
                                </div>
                                <div className={"bx--col-sm-1"}>Remove</div>
                              </div>

                              {mapping[objectName][fieldId].mapped_to.map(
                                (stixField) => {
                                  return (
                                    <div className={"bx--row"}>
                                      <div className={"bx--col-sm-1"}>
                                        <TextInput
                                          size={"sm"}
                                          value={stixField.key}
                                        />
                                      </div>
                                      <div className={"bx--col-sm-1"}>
                                        <Dropdown
                                          size={"sm"}
                                          ariaLabel="Dropdown"
                                          id="carbon-dropdown-example"
                                          items={getObjects()}
                                          label="None"
                                        />
                                      </div>
                                      <div className={"bx--col-sm-1"}>
                                        <MultiSelect
                                          size={"sm"}
                                          useTitleInItem={false}
                                          label="Transformers"
                                          invalid={false}
                                          invalidText="Invalid Selection"
                                          onChange={() => {}}
                                          items={getTransformers()}
                                          initialSelectedItems={[]}
                                          itemToString={(item) =>
                                            item ? item.text : ""
                                          }
                                        />
                                      </div>
                                      <div className={"bx--col-sm-1"}>
                                        <Delete20
                                          className={`${styles.object_item__btn}`}
                                          style={{
                                            border: "1px solid #000000",
                                          }}
                                          onClick={() => {}}
                                        />
                                      </div>
                                    </div>
                                  );
                                }
                              )}
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
