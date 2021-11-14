import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect } from "@carbon/ibm-security";
import { updateStixField } from "../../store/actions/to_stix";

var ReferencesSelector = function ReferencesSelector(_ref) {
  var selectedReferences = _ref.selectedReferences,
    objectKey = _ref.objectKey,
    sourceFieldId = _ref.sourceFieldId,
    mappedFieldId = _ref.mappedFieldId;
  var dispatch = useDispatch();
  var stixObjects = useSelector(function (state) {
    return state.toStix.stixObjects;
  });
  var allAvailableObjectKeys = useMemo(
    function () {
      return stixObjects.filter(function (o) {
        return o !== objectKey;
      });
    },
    [objectKey, stixObjects]
  );
  useEffect(
    function () {
      var updatedReferences = selectedReferences.filter(function (ref) {
        return allAvailableObjectKeys.includes(ref);
      });
      dispatch(
        updateStixField(
          updatedReferences,
          "references",
          objectKey,
          sourceFieldId,
          mappedFieldId
        )
      ); // eslint-disable-next-line
    },
    [allAvailableObjectKeys]
  );
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--col-md-2",
    },
    /*#__PURE__*/ React.createElement(MultiSelect.Filterable, {
      key: "".concat(mappedFieldId, "_").concat(selectedReferences),
      id: "MultiSelect.Filterable_".concat(mappedFieldId),
      size: "sm",
      downshiftProps: {
        setItemCount: selectedReferences.length,
      },
      placeholder: "Search References",
      invalid: false,
      invalidText: "Invalid Selection",
      items: allAvailableObjectKeys,
      useTitleInItem: true,
      disabled: allAvailableObjectKeys.length === 0,
      initialSelectedItems: selectedReferences,
      selectedItems: selectedReferences,
      itemToString: function itemToString(item) {
        return item ? item : "";
      },
      onChange: function onChange(e) {
        dispatch(
          updateStixField(
            e.selectedItems,
            "references",
            objectKey,
            sourceFieldId,
            mappedFieldId
          )
        );
      },
    })
  );
};

export default ReferencesSelector;
