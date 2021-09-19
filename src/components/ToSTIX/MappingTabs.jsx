import React from "react";
import { Tabs, Tab } from "@carbon/ibm-security";
import MappingTab from "./MappingTab";
import {
  addNewStixObject,
  addNewMetadataObject,
} from "../../store/actions/to_stix";
import { TYPE } from "../../global/constants";

const MappingTabs = () => {
  return (
    <>
      <div className="bx--col-sm-3">
        <Tabs>
          <Tab id="StixObjects" label="STIX">
            <MappingTab type={TYPE.OBJECT} addingFunction={addNewStixObject} />
          </Tab>
          <Tab id="Metadata" label="Metadata">
            <MappingTab
              type={TYPE.FIELD}
              addingFunction={addNewMetadataObject}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default React.memo(MappingTabs);
