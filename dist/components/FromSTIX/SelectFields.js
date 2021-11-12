import React from "react";
import CustomField from "./CustomField";
import AddFields from "../STIX/AddFields";

var SelectFields = function SelectFields(_ref) {
  var officialFields = _ref.officialFields;
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
        /*#__PURE__*/ React.createElement(
          "h4",
          {
            className: "section-title",
          },
          "Select Fields"
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
          style: {
            textAlign: "right",
          },
        },
        /*#__PURE__*/ React.createElement(CustomField, null)
      )
    ),
    /*#__PURE__*/ React.createElement(AddFields, {
      officialFields: officialFields,
    })
  );
};

export default React.memo(SelectFields);
