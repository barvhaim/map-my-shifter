import React from "react";
import { Accordion } from "@carbon/ibm-security";
import { useSelector } from "react-redux";
import styles from "./stix.module.scss";
import AddFieldItems from "./AddFieldItems";
import FieldSearchBar from "./FieldSearchBar";
import ChangeVersion from "./ChangeVersion";

var AddFields = function AddFields(_ref) {
  var fieldNameToUpdate = _ref.fieldNameToUpdate,
    officialFields = _ref.officialFields;
  var stixFields = useSelector(function (state) {
    return state.stix.stixFields;
  });
  var isToStix = !!fieldNameToUpdate;
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        /*#__PURE__*/ React.createElement(ChangeVersion, null)
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: isToStix
            ? "bx--col ".concat(styles.add_fields__col)
            : "bx--col "
                .concat(styles.full_height__col, " ")
                .concat(styles.add_fields__col),
        },
        /*#__PURE__*/ React.createElement(FieldSearchBar, null),
        /*#__PURE__*/ React.createElement(
          Accordion,
          null,
          stixFields.map(function (o) {
            return /*#__PURE__*/ React.createElement(AddFieldItems, {
              key: o.title,
              title: o.title,
              type: o.type,
              items: !isToStix
                ? o.items.filter(function (item) {
                    return (
                      !item.name.endsWith("_ref") &&
                      !item.name.endsWith("_refs")
                    );
                  })
                : o.items,
              fieldNameToUpdate: fieldNameToUpdate,
              officialFields: officialFields,
            });
          })
        )
      )
    )
  );
};

export default AddFields;
