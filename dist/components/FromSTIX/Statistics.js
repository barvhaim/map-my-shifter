import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./from_stix.module.scss";
import StatisticObject from "./StatisticObject";
import { getNumOfFields } from "./utils";

var Statistics = function Statistics(_ref) {
  var officialObjectsCount = _ref.officialObjectsCount,
    requiredObjectsCount = _ref.requiredObjectsCount;
  var stixFields = useSelector(function (state) {
    return state.stix.stixFields;
  });

  var _useMemo = useMemo(
      function () {
        return getNumOfFields(stixFields);
      },
      [stixFields]
    ),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    officialFieldsCount = _useMemo2[0],
    requiredFieldsCount = _useMemo2[1];

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
          "Coverage Statistics"
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
        style: {
          marginBottom: ".75rem",
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col ".concat(styles.statistics__col),
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--row",
          },
          /*#__PURE__*/ React.createElement(StatisticObject, {
            officialObjectsCount: officialObjectsCount,
            requiredObjectsCount: requiredObjectsCount,
            officialFieldsCount: officialFieldsCount,
            requiredFieldsCount: requiredFieldsCount,
          })
        )
      )
    )
  );
};

export default React.memo(Statistics);
