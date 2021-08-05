import { v4 as uuidv4 } from "uuid";
import {
  ADD_FIELD,
  ADD_VALUE,
  DELETE_FIELD,
  DELETE_VALUE,
  UPDATE_SEARCH_FIELD_VALUE,
  UPDATE_VALUE,
  UPDATE_MAPPINGS_FROM_FILE,
  UPDATE_MAPPINGS_FILTER_FIELD_VALUE,
  CLEAR_MAPPINGS,
  CHANGE_STIX_VERSION,
  SHOW_CUSTOM_FIELD_MODAL,
  CLOSE_CUSTOM_FIELD_MODAL,
} from "../actions/from_stix";
import stixLanguageV2_0 from "../../global/stixLangV2";
import stixLanguageV2_1 from "../../global/stixLangV2_1";
import { filterFieldsForValue } from "../../components/FromSTIX/utils";
import { STIX_VERSION } from "../../global/constants";

const INITIAL_STATE = {
  mapping: {},
  stixFields: stixLanguageV2_0,
  fieldSearch: "",
  fieldMappingFilter: "",
  stixVersion: STIX_VERSION.V_2_0,
  customFieldModalShow: false,
};

const FromSTIXReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIELD: {
      const field = `${action.payload.type}:${action.payload.key}`;
      return {
        ...state,
        mapping: {
          ...state.mapping,
          [field]: [],
        },
      };
    }

    case DELETE_FIELD: {
      if (action.payload.field in state.mapping) {
        const { [action.payload.field]: v, ...mapping } = state.mapping;
        return {
          ...state,
          mapping: mapping,
        };
      }
      return state;
    }

    case ADD_VALUE: {
      if (action.payload.field in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [action.payload.field]: [
              ...state.mapping[action.payload.field],
              { value: "", id: uuidv4() },
            ],
          },
        };
      }
      return state;
    }

    case DELETE_VALUE: {
      if (action.payload.field in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [action.payload.field]: state.mapping[action.payload.field].filter(
              (o) => o.id !== action.payload.id
            ),
          },
        };
      }
      return state;
    }

    case UPDATE_VALUE: {
      if (action.payload.field in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [action.payload.field]: state.mapping[action.payload.field].map(
              (o) =>
                o.id === action.payload.id
                  ? { ...o, value: action.payload.value }
                  : o
            ),
          },
        };
      }
      return state;
    }

    case UPDATE_SEARCH_FIELD_VALUE: {
      switch (state.stixVersion) {
        case STIX_VERSION.V_2_0: {
          return {
            ...state,
            fieldSearch: action.payload.value,
            stixFields: filterFieldsForValue(
              stixLanguageV2_0,
              action.payload.value
            ),
          };
        }
        case STIX_VERSION.V_2_1: {
          return {
            ...state,
            fieldSearch: action.payload.value,
            stixFields: filterFieldsForValue(
              stixLanguageV2_1,
              action.payload.value
            ),
          };
        }
        default: {
          return {
            ...state,
            fieldSearch: action.payload.value,
            stixFields: filterFieldsForValue(
              stixLanguageV2_0,
              action.payload.value
            ),
          };
        }
      }
    }

    case UPDATE_MAPPINGS_FILTER_FIELD_VALUE: {
      return {
        ...state,
        fieldMappingFilter: action.payload.value,
      };
    }

    case UPDATE_MAPPINGS_FROM_FILE: {
      return {
        ...state,
        mapping: action.payload.mappings,
      };
    }

    case CLEAR_MAPPINGS: {
      return {
        ...state,
        mapping: {},
      };
    }
    case CHANGE_STIX_VERSION: {
      switch (action.payload.version) {
        case STIX_VERSION.V_2_0: {
          return {
            ...state,
            fieldSearch: "",
            stixVersion: action.payload.version,
            stixFields: stixLanguageV2_0,
          };
        }
        case STIX_VERSION.V_2_1: {
          return {
            ...state,
            fieldSearch: "",
            stixVersion: action.payload.version,
            stixFields: stixLanguageV2_1,
          };
        }
        default: {
          return state;
        }
      }
    }

    case SHOW_CUSTOM_FIELD_MODAL: {
      return {
        ...state,
        customFieldModalShow: true,
      };
    }

    case CLOSE_CUSTOM_FIELD_MODAL: {
      return {
        ...state,
        customFieldModalShow: false,
      };
    }

    default:
      return state;
  }
};

export default FromSTIXReducer;
