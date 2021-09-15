import React from "react";
import { useSelector } from "react-redux";
import MappingObject from "./MappingObject";
import Minimap from "./Minimap";

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

  return (
    <div className="bx--row">
      <Minimap isStix={isStix} />
      <div className="bx--col-sm-3">
        {Object.keys(mapping).map((o) => {
          return (
            <div id={`${isStix}_${o}`} key={`${isStix}_${o}`}>
              <MappingObject
                key={`${isStix}_${o}`}
                objectKey={o}
                objectData={mapping[o]}
                isStix={isStix}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MappingObjects;
