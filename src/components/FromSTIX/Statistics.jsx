import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./from_stix.module.scss";
import Statistic from "./Statistic";
import { getNumOfFields, getNumOfObjects } from "./utils";

const Statistics = ({ mapping }) => {
  const stixFields = useSelector((state) => state.stix.stixFields);
  const stixTypesSet = useMemo(
    () => new Set(Object.values(stixFields).map((field) => field.type)),
    [stixFields]
  );
  const [officialObjectsCount, requiredObjectsCount] = getNumOfObjects(
    mapping,
    stixTypesSet
  );
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
            <Statistic
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
