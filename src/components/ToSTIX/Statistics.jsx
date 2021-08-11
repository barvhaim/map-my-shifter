import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./to_stix.module.scss";
import { getDataForStatistics } from "./utils";
import Statistic from "./Statistic";

const Statistics = ({ mapping }) => {
  const stixFields = useSelector((state) => state.stix.stixFields);
  const stixTypesSet = useMemo(
    () => new Set(Object.values(stixFields).map((field) => field.type)),
    [stixFields]
  );
  const [
    officialFieldsCount,
    customFieldsCount,
    officialObjectsCount,
    customObjectsCount,
  ] = getDataForStatistics(mapping, stixTypesSet);

  const sum = officialFieldsCount + customFieldsCount;

  return (
    <>
      <div className="bx--row">
        <div className={"bx--col"}>
          <h4 className="section-title">Official VS Custom fields</h4>
        </div>
      </div>

      <div className="bx--row" style={{ marginBottom: ".75rem" }}>
        <div className={`bx--col ${styles.statistics__col}`}>
          <div className="bx--row">
            <Statistic
              FieldsCount={officialFieldsCount}
              ObjectsCount={officialObjectsCount}
              sum={sum}
            />
          </div>
        </div>
        <div className={`bx--col ${styles.statistics__col}`}>
          <div className="bx--row">
            <Statistic
              FieldsCount={customFieldsCount}
              ObjectsCount={customObjectsCount}
              sum={sum}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
