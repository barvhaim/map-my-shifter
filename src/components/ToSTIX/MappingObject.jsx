import React from "react";
import { Add20, Close20 } from "@carbon/icons-react";
import { addDataSourceField, removeObject } from "../../store/actions/to_stix";
import { useDispatch } from "react-redux";
import styles from "./to_stix.module.scss";
import SourceField from "./SourceField";

const ObjectHeader = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <div className={`bx--row`}>
      <div className={`bx--col ${styles.object_item__title}`}>"{title}"</div>

      <div className={`bx--col`} style={{ textAlign: "right" }}>
        <Add20
          className={`${styles.object_item__btn}`}
          style={{
            marginRight: ".5rem",
          }}
          onClick={() => {
            dispatch(addDataSourceField(title, ""));
          }}
        />
        <Close20
          className={`${styles.object_item__btn}`}
          onClick={() => {
            dispatch(removeObject(title));
          }}
        />
      </div>
    </div>
  );
};

const ObjectBody = ({ sourceFields, objectKey }) => {
  const isEmptyObject = Object.keys(sourceFields).length === 0;

  if (isEmptyObject) {
    return (
      <div className={`bx--row`}>
        <div className={`bx--col`}>
          There are currently no data-source fields mapped. Click the "+" button
          to add your first data-source field.
        </div>
      </div>
    );
  }

  return Object.keys(sourceFields).map((fieldId) => {
    return (
      <SourceField
        key={fieldId}
        objectKey={objectKey}
        fieldId={fieldId}
        fieldData={sourceFields[fieldId]}
      />
    );
  });
};

const MappingObject = ({ objectKey, objectData }) => {
  console.log("re-render", objectKey);
  return (
    <div className={`bx--row ${styles.object__item_box}`}>
      <div className={`bx--col ${styles.object__item_content}`}>
        <ObjectHeader title={objectKey} />
        <ObjectBody objectKey={objectKey} sourceFields={objectData} />
      </div>
    </div>
  );
};

export default React.memo(MappingObject);
