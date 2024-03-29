import React from "react";
import { useSelector } from "react-redux";
import MappingTabs from "./MappingTabs";
import Export from "../Export/Export";
import Import from "../Import/Import";
import { stateMappingToShifterMapping, loadJsonFromDisk } from "./utils";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/to_stix";
import Statistics from "./Statistics";

const ToSTIX = () => {
  const stixMapping = useSelector((state) => state.toStix.stixMapping);
  const metadataMapping = useSelector((state) => state.toStix.metadataMapping);

  return (
    <>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <h1 className="page-title">To STIX</h1>
          </div>
        </div>

        <div className="bx--row">
          <MappingTabs />

          <div className="bx--col-sm-1">
            <div className="bx--row">
              <div className="bx--col-sm-4">
                <Export
                  stixMapping={stixMapping}
                  metadataMapping={metadataMapping}
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
                <Statistics stixMapping={stixMapping} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToSTIX;
