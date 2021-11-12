import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import SelectFields from "./SelectFields";
import Mapping from "./Mapping";
import Statistics from "./Statistics";
import { getDataForStatistics, getOfficialFieldsFromMapping } from "./utils";
import { requiredStixFields } from "../../global/requiredStixFields";

var FromSTIX = function FromSTIX() {
  var stixMapping = useSelector(function (state) {
    return state.fromStix.stixMapping;
  });
  var stixVersion = useSelector(function (state) {
    return state.stix.stixVersion;
  });
  var stixFields = useSelector(function (state) {
    return state.stix.stixFields;
  });
  var requiredFields = requiredStixFields[stixVersion];
  var officialStixFields = Object.assign.apply(
    Object,
    _toConsumableArray(
      Array.from(stixFields, function (field) {
        return _defineProperty(
          {},
          field.type,
          field.items.map(function (item) {
            return item.name;
          })
        );
      })
    )
  );
  var officialStixKeys = useMemo(
    function () {
      return Object.assign.apply(
        Object,
        [{}].concat(
          _toConsumableArray(
            Array.from(Object.keys(officialStixFields), function (value) {
              return _defineProperty({}, value, new Set());
            })
          )
        )
      );
    },
    [officialStixFields]
  );
  var mappingOfficialFields = getOfficialFieldsFromMapping(
    stixMapping,
    officialStixFields,
    officialStixKeys
  );

  var _getDataForStatistics = getDataForStatistics(
      mappingOfficialFields,
      requiredFields
    ),
    _getDataForStatistics2 = _slicedToArray(_getDataForStatistics, 2),
    officialObjectsCount = _getDataForStatistics2[0],
    requiredObjectsCount = _getDataForStatistics2[1];

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
          className: "bx--col-sm-1",
        },
        /*#__PURE__*/ React.createElement(SelectFields, {
          officialFields: mappingOfficialFields,
        })
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col-sm-2",
        },
        /*#__PURE__*/ React.createElement(Mapping, null)
      ),
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
              officialObjectsCount: officialObjectsCount,
              requiredObjectsCount: requiredObjectsCount,
            })
          )
        )
      )
    )
  );
};

export default FromSTIX;
