import React from "react";
import styles from "./to_stix.module.scss";

const Statistic = ({ FieldsCount, ObjectsCount, sum }) => {
  const objectsStatistics = (FieldsCount / sum) * 100;

  return (
    <div className="bx--col">
      <div className="bx--label-description">Official STIX Coverage</div>
      <div className={styles.coverage_percent}>
        {sum === 0 ? 0 : Math.round(objectsStatistics * 100) / 100}%
      </div>
      <div className={styles.coverage_count}>{FieldsCount} fields</div>
      <div className={styles.coverage_count}>{ObjectsCount} objects</div>
    </div>
  );
};

export default Statistic;
