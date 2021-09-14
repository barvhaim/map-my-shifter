import React from "react";
import { Add32 } from "@carbon/icons-react";
import { Button } from "@carbon/ibm-security";
import { useDispatch } from "react-redux";
import { openNewObjectModal } from "../../store/actions/to_stix";
import MappingObjects from "./MappingObjects";
import SelectFieldModal from "./SelectFieldModal";
import MoveFieldToObjectModal from "./MoveFieldToObjectModal";

const Mapping = () => {
  const dispatch = useDispatch();
  return (
    <>
      <SelectFieldModal />
      <MoveFieldToObjectModal />
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

export default React.memo(Mapping);
