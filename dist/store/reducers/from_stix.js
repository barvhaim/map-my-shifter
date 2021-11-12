import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toPropertyKey from "@babel/runtime/helpers/esm/toPropertyKey";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_FIELD,
  ADD_VALUE,
  DELETE_FIELD,
  DELETE_VALUE,
  UPDATE_VALUE,
  UPDATE_MAPPINGS_FILTER_FIELD_VALUE,
  CLEAR_FROM_STIX_MAPPINGS,
  SHOW_CUSTOM_FIELD_MODAL,
  CLOSE_CUSTOM_FIELD_MODAL,
  UPDATE_FROM_STIX_MAPPINGS_FROM_FILE,
} from "../actions/from_stix";
var INITIAL_STATE = {
  stixMapping: {},
  fieldMappingFilter: "",
  customFieldModalShow: false,
};

var FromSTIXReducer = function FromSTIXReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_FIELD: {
      var field = action.payload.field;

      if (!(field in state.stixMapping)) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty({}, field, {
                values: [],
              })
            ),
          }
        );
      }

      return state;
    }

    case DELETE_FIELD: {
      if (action.payload.field in state.stixMapping) {
        var _state$stixMapping = state.stixMapping,
          _action$payload$field = action.payload.field,
          v = _state$stixMapping[_action$payload$field],
          stixMapping = _objectWithoutProperties(
            _state$stixMapping,
            [_action$payload$field].map(_toPropertyKey)
          );

        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: stixMapping,
          }
        );
      }

      return state;
    }

    case ADD_VALUE: {
      if (action.payload.field in state.stixMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                action.payload.field,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[action.payload.field]),
                  {},
                  {
                    values: [].concat(
                      _toConsumableArray(
                        state.stixMapping[action.payload.field].values
                      ),
                      [
                        {
                          value: "",
                          id: uuidv4(),
                        },
                      ]
                    ),
                  }
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case DELETE_VALUE: {
      if (action.payload.field in state.stixMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                action.payload.field,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[action.payload.field]),
                  {},
                  {
                    values: state.stixMapping[
                      action.payload.field
                    ].values.filter(function (o) {
                      return o.id !== action.payload.id;
                    }),
                  }
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case UPDATE_VALUE: {
      if (action.payload.field in state.stixMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                action.payload.field,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[action.payload.field]),
                  {},
                  {
                    values: state.stixMapping[action.payload.field].values.map(
                      function (o) {
                        return o.id === action.payload.id
                          ? _objectSpread(
                              _objectSpread({}, o),
                              {},
                              {
                                value: action.payload.value,
                              }
                            )
                          : o;
                      }
                    ),
                  }
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case UPDATE_MAPPINGS_FILTER_FIELD_VALUE: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          fieldMappingFilter: action.payload.value,
        }
      );
    }

    case UPDATE_FROM_STIX_MAPPINGS_FROM_FILE: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          stixMapping: action.payload.stixMapping,
        }
      );
    }

    case CLEAR_FROM_STIX_MAPPINGS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          stixMapping: {},
        }
      );
    }

    case SHOW_CUSTOM_FIELD_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          customFieldModalShow: true,
        }
      );
    }

    case CLOSE_CUSTOM_FIELD_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          customFieldModalShow: false,
        }
      );
    }

    default:
      return state;
  }
};

export default FromSTIXReducer;
