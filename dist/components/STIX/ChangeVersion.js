import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "@carbon/ibm-security";
import { changeStixVersion } from "../../store/actions/stix";
import { STIX_VERSION } from "../../global/constants";
var stixVersionsList = [
  {
    id: STIX_VERSION.V_2_0,
    label: "STIX version 2.0",
  },
  {
    id: STIX_VERSION.V_2_1,
    label: "STIX version 2.1",
  },
];

var ChangeVersion = function ChangeVersion() {
  var dispatch = useDispatch();
  var stixVersion = useSelector(function (state) {
    return state.stix.stixVersion;
  });
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(Dropdown, {
      ariaLabel: "Dropdown",
      label: "Select STIX version",
      selectedItem: stixVersionsList.find(function (o) {
        return o.id === stixVersion;
      }),
      id: "version-of-stix",
      items: stixVersionsList,
      onChange: function onChange(event) {
        dispatch(changeStixVersion(event.selectedItem.id));
      },
    })
  );
};

export default React.memo(ChangeVersion);
