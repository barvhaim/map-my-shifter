import React from "react";
import { Add20, Close20 } from "@carbon/icons-react";
import styles from "./to_stix.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addDataSourceField, removeObject } from "../../store/actions/to_stix";
import MappingField from "./MappingField";

const MappingObject = ({ objectName }) => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.toStix.mapping);

  return (
    <div key={objectName} className={`bx--row ${styles.object__item_box}`}>
      <div className={`bx--col ${styles.object__item_content}`}>
        <div className={`bx--row`}>
          <div className={`bx--col ${styles.object_item__title}`}>
            "{objectName}"
          </div>
          <div className={`bx--col`} style={{ textAlign: "right" }}>
            <Add20
              className={`${styles.object_item__btn}`}
              style={{
                marginRight: ".5rem",
              }}
              onClick={() => {
                dispatch(addDataSourceField(objectName, ""));
              }}
            />
            <Close20
              className={`${styles.object_item__btn}`}
              onClick={() => {
                dispatch(removeObject(objectName));
              }}
            />
          </div>
        </div>

        {Object.keys(mapping[objectName]).length === 0 ? (
          <div className={`bx--row`}>
            <div className={`bx--col`}>
              There are currently no data-source fields mapped. Click the "+"
              button to add your first data-source field.
            </div>
          </div>
        ) : null}

        <ul>
          {Object.keys(mapping[objectName]).map((fieldId) => (
            <MappingField
              key={fieldId}
              objectName={objectName}
              fieldId={fieldId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MappingObject;
