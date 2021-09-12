import React, { useState } from "react";
import {
  Add20,
  Close20,
  ChevronUp32,
  ChevronDown32,
} from "@carbon/icons-react";
import {
  addDataSourceField,
  removeStixObject,
  removeMetadataObject,
} from "../../store/actions/to_stix";
import { useDispatch } from "react-redux";
import StixObjectBody from "./StixObjectBody";
import MetadataObjectBody from "./MetadataObjectBody";
import styles from "./to_stix.module.scss";

const ObjectHeader = ({ name, isOpen, setIsOpen, isStix }) => {
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
      <div className={`bx--col ${styles.object_item__title}`}>{name}</div>

      <div className={`bx--col`} style={{ textAlign: "right" }}>
        {isStix && (
          <Add20
            className={`${styles.object_item__btn}`}
            style={{
              marginRight: ".5rem",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(addDataSourceField(name));
            }}
          />
        )}
        <Close20
          className={`${styles.object_item__btn}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            isStix
              ? dispatch(removeStixObject(name))
              : dispatch(removeMetadataObject(name));
          }}
        />
      </div>
    </div>
  );
};

const MappingObject = ({ objectKey, objectData, isStix }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`bx--row ${styles.object__item_box}`}>
      <div className={`bx--col ${styles.object__item_content}`}>
        <ObjectHeader
          name={objectKey}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isStix={isStix}
        />

        {isStix && isOpen && (
          <StixObjectBody
            objectKey={objectKey}
            sourceFields={objectData}
            isStix={isStix}
          />
        )}
        {!isStix && isOpen && (
          <MetadataObjectBody
            objectKey={objectKey}
            sourceFields={objectData}
            isStix={isStix}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(MappingObject);
