import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccordionItem } from "carbon-components-react";
import styles from "./stix.module.scss";
import {
  closeSelectFieldModal,
  updateStixField,
} from "../../store/actions/to_stix";
import { addField } from "../../store/actions/from_stix";

const AddFieldItems = ({
  title,
  type,
  items,
  objectName,
  fieldId,
  stixFieldId,
  updateType,
  objects,
}) => {
  const dispatch = useDispatch();
  const toColor = useSelector((state) => state.fromStix.colorFields);

  const selectStixField = (
    value,
    required,
    objectName,
    fieldId,
    stixFieldId,
    updateType
  ) => {
    if (objectName && fieldId && stixFieldId && updateType) {
      dispatch(
        updateStixField(
          objectName,
          fieldId,
          stixFieldId,
          value,
          updateType,
          required
        )
      );
      dispatch(closeSelectFieldModal());
    } else {
      // if (!objects.has(value)) {
      if (!objects[type].has(value.split(":")[1])) {
        dispatch(addField(value, required));
      }
    }
  };

  return (
    <AccordionItem
      title={
        toColor && objects
          ? `${title}  (${objects[type].size}/${items.length})`
          : `${title}`
      }
    >
      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              selectStixField(
                `${type}:${item.name}`,
                item.required,
                objectName,
                fieldId,
                stixFieldId,
                updateType
              );
            }}
            disabled={toColor}
            className={
              toColor && objects && objects[type].has(`${item.name}`)
                ? `${styles.field__item} ${styles.colored}`
                : `${styles.field__item} ${styles.hover}`
            }
          >
            {item.name} {item.required ? "(*)" : ""}
          </li>
        ))}
      </ul>
    </AccordionItem>
  );
};

export default AddFieldItems;
