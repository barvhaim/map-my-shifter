import React from "react";
import MappedFieldsTable from "./MappedFieldsTable";
import styles from "./to_stix.module.scss";

var MetadataObjectBody = function MetadataObjectBody(_ref) {
  var sourceFields = _ref.sourceFields,
    objectKey = _ref.objectKey;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--row ".concat(styles.object_item__field),
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col-sm-4",
      },
      /*#__PURE__*/ React.createElement(MappedFieldsTable, {
        isStix: false,
        objectKey: objectKey,
        sourceFieldId: sourceFields,
        sourceFieldData: sourceFields,
      })
    )
  );
};

export default React.memo(MetadataObjectBody);
