import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect } from "react";
import "@carbon/ibm-security/css/index.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import FromSTIX from "./components/FromSTIX/FromSTIX";
import ToSTIX from "./components/ToSTIX/ToSTIX";
import { changeStixVersion } from "./store/actions/stix";
import { STIX_VERSION } from "./global/constants";
import { loadJsonFromDisk as loadFromStixJsonFromDisk } from "./components/FromSTIX/utils";
import { loadJsonFromDisk as loadToStixJsonFromDisk } from "./components/ToSTIX/utils";
import { updateMappingsFromFile as createFromStixStateMapping } from "./store/actions/from_stix";
import { updateMappingsFromFile as createToStixStateMapping } from "./store/actions/to_stix";
import { stateMappingToShifterMapping as createFromStixShifterMapping } from "./components/FromSTIX/utils";
import { stateMappingToShifterMapping as createToStixShifterMapping } from "./components/ToSTIX/utils";
import { saveJsonToDisk } from "./components/STIX/utils";
import * as serviceWorker from "./serviceWorker";
export var FromStix = {
  Mapping: function Mapping(_ref) {
    var StixVersion = _ref.StixVersion;
    useEffect(
      function () {
        var version = StixVersion ? StixVersion : "V_2_0";
        store.dispatch(changeStixVersion(STIX_VERSION[version])); // eslint-disable-next-line
      },
      [StixVersion]
    );
    return /*#__PURE__*/ React.createElement(
      Provider,
      {
        store: store,
      },
      /*#__PURE__*/ React.createElement(FromSTIX, null)
    );
  },
  Export: function Export(fileName) {
    var fromStixMapping = store.getState().fromStix.stixMapping;
    var FromStixShifterMapping = createFromStixShifterMapping(fromStixMapping);
    return saveJsonToDisk(fileName, FromStixShifterMapping);
  },
  Import: function Import(mapping) {
    var stixMapping = loadFromStixJsonFromDisk(mapping)[0];
    store.dispatch(createFromStixStateMapping(stixMapping));
  },
};
export var ToStix = {
  Mapping: function Mapping(_ref2) {
    var StixVersion = _ref2.StixVersion;
    useEffect(
      function () {
        var version = StixVersion ? StixVersion : "V_2_0";
        store.dispatch(changeStixVersion(STIX_VERSION[version]));
      },
      [StixVersion]
    );
    return /*#__PURE__*/ React.createElement(
      Provider,
      {
        store: store,
      },
      /*#__PURE__*/ React.createElement(ToSTIX, null)
    );
  },
  Export: function Export(fileName) {
    var toStixMapping = store.getState().toStix.stixMapping;
    var toStixMetadataMapping = store.getState().toStix.metadataMapping;
    var ToStixShifterMapping = createToStixShifterMapping(
      toStixMapping,
      toStixMetadataMapping
    );
    return saveJsonToDisk(fileName, ToStixShifterMapping);
  },
  Import: function Import(mapping) {
    var _loadToStixJsonFromDi = loadToStixJsonFromDisk(mapping),
      _loadToStixJsonFromDi2 = _slicedToArray(_loadToStixJsonFromDi, 2),
      stixMapping = _loadToStixJsonFromDi2[0],
      metadataMapping = _loadToStixJsonFromDi2[1];

    store.dispatch(createToStixStateMapping(stixMapping, metadataMapping));
  },
};
serviceWorker.unregister();
