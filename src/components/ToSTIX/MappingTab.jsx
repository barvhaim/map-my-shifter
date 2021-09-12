import React from "react";
import { Add32 } from "@carbon/icons-react";
import { Button } from "@carbon/ibm-security";
import { useDispatch, useSelector } from "react-redux";
import { openNewObjectModal } from "../../store/actions/to_stix";
import MappingObjects from "./MappingObjects";
import SelectFieldModal from "./SelectFieldModal";
import MoveFieldToObjectModal from "./MoveFieldToObjectModal";
import NewObjectModal from "./NewObjectModal";

const MappingTab = ({ title, addingFunction }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toStix.isNewObjectModalOpen);
  const isStix = title === "object";

  return (
    <>
      <NewObjectModal isOpen={isOpen} add={addingFunction} title={title} />
      {isStix && (
        <>
          <SelectFieldModal />
          <MoveFieldToObjectModal />
        </>
      )}
      <div className="bx--row">
        <div className="bx--col" style={{ textAlign: "right" }}>
          <Button
            renderIcon={Add32}
            onClick={() => {
              dispatch(openNewObjectModal());
            }}
          >
            New {title}
          </Button>
        </div>
      </div>

      <MappingObjects title={title} />
    </>
  );
};

export default React.memo(MappingTab);
