import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./to_stix.module.scss";
import { getDataForStatistics } from "./utils";
import StatisticObject from "./StatisticObject";

var Statistics = function Statistics(_ref) {
  var stixMapping = _ref.stixMapping;
  var stixFields = useSelector(function (state) {
    return state.stix.stixFields;
  });
  var stixTypesSet = useMemo(
    function () {
      return new Set(
        Object.values(stixFields).map(function (field) {
          return field.type;
        })
      );
    },
    [stixFields]
  );

  var _getDataForStatistics = getDataForStatistics(stixMapping, stixTypesSet),
    _getDataForStatistics2 = _slicedToArray(_getDataForStatistics, 4),
    officialFieldsCount = _getDataForStatistics2[0],
    customFieldsCount = _getDataForStatistics2[1],
    officialObjectsCount = _getDataForStatistics2[2],
    customObjectsCount = _getDataForStatistics2[3];

  var sum = officialFieldsCount + customFieldsCount;
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
            className: "".concat(styles.section_title),
          },
          "Official VS Custom STIX fields"
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
            fieldsCount: officialFieldsCount,
            objectsCount: officialObjectsCount,
            sum: sum,
            type: "Official",
          })
        )
      ),
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
            fieldsCount: customFieldsCount,
            objectsCount: customObjectsCount,
            sum: sum,
            type: "Custom",
          })
        )
      )
    )
  );
};

export default Statistics;
