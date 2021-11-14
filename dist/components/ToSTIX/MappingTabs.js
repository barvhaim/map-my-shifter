import React from "react";
import { Tabs, Tab } from "@carbon/ibm-security";
import MappingTab from "./MappingTab";
import {
  addNewStixObject,
  addNewMetadataObject,
} from "../../store/actions/to_stix";
import { MAPPING_TYPE } from "../../global/constants";

var MappingTabs = function MappingTabs() {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col-sm-3",
      },
      /*#__PURE__*/ React.createElement(
        Tabs,
        null,
        /*#__PURE__*/ React.createElement(
          Tab,
          {
            id: "StixObjects",
            label: "STIX",
          },
          /*#__PURE__*/ React.createElement(MappingTab, {
            type: MAPPING_TYPE.OBJECT,
            addingFunction: addNewStixObject,
          })
        ),
        /*#__PURE__*/ React.createElement(
          Tab,
          {
            id: "Metadata",
            label: "Metadata",
          },
          /*#__PURE__*/ React.createElement(MappingTab, {
            type: MAPPING_TYPE.FIELD,
            addingFunction: addNewMetadataObject,
          })
        )
      )
    )
  );
};

export default React.memo(MappingTabs);
