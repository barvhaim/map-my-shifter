import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const selectFieldModalData = useSelector(
    (state) => state.toStix.selectFieldModalData
  );
  const isInModal = selectFieldModalData ? true : false;

  const addFieldFromMenu = (value, required) => {
    dispatch(addField(value, required));
  };

  const addFieldFromModal = (value, fieldNameToUpdate) => {
    dispatch(closeSelectFieldModal());
    dispatch(
      updateStixField(
        selectFieldModalData.objectKey,
        selectFieldModalData.sourceFieldId,
        selectFieldModalData.stixFieldId,
        value,
        fieldNameToUpdate
      )
    );
  };

  const handleSelectStixField = (value, required, fieldNameToUpdate) => {
    isInModal
      ? addFieldFromModal(value, fieldNameToUpdate)
      : addFieldFromMenu(value, required);
  };

  return (
    <AccordionItem
      title={
        isInModal
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
              !isInModal && officialFields[type].has(`${item.name}`)
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
