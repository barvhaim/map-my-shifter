import React from "react";
import logo from "./logo-no-bg.png";
import { ClickableTile } from "@carbon/ibm-security";
import styles from "./welcome.module.scss";
import { useHistory } from "react-router-dom";

var Welcome = function Welcome() {
  var history = useHistory();

  var handleClickableTile = function handleClickableTile(link) {
    history.push(link);
  };

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
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--col",
          },
          /*#__PURE__*/ React.createElement("img", {
            src: logo,
            alt: "Logo",
            width: 300,
          })
        )
      ),
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
            "p",
            null,
            "This tool is used for generating mapping file for `STIX-Shifter` project"
          )
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--row",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--col-sm-2",
          },
          /*#__PURE__*/ React.createElement(
            ClickableTile,
            {
              handleClick: function handleClick() {
                return handleClickableTile("/from_stix");
              },
              className: styles.tile__btn,
            },
            'Generate "From STIX" File'
          )
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--col-sm-2",
          },
          /*#__PURE__*/ React.createElement(
            ClickableTile,
            {
              handleClick: function handleClick() {
                return handleClickableTile("/to_stix");
              },
              className: styles.tile__btn,
            },
            'Generate "To STIX" File'
          )
        )
      )
    )
  );
};

export default Welcome;
