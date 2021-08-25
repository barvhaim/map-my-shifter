import React, { useState } from "react";
import {
  Add20,
  Close20,
  ChevronUp32,
  ChevronDown32,
} from "@carbon/icons-react";
import { addDataSourceField, removeObject } from "../../store/actions/to_stix";
import { useDispatch } from "react-redux";
import SourceField from "./SourceField";
import styles from "./to_stix.module.scss";

const ObjectHeader = ({ title, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`bx--row`}
      style={{ cursor: "pointer" }}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span style={{ marginLeft: "1rem" }}>
        {isOpen ? <ChevronDown32 /> : <ChevronUp32 />}
      </span>
      <div className={`bx--col ${styles.object_item__title}`}>{title}</div>

      <div className={`bx--col`} style={{ textAlign: "right" }}>
        <Add20
          className={`${styles.object_item__btn}`}
          style={{
            marginRight: ".5rem",
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(addDataSourceField(title, ""));
          }}
        />
        <Close20
          className={`${styles.object_item__btn}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
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
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`bx--row ${styles.object__item_box}`}>
      <div className={`bx--col ${styles.object__item_content}`}>
        <ObjectHeader title={objectKey} isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
          <ObjectBody objectKey={objectKey} sourceFields={objectData} />
        )}
      </div>
    </div>
  );
};

export default React.memo(MappingObject);
