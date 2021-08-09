import React from "react";
import { Add32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import { useDispatch, useSelector } from "react-redux";
import { openNewObjectModal } from "../../store/actions/to_stix";
import MappingObject from "./MappingObject";

const Mapping = () => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.toStix.mapping);

  return (
    <>
      <div className="bx--row">
        <div className="bx--col" style={{ textAlign: "right" }}>
          <Button
            renderIcon={Add32}
            onClick={() => {
              dispatch(openNewObjectModal());
            }}
          >
            New Object
          </Button>
        </div>
      </div>

      <div className="bx--row">
        <div className={`bx--col`}>
          {Object.keys(mapping).length === 0 ? (
            <p style={{ paddingTop: "1rem" }}>
              There are currently no objects to show. Click the “New object”
              button to start mapping or load configuration.
            </p>
          ) : (
            <ul>
              {Object.keys(mapping).map((objectName) => (
                <MappingObject key={objectName} objectName={objectName} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Mapping;
