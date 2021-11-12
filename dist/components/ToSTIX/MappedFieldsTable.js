import React from "react";
import { Add20 } from "@carbon/icons-react";
import { addStixField, addMetadataField } from "../../store/actions/to_stix";
import { useDispatch } from "react-redux";
import MappedField from "./MappedField";
import styles from "./to_stix.module.scss";

var MappedFieldsTableHeader = function MappedFieldsTableHeader(_ref) {
  var objectKey = _ref.objectKey,
    sourceFieldId = _ref.sourceFieldId,
    isStix = _ref.isStix;
  var dispatch = useDispatch();
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--row ".concat(styles.object_item_field__header),
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col-md-3",
      },
      isStix ? "STIX field" : "Key"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col-md-2",
      },
      "Transformer"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col-md-2",
      },
      isStix ? "References" : ""
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col-md-1",
        style: {
          textAlign: "right",
        },
      },
      /*#__PURE__*/ React.createElement(Add20, {
        className: "".concat(styles.object_item__btn),
        onClick: function onClick() {
          isStix
            ? dispatch(addStixField(objectKey, sourceFieldId, ""))
            : dispatch(addMetadataField(objectKey, ""));
        },
      })
    )
  );
};

var MappedFieldsTableBody = function MappedFieldsTableBody(_ref2) {
  var objectKey = _ref2.objectKey,
    sourceFieldId = _ref2.sourceFieldId,
    fieldsData = _ref2.fieldsData,
    isStix = _ref2.isStix;
  return fieldsData.map(function (mappedField) {
    var mappedFieldTransformer =
      mappedField === null || mappedField === void 0
        ? void 0
        : mappedField.transformer;
    var mappedFieldReferences =
      mappedField.references && mappedField.references.length !== 0
        ? mappedField.references
        : [];
    return /*#__PURE__*/ React.createElement(MappedField, {
      isStix: isStix,
      key: "".concat(objectKey, "_").concat(mappedField.id),
      sourceFieldId: sourceFieldId,
      objectKey: objectKey,
      mappedFieldId: mappedField.id,
      mappedFieldKey: mappedField.key,
      mappedFieldTransformer: mappedFieldTransformer,
      mappedFieldReferences: mappedFieldReferences,
    });
  });
};

var MappedFieldsTable = function MappedFieldsTable(_ref3) {
  var objectKey = _ref3.objectKey,
    sourceFieldId = _ref3.sourceFieldId,
    sourceFieldData = _ref3.sourceFieldData,
    isStix = _ref3.isStix;
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(MappedFieldsTableHeader, {
      isStix: isStix,
      objectKey: objectKey,
      sourceFieldId: sourceFieldId,
    }),
    /*#__PURE__*/ React.createElement(MappedFieldsTableBody, {
      key: "".concat(objectKey, "_").concat(sourceFieldId),
      isStix: isStix,
      objectKey: objectKey,
      sourceFieldId: sourceFieldId,
      fieldsData: isStix ? sourceFieldData.mapped_to : sourceFieldData,
    })
  );
};

export default MappedFieldsTable;
