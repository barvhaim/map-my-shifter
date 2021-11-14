import React from "react";
import { Button } from "@carbon/ibm-security";
import styles from "./export.module.scss";

var Export = function Export(_ref) {
  var saveJsonToDisk = _ref.saveJsonToDisk,
    stateMappingToShifterMapping = _ref.stateMappingToShifterMapping,
    stixMapping = _ref.stixMapping,
    metadataMapping = _ref.metadataMapping;
  return /*#__PURE__*/ React.createElement(
    Button,
    {
      kind: "tertiary",
      size: "sm",
      onClick: function onClick() {
        saveJsonToDisk(
          "",
          stateMappingToShifterMapping(stixMapping, metadataMapping)
        );
      },
      className: styles.export__btn,
    },
    "Export"
  );
};

export default React.memo(Export);
