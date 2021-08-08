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
import AddFields from "../FromSTIX/AddFields";
import { SideNav, SideNavItems } from "carbon-components-react";
// CommonJS
// ESM
import { easings, motion } from "@carbon/motion";
motion("standard", "productive"); // Returns a string `cubic-bezier()` function

const ToSTIX = () => {
  const mapping = useSelector((state) => state.toStix.mapping);
  // const { easings, motion } = require('@carbon/motion');
  // motion()

  // const loadJson = loadJsonFromDisk();
  // const parseMapping = (o, s = '', objects) => {
  //   if (typeof o !== "object") return;
  //
  //   if ('key' in o) {
  //     console.log(o.key);
  //
  //     if ('object' in o) {
  //       console.log(o.object);
  //     }
  //     console.log(s);
  //   } else {
  //     Object.keys(o).forEach(k => {
  //       const new_s = s + "." + k
  //       parseMapping(o[k], new_s);
  //     });
  //   }
  // }

  return (
    <>
      <NewObjectModal />
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <h1 className="page-title">To STIX</h1>
          </div>
        </div>

        {/* <div className="bx--row"> */}
        {/* <div className="bx--col-sm-1">
          <SideNav>
            <SideNavItems isSideNavExpanded={false}>
          <AddFields />
            </SideNavItems>
          </SideNav>
        </div>  */}

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
        {/* </div> */}
      </div>
    </>
  );
};

export default ToSTIX;
