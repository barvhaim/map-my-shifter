import React from "react";
import SourceField from "./SourceField";

var StixObjectBody = function StixObjectBody(_ref) {
  var sourceFields = _ref.sourceFields,
    objectKey = _ref.objectKey;
  var isEmptyObject = Object.keys(sourceFields).length === 0;

  if (isEmptyObject) {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        'There are currently no data-source fields mapped. Click the "+" button to add your first data-source field.'
      )
    );
  }

  return Object.keys(sourceFields).map(function (fieldId) {
    return /*#__PURE__*/ React.createElement(SourceField, {
      isStix: true,
      key: fieldId,
      objectKey: objectKey,
      fieldId: fieldId,
      fieldData: sourceFields[fieldId],
    });
  });
};

export default React.memo(StixObjectBody);
