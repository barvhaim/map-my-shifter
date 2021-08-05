import React from "react";
import styles from "./from_stix.module.scss";

const StatisticsObjects = (props) => {
  const statistic = (props.objectsCount / props.fieldsCount) * 100;

  return (
    <div className="bx--col">
      <div className="bx--label-description">{props.type} STIX Objects</div>
      <div className={styles.coverage_percent}>
        {props.objectsCount === 0 ? 0 : Math.round(statistic * 100) / 100}%
      </div>
      <div className={styles.coverage_count}>
        ({props.objectsCount} of {props.fieldsCount})
      </div>
    </div>
  );
};

export default StatisticsObjects;
