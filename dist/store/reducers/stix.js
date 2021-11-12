import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import {
  UPDATE_SEARCH_FIELD_VALUE,
  CHANGE_STIX_VERSION,
} from "../actions/stix";
import stixLanguageV2_0 from "../../global/stixLangV2";
import stixLanguageV2_1 from "../../global/stixLangV2_1";
import { filterFieldsForValue } from "../../components/STIX/utils";
import { STIX_VERSION } from "../../global/constants";
var INITIAL_STATE = {
  stixFields: stixLanguageV2_0,
  fieldSearch: "",
  stixVersion: STIX_VERSION.V_2_0,
};

var STIXReducer = function STIXReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_SEARCH_FIELD_VALUE: {
      switch (state.stixVersion) {
        case STIX_VERSION.V_2_0: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              fieldSearch: action.payload.value,
              stixFields: filterFieldsForValue(
                stixLanguageV2_0,
                action.payload.value
              ),
            }
          );
        }

        case STIX_VERSION.V_2_1: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              fieldSearch: action.payload.value,
              stixFields: filterFieldsForValue(
                stixLanguageV2_1,
                action.payload.value
              ),
            }
          );
        }

        default: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              fieldSearch: action.payload.value,
              stixFields: filterFieldsForValue(
                stixLanguageV2_0,
                action.payload.value
              ),
            }
          );
        }
      }
    }

    case CHANGE_STIX_VERSION: {
      switch (action.payload.version) {
        case STIX_VERSION.V_2_0: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              fieldSearch: "",
              stixVersion: action.payload.version,
              stixFields: stixLanguageV2_0,
            }
          );
        }

        case STIX_VERSION.V_2_1: {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              fieldSearch: "",
              stixVersion: action.payload.version,
              stixFields: stixLanguageV2_1,
            }
          );
        }

        default: {
          return state;
        }
      }
    }

    default:
      return state;
  }
};

export default STIXReducer;
