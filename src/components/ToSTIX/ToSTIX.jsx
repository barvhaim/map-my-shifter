import React from "react";
import { useSelector } from "react-redux";
import Mapping from "./Mapping";
import Export from "../Export/Export";
import Import from "../Import/Import";
import NewObjectModal from "./NewObjectModal";
import { stateMappingToShifterMapping, loadJsonFromDisk } from "./utils";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/to_stix";


const ToSTIX = () => {
  const mapping = useSelector((state) => state.toStix.mapping);

  return (
    <>
      <NewObjectModal />
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <h1 className="page-title">To STIX</h1>
          </div>
        </div>

        <div className="bx--row">
          <div className="bx--col-sm-3">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ToSTIX;
