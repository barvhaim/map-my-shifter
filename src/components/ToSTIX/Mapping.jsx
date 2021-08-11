import React from "react";
import { Add32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import { useDispatch, useSelector } from "react-redux";
import { openNewObjectModal } from "../../store/actions/to_stix";
import MappingObjects from "./MappingObjects";

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

      <MappingObjects />
    </>
  );
};

export default Mapping;
