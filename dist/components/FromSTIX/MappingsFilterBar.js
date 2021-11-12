import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "@carbon/ibm-security";
import { updateMappingsFilterFieldValue } from "../../store/actions/from_stix";

var MappingsFilterBar = function MappingsFilterBar() {
  var dispatch = useDispatch();
  var fieldMappingFilter = useSelector(function (state) {
    return state.fromStix.fieldMappingFilter;
  });
  return /*#__PURE__*/ React.createElement(TextInput, {
    light: true,
    value: fieldMappingFilter,
    onChange: function onChange(event) {
      dispatch(updateMappingsFilterFieldValue(event.target.value));
    },
    labelText: "",
    id: "mappings-filter-input",
    placeholder: "Filter field…",
    autoComplete: "off",
  });
};

export default React.memo(MappingsFilterBar);
