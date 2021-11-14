import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from "react";
import { FileUploader } from "@carbon/ibm-security";
import { useDispatch } from "react-redux";

var Import = function Import(_ref) {
  var clearMappings = _ref.clearMappings,
    loadJsonFromDisk = _ref.loadJsonFromDisk,
    updateMappingsFromFile = _ref.updateMappingsFromFile;
  var dispatch = useDispatch();
  return /*#__PURE__*/ React.createElement(FileUploader, {
    accept: [".json"],
    buttonKind: "tertiary",
    buttonLabel: "Import",
    filenameStatus: "edit",
    multiple: false,
    size: "sm",
    onDelete: function onDelete() {
      dispatch(clearMappings());
    },
    onChange: function onChange(event) {
      var reader = new FileReader();

      reader.onload = function (_event) {
        var input = null;

        if (_event && "target" in _event && "result" in _event.target) {
          input = JSON.parse(_event.target.result);

          var _loadJsonFromDisk = loadJsonFromDisk(input),
            _loadJsonFromDisk2 = _slicedToArray(_loadJsonFromDisk, 2),
            stix = _loadJsonFromDisk2[0],
            metadata = _loadJsonFromDisk2[1];

          dispatch(updateMappingsFromFile(stix, metadata));
        }
      };

      reader.readAsText(event.target.files[0]);
    },
  });
};

export default React.memo(Import);
