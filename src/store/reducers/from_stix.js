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

const INITIAL_STATE = {
  mapping: {},
  fieldMappingFilter: "",
  customFieldModalShow: false,
};

const FromSTIXReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIELD: {
      const field = action.payload.field;
      return {
        ...state,
        mapping: {
          ...state.mapping,
          [field]: {
            required: action.payload.required,
            values: [],
          },
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
            [action.payload.field]: {
              ...state.mapping[action.payload.field],
              values: [
                ...state.mapping[action.payload.field].values,
                { value: "", id: uuidv4() },
              ],
            },
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
            [action.payload.field]: {
              ...state.mapping[action.payload.field],
              values: state.mapping[action.payload.field].values.filter(
                (o) => o.id !== action.payload.id
              ),
            },
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
            [action.payload.field]: {
              ...state.mapping[action.payload.field],
              values: state.mapping[action.payload.field].values.map((o) =>
                o.id === action.payload.id
                  ? { ...o, value: action.payload.value }
                  : o
              ),
            },
          },
        };
      }
      return state;
    }

    case UPDATE_MAPPINGS_FILTER_FIELD_VALUE: {
      return {
        ...state,
        fieldMappingFilter: action.payload.value,
      };
    }

    case UPDATE_FROM_STIX_MAPPINGS_FROM_FILE: {
      return {
        ...state,
        mapping: action.payload.mappings,
      };
    }

    case CLEAR_FROM_STIX_MAPPINGS: {
      return {
        ...state,
        mapping: {},
      };
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
