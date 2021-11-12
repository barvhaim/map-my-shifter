import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { Modal, TextInput } from "@carbon/ibm-security";
import { useDispatch } from "react-redux";
import { closeNewObjectModal } from "../../store/actions/to_stix";

var NewObjectModal = function NewObjectModal(_ref) {
  var isOpen = _ref.isOpen,
    add = _ref.add,
    type = _ref.type;
  var dispatch = useDispatch();

  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    Name = _useState2[0],
    setName = _useState2[1];

  return /*#__PURE__*/ React.createElement(
    Modal,
    {
      shouldSubmitOnEnter: true,
      open: isOpen,
      onRequestClose: function onRequestClose() {
        setName("");
        dispatch(closeNewObjectModal());
      },
      onRequestSubmit: function onRequestSubmit() {
        if (Name !== "") {
          dispatch(add(Name));
          setName("");
        }

        dispatch(closeNewObjectModal());
      },
      primaryButtonText: "Create",
      secondaryButtonText: "Cancel",
      modalHeading: "Create new ".concat(type),
      hasForm: true,
      primaryButtonDisabled: Name === "",
    },
    /*#__PURE__*/ React.createElement(TextInput, {
      id: "new-".concat(type, "-name"),
      labelText: type.charAt(0).toUpperCase() + type.slice(1) + " name",
      autoComplete: "off",
      onChange: function onChange(e) {
        setName(e.target.value);
      },
      value: Name,
      helperText: "Should be lowercase, use dash for spacing, e.g. `foo_bar` ",
    })
  );
};

export default React.memo(NewObjectModal);
