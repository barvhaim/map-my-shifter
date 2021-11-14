import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { Modal, TextInput } from "@carbon/ibm-security";
import { useDispatch, useSelector } from "react-redux";
import { closeCustomFieldModal, addField } from "../../store/actions/from_stix";
import { isValidCustomStixField } from "../../global/stixHelper";

var CustomFieldModal = function CustomFieldModal() {
  var customFieldModalShow = useSelector(function (state) {
    return state.fromStix.customFieldModalShow;
  });
  var dispatch = useDispatch();

  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    customField = _useState2[0],
    setCustomField = _useState2[1];

  return /*#__PURE__*/ React.createElement(
    Modal,
    {
      open: customFieldModalShow,
      size: "xs",
      modalHeading: "Add custom field",
      primaryButtonText: "Add",
      secondaryButtonText: "Cancel",
      onRequestClose: function onRequestClose() {
        setCustomField("");
        dispatch(closeCustomFieldModal());
      },
      onRequestSubmit: function onRequestSubmit() {
        var _customField$split = customField.split(":"),
          _customField$split2 = _slicedToArray(_customField$split, 2),
          type = _customField$split2[0],
          key = _customField$split2[1];

        dispatch(addField("".concat(type, ":").concat(key)));
        setCustomField("");
        dispatch(closeCustomFieldModal());
      },
      primaryButtonDisabled: !isValidCustomStixField(customField),
      shouldSubmitOnEnter: true,
      hasForm: true,
    },
    /*#__PURE__*/ React.createElement(TextInput, {
      id: "customField",
      type: "text",
      labelText: 'e.g "x-oca-event:category_id"',
      onChange: function onChange(e) {
        setCustomField(e.target.value);
      },
      invalid: customField !== "" && !isValidCustomStixField(customField),
      invalidText: "A valid value is required",
    })
  );
};

export default CustomFieldModal;
