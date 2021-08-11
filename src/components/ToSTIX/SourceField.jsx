import React from "react";
import {
  removeDataSourceField,
  updateDataSourceField,
} from "../../store/actions/to_stix";
import { SubtractAlt20 } from "@carbon/icons-react";
import { useDispatch } from "react-redux";
import { TextInput } from "carbon-components-react";
import styles from "./to_stix.module.scss";

const SourceFieldHeader = ({ fieldId, objectKey, fieldData }) => {
  const dispatch = useDispatch();

  return (
    <div className={"bx--row"}>
      <div>
        <SubtractAlt20
          style={{ marginLeft: "1rem", border: 0 }}
          className={`${styles.object_item__btn}`}
          onClick={() => {
            dispatch(removeDataSourceField(objectKey, fieldId));
          }}
        />
      </div>
      <div className={`bx--col`}>
        <TextInput
          labelText={"Source field name"}
          id={fieldId}
          onChange={(e) => {
            dispatch(updateDataSourceField(objectKey, fieldId, e.target.value));
          }}
          value={fieldData.field}
          size={"sm"}
        />
      </div>
    </div>
  );
};

const SourceField = ({ objectKey, fieldId, fieldData }) => {
  return (
    <div className={styles.object_item__map}>
      <SourceFieldHeader
        objectKey={objectKey}
        fieldId={fieldId}
        fieldData={fieldData}
      />
    </div>
  );
};

export default SourceField;
