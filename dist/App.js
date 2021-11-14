import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Content } from "@carbon/ibm-security";
import "./App.scss";
import Header from "./components/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About";
import store from "./store/store";
import FrameFromSTIX from "./components/FromSTIX/FrameFromSTIX";
import FrameToSTIX from "./components/ToSTIX/FrameToSTIX";

function App() {
  return /*#__PURE__*/ React.createElement(
    Provider,
    {
      store: store,
    },
    /*#__PURE__*/ React.createElement(
      Router,
      null,
      /*#__PURE__*/ React.createElement(Header, null),
      /*#__PURE__*/ React.createElement(
        Content,
        null,
        /*#__PURE__*/ React.createElement(
          Switch,
          null,
          /*#__PURE__*/ React.createElement(
            Route,
            {
              path: "/from_stix",
            },
            /*#__PURE__*/ React.createElement(FrameFromSTIX, null)
          ),
          /*#__PURE__*/ React.createElement(
            Route,
            {
              path: "/to_stix",
            },
            /*#__PURE__*/ React.createElement(FrameToSTIX, null)
          ),
          /*#__PURE__*/ React.createElement(
            Route,
            {
              path: "/about",
            },
            /*#__PURE__*/ React.createElement(About, null)
          ),
          /*#__PURE__*/ React.createElement(
            Route,
            {
              path: "/",
            },
            /*#__PURE__*/ React.createElement(Welcome, null)
          )
        )
      )
    )
  );
}

export default React.memo(App);
