import React, { useMemo } from "react";
import {
  removeDataSourceField,
  updateDataSourceField,
  openMoveFieldToObjectModal,
} from "../../store/actions/to_stix";
import { SubtractAlt20, WatsonHealthStackedMove20 } from "@carbon/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "carbon-components-react";
import styles from "./to_stix.module.scss";
import StixFieldsTable from "./StixFieldsTable";

const SourceFieldHeader = ({ fieldId, objectKey, fieldData }) => {
  const dispatch = useDispatch();
  const objects = useSelector((state) => state.toStix.objects);
  const fieldName = fieldData.field;
  const allAvailableObjectKeys = useMemo(() => {
    return objects.filter((o) => o !== objectKey);
  }, [objectKey, objects]);
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
          value={fieldName}
          size={"sm"}
        />
      </div>
      <div>
        <WatsonHealthStackedMove20
          style={{ marginRight: "1rem", border: 0 }}
          className={
            allAvailableObjectKeys.length === 0
              ? `${styles.object_item__btn_disable}`
              : `${styles.object_item__btn}`
          }
          aria-label="Add"
          onClick={() => {
            dispatch(openMoveFieldToObjectModal(objectKey, fieldId, fieldName));
          }}
        />
      </div>
    </div>
  );
};

const SourceField = ({ objectKey, fieldId, fieldData }) => {
  return (
    <div key={fieldId} className={styles.object_item__map}>
      <SourceFieldHeader
        objectKey={objectKey}
        fieldId={fieldId}
        fieldData={fieldData}
      />
      <StixFieldsTable
        objectKey={objectKey}
        sourceFieldId={fieldId}
        sourceFieldData={fieldData}
      />
    </div>
  );
};

export default React.memo(SourceField);
