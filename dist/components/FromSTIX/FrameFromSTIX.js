import React from "react";
import { useSelector } from "react-redux";
import { saveJsonToDisk } from "../STIX/utils";
import FromSTIX from ".";
import Import from "../Import/Import";
import Export from "../Export/Export";
import { stateMappingToShifterMapping, loadJsonFromDisk } from "./utils";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/from_stix";

var FrameFromSTIX = function FrameFromSTIX() {
  var stixMapping = useSelector(function (state) {
    return state.fromStix.stixMapping;
  });
  var metadataMapping = useSelector(function (state) {
    return state.fromStix.metadataMapping;
  });
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--grid",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        /*#__PURE__*/ React.createElement(
          "h1",
          {
            className: "page-title",
          },
          "From STIX"
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--row",
            style: {
              float: "right",
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            null,
            /*#__PURE__*/ React.createElement(Import, {
              clearMappings: clearMappings,
              loadJsonFromDisk: loadJsonFromDisk,
              updateMappingsFromFile: updateMappingsFromFile,
            })
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            null,
            /*#__PURE__*/ React.createElement(Export, {
              saveJsonToDisk: saveJsonToDisk,
              stateMappingToShifterMapping: stateMappingToShifterMapping,
              stixMapping: stixMapping,
              metadataMapping: metadataMapping,
            })
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(FromSTIX, null)
  );
};

export default FrameFromSTIX;
