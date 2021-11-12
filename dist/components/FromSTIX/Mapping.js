import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./from_stix.module.scss";
import MappingItem from "./MappingItem";
import MappingsFilterBar from "./MappingsFilterBar";
import { filterMappingFieldsForValue } from "./utils";
import { clearMappings } from "../../store/actions/from_stix";

var Mapping = function Mapping() {
  var dispatch = useDispatch();
  var stixMapping = useSelector(function (state) {
    return state.fromStix.stixMapping;
  });
  var fieldMappingFilter = useSelector(function (state) {
    return state.fromStix.fieldMappingFilter;
  });
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        /*#__PURE__*/ React.createElement(
          "h4",
          {
            className: "section-title",
          },
          Object.keys(stixMapping).length,
          " Total Fields",
          " ",
          /*#__PURE__*/ React.createElement(
            "span",
            {
              onClick: function onClick() {
                dispatch(clearMappings());
              },
              className: styles.mappings_clear__btn,
            },
            "(Clear)"
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        /*#__PURE__*/ React.createElement(MappingsFilterBar, null)
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col "
            .concat(styles.full_height__col, " ")
            .concat(styles.mapping__col),
        },
        Object.keys(
          filterMappingFieldsForValue(stixMapping, fieldMappingFilter)
        ).map(function (o) {
          return /*#__PURE__*/ React.createElement(MappingItem, {
            key: o,
            title: o,
          });
        })
      )
    )
  );
};

export default Mapping;
