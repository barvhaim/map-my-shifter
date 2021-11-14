import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import styles from "./to_stix.module.scss";
import StickyBox from "react-sticky-box";
import { isActiveObject } from "./utils";

var Minimap = function Minimap(_ref) {
  var isStix = _ref.isStix;
  var mappingObjects = isStix ? "stixMapping" : "metadataMapping";
  var mapping = useSelector(function (state) {
    return state.toStix[mappingObjects];
  });

  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    activeObject = _useState2[0],
    setActiveObject = _useState2[1];

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "bx--col-sm-1",
    },
    /*#__PURE__*/ React.createElement(
      StickyBox,
      {
        offsetTop: 70,
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: styles.Sticky__Box,
        },
        /*#__PURE__*/ React.createElement(
          "h4",
          {
            className: "".concat(styles.section_title),
            style: {
              marginLeft: "1rem",
            },
          },
          "Objects Map"
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: styles.minimap,
          },
          Object.keys(mapping).map(function (o) {
            return /*#__PURE__*/ React.createElement(
              "div",
              {
                key: "link_".concat(o),
                id: "link_".concat(o),
              },
              /*#__PURE__*/ React.createElement(
                Link,
                {
                  to: "".concat(o),
                  spy: true,
                  smooth: true,
                  offset: -100,
                  onSetActive: function onSetActive() {
                    return setActiveObject(o);
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    className: ""
                      .concat(
                        styles.minimap__tile,
                        " \n                        "
                      )
                      .concat(
                        isActiveObject(o, activeObject)
                          ? styles.minimap__activeTile
                          : ""
                      ),
                  },
                  o
                )
              )
            );
          })
        )
      )
    )
  );
};

export default Minimap;
