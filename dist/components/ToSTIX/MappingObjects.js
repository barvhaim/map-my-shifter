import React from "react";
import { useSelector } from "react-redux";
import MappingObject from "./MappingObject";
import Minimap from "./Minimap";
import styles from "./to_stix.module.scss";
import { MAPPING_TYPE } from "../../global/constants";

var MappingObjects = function MappingObjects(_ref) {
  var type = _ref.type;
  var isStix = type === MAPPING_TYPE.OBJECT;
  var mappingObjects = isStix ? "stixMapping" : "metadataMapping";
  var mapping = useSelector(function (state) {
    return state.toStix[mappingObjects];
  });
  var isMappingEmpty = Object.keys(mapping).length === 0;

  if (isMappingEmpty) {
    return /*#__PURE__*/ React.createElement(
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
          "p",
          {
            style: {
              paddingTop: "1rem",
            },
          },
          "There are currently no ",
          type,
          "s to show. Click the \u201CNew ",
          type,
          "\u201D button to start mapping or load configuration."
        )
      )
    );
  }

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--row ".concat(styles.MappingObjects),
    },
    /*#__PURE__*/ React.createElement(Minimap, {
      isStix: isStix,
    }),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--col-sm-3",
      },
      Object.keys(mapping).map(function (o) {
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            id: "".concat(o),
            key: "".concat(o),
          },
          /*#__PURE__*/ React.createElement(MappingObject, {
            key: "".concat(o),
            objectKey: o,
            objectData: mapping[o],
            isStix: isStix,
          })
        );
      })
    )
  );
};

export default MappingObjects;
