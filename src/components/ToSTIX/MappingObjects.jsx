import React from "react";
import { useSelector } from "react-redux";
import MappingObject from "./MappingObject";

const MappingObjects = ({ title }) => {
  const isStix = title === "object";
  const mappingObjects = isStix ? "stixMapping" : "metadataMapping";
  const mapping = useSelector((state) => state.toStix[mappingObjects]);
  const isMappingEmpty = Object.keys(mapping).length === 0;

  if (isMappingEmpty) {
    return (
      <div className="bx--row">
        <div className={`bx--col`}>
          <p style={{ paddingTop: "1rem" }}>
            There are currently no {title}s to show. Click the “New {title}”
            button to start mapping or load configuration.
          </p>
        </div>
      </div>
    );
  }
  return Object.keys(mapping).map((o) => {
    return (
      <MappingObject
        key={o}
        objectKey={o}
        objectData={mapping[o]}
        isStix={isStix}
      />
    );
  });
};

export default MappingObjects;
