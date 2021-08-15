import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./from_stix.module.scss";
import StatisticObject from "./StatisticObject";
import { getNumOfFields } from "./utils";
import { AccessibilityColor20 } from "@carbon/icons-react";
import { colorFields } from "../../store/actions/from_stix";

const Statistics = ({ officialObjectsCount, requiredObjectsCount }) => {
  const dispatch = useDispatch();
  const toColor = useSelector((state) => state.fromStix.colorFields);
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
        <div className={"bx--col"}>
          <AccessibilityColor20
            size={"16px"}
            onClick={() => dispatch(colorFields(!toColor))}
          />
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
