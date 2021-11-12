import React, { useMemo } from "react";
import {
  removeDataSourceField,
  updateDataSourceField,
  openMoveFieldToObjectModal,
} from "../../store/actions/to_stix";
import { SubtractAlt20, WatsonHealthStackedMove20 } from "@carbon/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "@carbon/ibm-security";
import styles from "./to_stix.module.scss";
import MappedFieldsTable from "./MappedFieldsTable";

var SourceFieldHeader = function SourceFieldHeader(_ref) {
  var fieldId = _ref.fieldId,
    objectKey = _ref.objectKey,
    fieldData = _ref.fieldData;
  var dispatch = useDispatch();
  var stixObjects = useSelector(function (state) {
    return state.toStix.stixObjects;
  });
  var fieldName = fieldData.field;
  var allAvailableObjectKeys = useMemo(
    function () {
      return stixObjects.filter(function (o) {
        return o !== objectKey;
      });
    },
    [objectKey, stixObjects]
  );
  var disableMovingfield = allAvailableObjectKeys.length === 0;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--row",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(SubtractAlt20, {
        style: {
          marginLeft: "1rem",
        },
        className: "".concat(styles.object_item__btn),
        onClick: function onClick() {
          dispatch(removeDataSourceField(objectKey, fieldId));
        },
      })
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col",
      },
      /*#__PURE__*/ React.createElement(TextInput, {
        labelText: "Source field name",
        id: "".concat(fieldId),
        onChange: function onChange(e) {
          dispatch(updateDataSourceField(objectKey, fieldId, e.target.value));
        },
        value: fieldName,
        size: "sm",
      })
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(WatsonHealthStackedMove20, {
        style: {
          marginRight: "1rem",
          border: 0,
        },
        className: disableMovingfield
          ? "".concat(styles.object_item__btn_disable)
          : "".concat(styles.object_item__btn),
        "aria-label": "Move field to object",
        onClick: function onClick() {
          return disableMovingfield
            ? {}
            : dispatch(
                openMoveFieldToObjectModal(objectKey, fieldId, fieldName)
              );
        },
      })
    )
  );
};

var SourceField = function SourceField(_ref2) {
  var objectKey = _ref2.objectKey,
    fieldId = _ref2.fieldId,
    fieldData = _ref2.fieldData,
    isStix = _ref2.isStix;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      key: fieldId,
      className: styles.object_item__map,
    },
    /*#__PURE__*/ React.createElement(SourceFieldHeader, {
      objectKey: objectKey,
      fieldId: fieldId,
      fieldData: fieldData,
    }),
    /*#__PURE__*/ React.createElement(
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
          isStix: isStix,
          objectKey: objectKey,
          sourceFieldId: fieldId,
          sourceFieldData: fieldData,
        })
      )
    )
  );
};

export default React.memo(SourceField);
