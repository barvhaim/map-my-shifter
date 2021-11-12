import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteField,
  addValue,
  deleteValue,
  updateValue,
} from "../../store/actions/from_stix";
import { TextInput } from "@carbon/ibm-security";
import { Delete20, Close20, Add20 } from "@carbon/icons-react";
import styles from "./from_stix.module.scss";

var MappingItem = function MappingItem(_ref) {
  var title = _ref.title;
  var values = useSelector(function (state) {
    return state.fromStix.stixMapping[title].values;
  });
  var dispatch = useDispatch();
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: styles.mapping__item,
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
        style: {
          marginBottom: ".5rem",
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col-sm-3",
        },
        /*#__PURE__*/ React.createElement(
          "h1",
          {
            className: styles.mapping_item__title,
          },
          title
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col-sm-1 ".concat(styles.mapping_item__btn_top),
        },
        /*#__PURE__*/ React.createElement(Add20, {
          className: "".concat(styles.mapping_item__btn),
          style: {
            marginRight: ".5rem",
          },
          onClick: function onClick() {
            dispatch(addValue(title));
          },
        }),
        /*#__PURE__*/ React.createElement(Close20, {
          className: "".concat(styles.mapping_item__btn),
          onClick: function onClick() {
            dispatch(deleteField(title));
          },
        })
      )
    ),
    values.length > 0
      ? values.map(function (v) {
          return /*#__PURE__*/ React.createElement(
            "div",
            {
              key: "".concat(title, "_").concat(v.id),
              className: "bx--row",
              style: {
                marginBottom: "1rem",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "bx--col-sm-3",
              },
              /*#__PURE__*/ React.createElement(TextInput, {
                id: "".concat(title, "_").concat(v.id),
                labelText: "",
                autoComplete: "off",
                value: v.value,
                onChange: function onChange(input) {
                  dispatch(updateValue(title, v.id, input.target.value));
                },
              })
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "bx--col-sm-1",
                style: {
                  margin: "auto",
                },
              },
              /*#__PURE__*/ React.createElement(Delete20, {
                className: "".concat(styles.mapping_item__btn),
                onClick: function onClick() {
                  dispatch(deleteValue(title, v.id));
                },
              })
            )
          );
        })
      : /*#__PURE__*/ React.createElement(
          "div",
          {
            className: styles.mapping__item_empty,
          },
          "Use the [+] button to add values."
        )
  );
};

export default React.memo(MappingItem);
