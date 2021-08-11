import React from "react";
import { Add20, SubtractAlt20 } from "@carbon/icons-react";
import { TextInput } from "carbon-components-react";
import styles from "./to_stix.module.scss";
import { useDispatch } from "react-redux";
import {
  removeDataSourceField,
  updateDataSourceField,
  addStixField,
} from "../../store/actions/to_stix";
import StixField from "./StixField";

const DataSourseField = ({ mapping, objectName }) => {
  const dispatch = useDispatch();

  return Object.keys(mapping).map((fieldId) => (
    <ul>
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
                value={mapping[fieldId].field}
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
              <StixField
                mapping={mapping[fieldId].mapped_to}
                objectName={objectName}
                fieldId={fieldId}
              />
              )
            </div>
          </div>
        </div>
      </div>
    </ul>
  ));
};

export default DataSourseField;
