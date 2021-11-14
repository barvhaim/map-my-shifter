import React from "react";
import styles from "./from_stix.module.scss";

var StatisticObject = function StatisticObject(_ref) {
  var officialObjectsCount = _ref.officialObjectsCount,
    requiredObjectsCount = _ref.requiredObjectsCount,
    officialFieldsCount = _ref.officialFieldsCount,
    requiredFieldsCount = _ref.requiredFieldsCount;
  var objectsStatistics = (officialObjectsCount / officialFieldsCount) * 100;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--col",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--label-description",
      },
      "Official STIX Coverage"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.coverage_percent,
      },
      officialObjectsCount === 0
        ? 0
        : Math.round(objectsStatistics * 100) / 100,
      "%"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.coverage_count,
      },
      officialObjectsCount,
      " of ",
      officialFieldsCount,
      " STIX fields"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.coverage_count,
      },
      requiredObjectsCount,
      " of ",
      requiredFieldsCount,
      " required STIX fields"
    )
  );
};

export default StatisticObject;
