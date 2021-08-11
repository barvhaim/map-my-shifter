import React from "react";
import { useDispatch } from "react-redux";
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
}) => {
  const dispatch = useDispatch();

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
      dispatch(addField(value, required));
    }
  };

  return (
    <AccordionItem title={title}>
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
            className={styles.field__item}
          >
            {item.name} {item.required ? "(*)" : ""}
          </li>
        ))}
      </ul>
    </AccordionItem>
  );
};

export default AddFieldItems;
