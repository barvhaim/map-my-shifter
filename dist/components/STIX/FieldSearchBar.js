import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "@carbon/ibm-security";
import { updateSearchFieldValue } from "../../store/actions/stix";

var FieldSearchBar = function FieldSearchBar() {
  var dispatch = useDispatch();
  var fieldSearch = useSelector(function (state) {
    return state.fromStix.fieldSearch;
  });
  return /*#__PURE__*/ React.createElement(Search, {
    light: true,
    labelText: "search",
    size: "sm",
    value: fieldSearch,
    onChange: function onChange(event) {
      dispatch(updateSearchFieldValue(event.target.value));
    },
    placeholder: "Search field…",
  });
};

export default React.memo(FieldSearchBar);
