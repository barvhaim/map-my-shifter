import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./from_stix.module.scss";
import StatisticObject from "./StatisticObject";
import { getNumOfFields } from "./utils";
import { AccessibilityColor20 } from "@carbon/icons-react";

const Statistics = ({ officialObjectsCount, requiredObjectsCount }) => {
  const dispatch = useDispatch();
  const stixFields = useSelector((state) => state.stix.stixFields);
  const [officialFieldsCount, requiredFieldsCount] = useMemo(
    () => getNumOfFields(stixFields),
    [stixFields]
  );

  return (
    <>
      <div className="bx--row">
        <div className={"bx--col"}>
          <h4 className="section-title">Coverage Statistics</h4>
        </div>
      </div>

      <div className="bx--row" style={{ marginBottom: ".75rem" }}>
        <div className={`bx--col ${styles.statistics__col}`}>
          <div className="bx--row">
            <StatisticObject
              officialObjectsCount={officialObjectsCount}
              requiredObjectsCount={requiredObjectsCount}
              officialFieldsCount={officialFieldsCount}
              requiredFieldsCount={requiredFieldsCount}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
