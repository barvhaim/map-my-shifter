import React from "react";
import { useDispatch } from "react-redux";
import { AccordionItem } from "@carbon/ibm-security";
import styles from "./stix.module.scss";
import {
  closeSelectFieldModal,
  updateStixField,
} from "../../store/actions/to_stix";
import { addField } from "../../store/actions/from_stix";

var AddFieldItems = function AddFieldItems(_ref) {
  var title = _ref.title,
    type = _ref.type,
    items = _ref.items,
    fieldNameToUpdate = _ref.fieldNameToUpdate,
    officialFields = _ref.officialFields;
  var dispatch = useDispatch();
  var isToStix = !!fieldNameToUpdate;

  var handleSelectStixField = function handleSelectStixField(
    value,
    required,
    fieldNameToUpdate
  ) {
    isToStix
      ? dispatch(updateStixField(value, fieldNameToUpdate)) &&
        dispatch(closeSelectFieldModal())
      : dispatch(addField(value, required));
  };

  return /*#__PURE__*/ React.createElement(
    AccordionItem,
    {
      title: isToStix
        ? "".concat(title)
        : ""
            .concat(title, " (")
            .concat(officialFields[type].size, "/")
            .concat(items.length, ")"),
    },
    items.map(function (item) {
      return /*#__PURE__*/ React.createElement(
        "div",
        {
          key: item.name,
          onClick: function onClick() {
            handleSelectStixField(
              "".concat(type, ":").concat(item.name),
              item.required,
              fieldNameToUpdate
            );
          },
          className:
            !isToStix && officialFields[type].has("".concat(item.name))
              ? "".concat(styles.field__item, " ").concat(styles.colored)
              : "".concat(styles.field__item, " ").concat(styles.hover),
        },
        item.name,
        " ",
        item.required ? "(*)" : ""
      );
    })
  );
};

export default React.memo(AddFieldItems);
