import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { TextInput, Button } from "@carbon/ibm-security";
import {
  Add20,
  Close20,
  Close16,
  ChevronUp32,
  ChevronDown32,
  Checkmark16,
  Edit16,
} from "@carbon/icons-react";
import {
  addDataSourceField,
  removeStixObject,
  removeMetadataObject,
  updateObjectName,
} from "../../store/actions/to_stix";
import { isValidObjectName } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import StixObjectBody from "./StixObjectBody";
import MetadataObjectBody from "./MetadataObjectBody";
import styles from "./to_stix.module.scss";

var ObjectHeader = function ObjectHeader(_ref) {
  var name = _ref.name,
    isOpen = _ref.isOpen,
    setIsOpen = _ref.setIsOpen,
    isStix = _ref.isStix;
  var dispatch = useDispatch();
  var mappingObjects = isStix ? "stixObjects" : "metadataObjects";
  var objects = useSelector(function (state) {
    return state.toStix[mappingObjects];
  });

  var _useState = useState(name),
    _useState2 = _slicedToArray(_useState, 2),
    newName = _useState2[0],
    setName = _useState2[1];

  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isEditingObjectName = _useState4[0],
    setEditObjectName = _useState4[1];

  var objectNameChangeHandler = function objectNameChangeHandler() {
    if (isValidObjectName(name, newName, objects)) {
      dispatch(updateObjectName(name, newName, isStix));
      setEditObjectName(false);
    }
  };

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--row",
    },
    /*#__PURE__*/ React.createElement(
      "span",
      {
        style: {
          marginLeft: "1rem",
          cursor: "pointer",
        },
      },
      isOpen
        ? /*#__PURE__*/ React.createElement(ChevronDown32, {
            onClick: function onClick() {
              setIsOpen(!isOpen);
            },
          })
        : /*#__PURE__*/ React.createElement(ChevronUp32, {
            onClick: function onClick() {
              setIsOpen(!isOpen);
            },
          })
    ),
    isEditingObjectName
      ? /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--row ".concat(styles.object_item__edit_title),
          },
          /*#__PURE__*/ React.createElement(TextInput, {
            className: "bx--col ".concat(styles.object_item__title),
            id: "".concat(isStix, "__").concat(name),
            labelText: "",
            autoComplete: "off",
            value: newName,
            invalid: !isValidObjectName(name, newName, objects),
            invalidText: !newName
              ? "Object name must contain atleast one character."
              : "Object name already exists.",
            onChange: function onChange(input) {
              setName(input.target.value);
            },
            onKeyDown: function onKeyDown(e) {
              if (e.key === "Enter") {
                objectNameChangeHandler();
              }
            },
          }),
          /*#__PURE__*/ React.createElement(Button, {
            className: "bx--col",
            kind: "ghost",
            size: "sm",
            style: {
              paddingTop: 1,
            },
            renderIcon: Checkmark16,
            iconDescription: "Submit new object name",
            hasIconOnly: true,
            disabled: !isValidObjectName(name, newName, objects),
            onClick: function onClick() {
              objectNameChangeHandler();
            },
          }),
          /*#__PURE__*/ React.createElement(Button, {
            className: "bx--col",
            kind: "ghost",
            size: "sm",
            style: {
              paddingTop: 1,
            },
            renderIcon: Close16,
            iconDescription: "Cancel",
            hasIconOnly: true,
            onClick: function onClick() {
              setName(name);
              setEditObjectName(false);
            },
          })
        )
      : /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--col ".concat(styles.object_item__title),
          },
          name,
          /*#__PURE__*/ React.createElement(Button, {
            kind: "ghost",
            style: {
              paddingTop: 1,
            },
            renderIcon: Edit16,
            iconDescription: "Edit object name",
            hasIconOnly: true,
            onClick: function onClick() {
              setEditObjectName(true);
            },
          })
        ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col",
        style: {
          textAlign: "right",
        },
      },
      isStix &&
        /*#__PURE__*/ React.createElement(Add20, {
          className: "".concat(styles.object_item__btn),
          style: {
            marginRight: ".5rem",
          },
          onClick: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            dispatch(addDataSourceField(name));
          },
        }),
      /*#__PURE__*/ React.createElement(Close20, {
        className: "".concat(styles.object_item__btn),
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          isStix
            ? dispatch(removeStixObject(name))
            : dispatch(removeMetadataObject(name));
        },
      })
    )
  );
};

var MappingObject = function MappingObject(_ref2) {
  var objectKey = _ref2.objectKey,
    objectData = _ref2.objectData,
    isStix = _ref2.isStix;

  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpen = _useState6[0],
    setIsOpen = _useState6[1];

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--row ".concat(styles.object__item_box),
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col ".concat(styles.object__item_content),
      },
      /*#__PURE__*/ React.createElement(ObjectHeader, {
        name: objectKey,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        isStix: isStix,
      }),
      isOpen &&
        (isStix
          ? /*#__PURE__*/ React.createElement(StixObjectBody, {
              objectKey: objectKey,
              sourceFields: objectData,
            })
          : /*#__PURE__*/ React.createElement(MetadataObjectBody, {
              objectKey: objectKey,
              sourceFields: objectData,
            }))
    )
  );
};

export default React.memo(MappingObject);
