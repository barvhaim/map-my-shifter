import React from "react";
import { Tabs, Tab } from "@carbon/ibm-security";
import MappingTab from "./MappingTab";
import {
  addNewStixObject,
  addNewMetadataObject,
} from "../../store/actions/to_stix";

const MappingTabs = () => {
  return (
    <Tabs>
      <Tab id="StixObjects" label="STIX">
        <MappingTab title={"object"} addingFunction={addNewStixObject} />
      </Tab>
      <Tab id="Metadata" label="Metadata">
        <MappingTab title={"field"} addingFunction={addNewMetadataObject} />
      </Tab>
    </Tabs>
  );
};

export default React.memo(MappingTabs);
