import React from "react";
import { useSelector } from "react-redux";
import AddFields from "./AddFields";
import Mapping from "./Mapping";
import Export from "../Export/Export";
import Import from "../Import/Import";
import { stateMappingToShifterMapping, loadJsonFromDisk } from "./utils";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/from_stix";
import Statistics from "./Statistics";

const FromSTIX = () => {
  const mapping = useSelector((state) => state.fromStix.mapping);

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="page-title">From STIX</h1>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col-sm-1">
          <AddFields />
        </div>

        <div className="bx--col-sm-2">
          <Mapping />
        </div>

        <div className="bx--col-sm-1">
          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Export
                mapping={mapping}
                stateMappingToShifterMapping={stateMappingToShifterMapping}
              />
            </div>
          </div>

          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Import
                loadJsonFromDisk={loadJsonFromDisk}
                updateMappingsFromFile={updateMappingsFromFile}
                clearMappings={clearMappings}
              />
            </div>
          </div>

          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Statistics mapping={mapping} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromSTIX;
