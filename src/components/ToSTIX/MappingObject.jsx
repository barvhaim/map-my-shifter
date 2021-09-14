import React, { useState } from "react";
import { TextInput } from "@carbon/ibm-security";
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
  updateObjectName,
} from "../../store/actions/to_stix";
import { isValidObjectName } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import StixObjectBody from "./StixObjectBody";
import MetadataObjectBody from "./MetadataObjectBody";
import styles from "./to_stix.module.scss";

const ObjectHeader = ({ name, isOpen, setIsOpen, isStix }) => {
  const dispatch = useDispatch();
  const mappingObjects = isStix ? "stixObjects" : "metadataObjects";
  const objects = useSelector((state) => state.toStix[mappingObjects]);
  const [newName, setName] = useState(name);

  return (
    <div className={`bx--row`}>
      <span style={{ marginLeft: "1rem", cursor: "pointer" }}>
        {isOpen ? (
          <ChevronDown32
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <ChevronUp32
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </span>
      <TextInput
        className={`bx--col ${styles.object_item__title}`}
        id={`${isStix}__${name}`}
        labelText={""}
        autoComplete={"off"}
        value={newName}
        invalid={!newName || !isValidObjectName(name, newName, objects)}
        invalidText={
          !newName
            ? "object name must contain atleast one character"
            : "object name already exists"
        }
        onChange={(input) => {
          if (!isValidObjectName(name, newName, objects))
            dispatch(updateObjectName(name, input.target.value, isStix));
          setName(input.target.value);
        }}
      />

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
