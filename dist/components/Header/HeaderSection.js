import React from "react";
import { Link } from "@carbon/ibm-security";
import styles from "./headerSection.module.scss";
import { useHistory } from "react-router-dom";

var HeaderSection = function HeaderSection() {
  var history = useHistory();

  var goTo = function goTo(link) {
    history.push(link);
  };

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
        "div",
        {
          className: "bx--row",
          style: {
            paddingLeft: "1rem",
          },
        },
        /*#__PURE__*/ React.createElement(
          Link,
          {
            onClick: function onClick() {
              return goTo("/");
            },
            className: styles.tile__btn,
          },
          "Map My Shifter"
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: styles.tile__separator,
          },
          "|"
        ),
        /*#__PURE__*/ React.createElement(
          Link,
          {
            onClick: function onClick() {
              return goTo("/About");
            },
            className: styles.tile__btn,
          },
          "About"
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: styles.tile__separator,
          },
          "|"
        ),
        /*#__PURE__*/ React.createElement(
          Link,
          {
            onClick: function onClick() {
              return goTo("/from_stix");
            },
            className: styles.tile__btn,
          },
          "From STIX"
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: styles.tile__separator,
          },
          "|"
        ),
        /*#__PURE__*/ React.createElement(
          Link,
          {
            onClick: function onClick() {
              return goTo("/to_stix");
            },
            className: styles.tile__btn,
          },
          "To STIX"
        )
      )
    )
  );
};

export default HeaderSection;
