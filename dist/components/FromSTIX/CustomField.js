import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCustomFieldModal } from "../../store/actions/from_stix";
import CustomFieldModal from "./CustomFieldModal";
import { Button } from "@carbon/ibm-security";
import { Add16 } from "@carbon/icons-react";

var CustomField = function CustomField() {
  var dispatch = useDispatch();
  var customFieldModalShow = useSelector(function (state) {
    return state.fromStix.customFieldModalShow;
  });
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      Button,
      {
        renderIcon: Add16,
        kind: "ghost",
        size: "sm",
        onClick: function onClick() {
          dispatch(showCustomFieldModal());
        },
      },
      "Custom Field"
    ),
    customFieldModalShow &&
      /*#__PURE__*/ React.createElement(CustomFieldModal, null)
  );
};

export default React.memo(CustomField);
