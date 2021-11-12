import React from "react";
import { useSelector } from "react-redux";
import { saveJsonToDisk } from "../STIX/utils";
import ToSTIX from ".";
import Import from "../Import/Import";
import Export from "../Export/Export";
import { stateMappingToShifterMapping, loadJsonFromDisk } from "./utils";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/to_stix";

var FrameToSTIX = function FrameToSTIX() {
  var stixMapping = useSelector(function (state) {
    return state.toStix.stixMapping;
  });
  var metadataMapping = useSelector(function (state) {
    return state.toStix.metadataMapping;
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
          "To STIX"
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
    /*#__PURE__*/ React.createElement(ToSTIX, null)
  );
};

export default FrameToSTIX;
