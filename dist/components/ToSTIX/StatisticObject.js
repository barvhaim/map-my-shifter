import React from "react";
import styles from "./to_stix.module.scss";

var StatisticObject = function StatisticObject(_ref) {
  var fieldsCount = _ref.fieldsCount,
    objectsCount = _ref.objectsCount,
    sum = _ref.sum,
    type = _ref.type;
  var objectsStatistics = (fieldsCount / sum) * 100;
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
      type,
      " STIX fields"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.coverage_percent,
      },
      sum === 0 ? 0 : Math.round(objectsStatistics * 100) / 100,
      "%"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.coverage_count,
      },
      fieldsCount,
      " STIX fields"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.coverage_count,
      },
      objectsCount,
      " STIX objects"
    )
  );
};

export default React.memo(StatisticObject);
