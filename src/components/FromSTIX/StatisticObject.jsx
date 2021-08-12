import React from "react";
import styles from "./from_stix.module.scss";

const StatisticObject = ({
  officialObjectsCount,
  requiredObjectsCount,
  officialFieldsCount,
  requiredFieldsCount,
}) => {
  const objectsStatistics = (officialObjectsCount / officialFieldsCount) * 100;

  return (
    <div className="bx--col">
      <div className="bx--label-description">Official STIX Coverage</div>
      <div className={styles.coverage_percent}>
        {officialObjectsCount === 0
          ? 0
          : Math.round(objectsStatistics * 100) / 100}
        %
      </div>
      <div className={styles.coverage_count}>
        {officialObjectsCount} of {officialFieldsCount} STIX fields
      </div>
      <div className={styles.coverage_count}>
        {requiredObjectsCount} of {requiredFieldsCount} required STIX fields
      </div>
    </div>
  );
};

export default StatisticObject;
