import React from "react";
import { useSelector } from "react-redux";
import MappingObject from "./MappingObject";

const MappingObjects = () => {
  const mapping = useSelector((state) => state.toStix.mapping);
  const isMappingEmpty = Object.keys(mapping).length === 0;

  if (isMappingEmpty) {
    return (
      <div className="bx--row">
        <div className={`bx--col`}>
          <p style={{ paddingTop: "1rem" }}>
            There are currently no objects to show. Click the “New object”
            button to start mapping or load configuration.
          </p>
        </div>
      </div>
    );
  }

  return Object.keys(mapping).map((o) => {
    return <MappingObject key={o} objectKey={o} objectData={mapping[o]} />;
  });
};

export default MappingObjects;
