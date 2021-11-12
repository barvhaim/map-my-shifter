import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useMemo, useState } from "react";
import { Modal, ComboBox } from "@carbon/ibm-security";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMoveFieldToObjectModal,
  moveDataSourceFieldToObject,
} from "../../store/actions/to_stix";
import styles from "./to_stix.module.scss";

var MoveFieldToObjectModal = function MoveFieldToObjectModal() {
  var dispatch = useDispatch();
  var stixObjects = useSelector(function (state) {
    return state.toStix.stixObjects;
  });
  var data = useSelector(function (state) {
    return state.toStix.moveFieldToObjectModalData;
  });
  var allAvailableObjectKeys = useMemo(
    function () {
      return stixObjects.filter(function (o) {
        return (
          o !== (data === null || data === void 0 ? void 0 : data.objectKey)
        );
      });
    },
    [data, stixObjects]
  );
  var isOpen = !!data;

  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    object = _useState2[0],
    setObject = _useState2[1];

  var fieldName = data === null || data === void 0 ? void 0 : data.fieldName;
  return /*#__PURE__*/ React.createElement(
    Modal,
    {
      shouldSubmitOnEnter: true,
      open: isOpen,
      primaryButtonText: "Move",
      secondaryButtonText: "Cancel",
      onRequestClose: function onRequestClose() {
        dispatch(closeMoveFieldToObjectModal());
        setObject("");
      },
      onRequestSubmit: function onRequestSubmit() {
        dispatch(moveDataSourceFieldToObject(object));
        dispatch(closeMoveFieldToObjectModal());
        setObject("");
      },
      modalHeading: "Select object to move field ".concat(
        fieldName ? "".concat(fieldName) : "",
        " to"
      ),
      className: styles.modal,
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.modal,
        id: "div_".concat(
          data === null || data === void 0 ? void 0 : data.objectKey
        ),
      },
      /*#__PURE__*/ React.createElement(ComboBox, {
        className: styles.combo_box,
        id: "comboBox_".concat(
          data === null || data === void 0 ? void 0 : data.objectKey
        ),
        light: true,
        placeholder: "Search object...",
        items: allAvailableObjectKeys,
        itemToString: function itemToString(item) {
          return item ? item : "";
        },
        selectedItem: object,
        onChange: function onChange(e) {
          setObject(e.selectedItem);
        },
      })
    )
  );
};

export default MoveFieldToObjectModal;
