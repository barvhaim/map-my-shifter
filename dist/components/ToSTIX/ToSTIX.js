import React from "react";
import { useSelector } from "react-redux";
import MappingTabs from "./MappingTabs";
import Statistics from "./Statistics";

var ToSTIX = function ToSTIX() {
  var stixMapping = useSelector(function (state) {
    return state.toStix.stixMapping;
  });
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--grid",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--row",
        },
        /*#__PURE__*/ React.createElement(MappingTabs, null),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--col-sm-1",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "bx--row",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "bx--col-sm-4",
              },
              /*#__PURE__*/ React.createElement(Statistics, {
                stixMapping: stixMapping,
              })
            )
          )
        )
      )
    )
  );
};

export default ToSTIX;
