import React from "react";
import { Tabs, Tab } from "@carbon/ibm-security";
import MappingTab from "./MappingTab";
import {
  addNewStixObject,
  addNewMetadataObject,
} from "../../store/actions/to_stix";

const MappingTabs = () => {
  return (
    <>
      <div className="bx--col-sm-3">
        <Tabs>
          <Tab id="StixObjects" label="STIX">
            <MappingTab title={"object"} addingFunction={addNewStixObject} />
          </Tab>
          <Tab id="Metadata" label="Metadata">
            <MappingTab title={"field"} addingFunction={addNewMetadataObject} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default React.memo(MappingTabs);
