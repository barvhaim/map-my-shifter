import React from "react";
import { Modal } from "@carbon/ibm-security";
import { useDispatch, useSelector } from "react-redux";
import { closeSelectFieldModal } from "../../store/actions/to_stix";
import AddFields from "../STIX/AddFields";

var SelectFieldModal = function SelectFieldModal() {
  var dispatch = useDispatch();
  var selectFieldModalData = useSelector(function (state) {
    return state.toStix.selectFieldModalData;
  });
  var isOpen = !(selectFieldModalData === null);
  return /*#__PURE__*/ React.createElement(
    Modal,
    {
      shouldSubmitOnEnter: true,
      open: isOpen,
      onRequestClose: function onRequestClose() {
        dispatch(closeSelectFieldModal());
      },
      modalHeading: "Select field",
      hasForm: false,
      passiveModal: true,
    },
    isOpen &&
      /*#__PURE__*/ React.createElement(AddFields, {
        fieldNameToUpdate: "key",
      })
  );
};

export default SelectFieldModal;
