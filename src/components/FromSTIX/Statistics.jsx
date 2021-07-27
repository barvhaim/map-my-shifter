import React from "react";
import styles from "./from_stix.module.scss";
import StatisticsObjects from "./StatisticsObjects";
import { useSelector } from "react-redux";

const Statistics = () => {
  const stixFields = useSelector((state) => state.fromStix.stixFields);
  const mapping = useSelector((state) => state.fromStix.mapping);
  const fieldsCount = Object.keys(stixFields).length;

  const getNumOfOfficialObjects = (mapping) => {
    let officialObjects = {};
    let customObjects = {};
    Object.keys(mapping).forEach((field) => {
      console.log(mapping);
      console.log(field);
      const [type, key] = field.split(":");
      if (
        !(type in officialObjects) &&
        Object.keys(mapping[field]).length > 0
      ) {
        Object.keys(mapping[field]).forEach((val) => {
          if (mapping[field][val].value !== "") {
            if (type.startsWith("x-")) {
              customObjects[type] = key;
            } else {
              officialObjects[type] = key;
            }
          }
        });
      }
    });
    return [
      Object.keys(officialObjects).length,
      Object.keys(customObjects).length,
    ];
  };

  const [officialObjectsCount, customObjectsCount] =
    getNumOfOfficialObjects(mapping);

  return (
    <>
      <div className="bx--row">
        <div className={"bx--col"}>
          <h4 className="section-title">Coverage Statistics</h4>
        </div>
      </div>
      <div className="bx--row">
        <div className={`bx--col ${styles.statistics__col}`}>
          <div className="bx--row">
            <StatisticsObjects
              type="Official"
              objectsCount={officialObjectsCount}
              fieldsCount={fieldsCount}
            ></StatisticsObjects>
            <StatisticsObjects
              type="Custom"
              objectsCount={customObjectsCount}
              fieldsCount={officialObjectsCount + customObjectsCount}
            ></StatisticsObjects>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
