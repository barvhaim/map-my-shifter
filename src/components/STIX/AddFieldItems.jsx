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
  fieldNameToUpdate,
  officialFields,
}) => {
  const dispatch = useDispatch();
  const isToStix = fieldNameToUpdate ? true : false;

  const handleSelectStixField = (value, required, fieldNameToUpdate) => {
    isToStix
      ? dispatch(updateStixField(value, fieldNameToUpdate)) &&
        dispatch(closeSelectFieldModal())
      : dispatch(addField(value, required));
  };

  return (
    <AccordionItem
      title={
        isToStix
          ? `${title}`
          : `${title}  (${officialFields[type].size}/${items.length})`
      }
    >
      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              handleSelectStixField(
                `${type}:${item.name}`,
                item.required,
                fieldNameToUpdate
              );
            }}
            className={
              !isToStix && officialFields[type].has(`${item.name}`)
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