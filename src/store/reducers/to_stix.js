import { v4 as uuidv4 } from "uuid";

import {
  ADD_DATASOURCE_FIELD,
  ADD_NEW_OBJECT,
  CLOSE_NEW_OBJECT_MODAL,
  OPEN_NEW_OBJECT_MODAL,
  REMOVE_DATASOURCE_FIELD,
  REMOVE_OBJECT,
  UPDATE_DATASOURCE_FIELD,
  ADD_MAPPING_FIELD,
  REMOVE_MAPPING_FIELD,
  UPDATE_MAPPING_FIELD,
  CLEAR_MAPPINGS,
  UPDATE_MAPPINGS_FROM_FILE,
} from "../actions/to_stix";

const INITIAL_STATE = {
  isNewObjectModalOpen: false,
  mapping: {
    // src_ip: {
    //   a1337: {
    //     field: "dest.ip",
    //     mapped_to: [
    //       {
    //         id: "57db89",
    //         key: "ipv4-addr.value",
    //       },
    //     ],
    //   },
    //   a1338: {
    //     field: "src.ip",
    //     mapped_to: [
    //       {
    //         id: "57db99",
    //         key: "ipv4-addr.value",
    //       },
    //     ],
    //   },
    // },
  },
};

const ToSTIXReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_NEW_OBJECT_MODAL: {
      return {
        ...state,
        isNewObjectModalOpen: true,
      };
    }

    case CLOSE_NEW_OBJECT_MODAL: {
      return {
        ...state,
        isNewObjectModalOpen: false,
      };
    }

    case ADD_NEW_OBJECT: {
      if (!(action.payload?.name in state.mapping)) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [action.payload.name]: {},
          },
        };
      }
      return state;
    }

    case REMOVE_OBJECT: {
      if (action.payload?.name in state.mapping) {
        const { [action.payload?.name]: omit, ...restOfMapping } =
          state.mapping;
        return {
          ...state,
          mapping: restOfMapping,
        };
      }
      return state;
    }

    case ADD_DATASOURCE_FIELD: {
      const objectName = action.payload?.objectName;
      const fieldName = action.payload?.fieldName;
      if (objectName in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [objectName]: {
              ...state.mapping[objectName],
              [uuidv4()]: {
                field: fieldName,
                mapped_to: [],
              },
            },
          },
        };
      }
      return state;
    }

    case UPDATE_DATASOURCE_FIELD: {
      const objectName = action.payload?.objectName;
      const fieldName = action.payload?.fieldName;
      const fieldId = action.payload?.fieldId;
      if (objectName in state.mapping && fieldId in state.mapping[objectName]) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [objectName]: {
              ...state.mapping[objectName],
              [fieldId]: {
                ...state.mapping[objectName][fieldId],
                field: fieldName,
              },
            },
          },
        };
      }
      return state;
    }

    case REMOVE_DATASOURCE_FIELD: {
      const objectName = action.payload?.objectName;
      const fieldId = action.payload?.fieldId;
      if (objectName in state.mapping && fieldId in state.mapping[objectName]) {
        const { [fieldId]: omit, ...restOfFields } = state.mapping[objectName];
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [objectName]: restOfFields,
          },
        };
      }
      return state;
    }

    case ADD_MAPPING_FIELD: {
      const objectName = action.payload?.objectName;
      const fieldId = action.payload?.fieldId;
      const key = action.payload?.key;
      if (objectName in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [objectName]: {
              ...state.mapping[objectName],
              [fieldId]: {
                ...state.mapping[objectName][fieldId],
                mapped_to: [
                  ...state.mapping[objectName][fieldId].mapped_to,
                  {
                    id: uuidv4(),
                    key: key,
                  },
                ],
              },
            },
          },
        };
      }
      return state;
    }

    case REMOVE_MAPPING_FIELD: {
      const objectName = action.payload?.objectName;
      const fieldId = action.payload?.fieldId;
      const mappingId = action.payload?.mappingId;
      if (objectName in state.mapping && fieldId in state.mapping[objectName]) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [objectName]: {
              ...state.mapping[objectName],
              [fieldId]: {
                ...state.mapping[objectName][fieldId],
                mapped_to: state.mapping[objectName][fieldId].mapped_to.filter(
                  (o) => o.id !== mappingId
                ),
              },
            },
          },
        };
      }
      return state;
    }

    case UPDATE_MAPPING_FIELD: {
      const objectName = action.payload?.objectName;
      const fieldId = action.payload?.fieldId;
      const mappingId = action.payload?.mappingId;
      const value = action.payload?.value;
      console.log(value);
      const type = action.payload?.type;
      if (objectName in state.mapping && fieldId in state.mapping[objectName]) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [objectName]: {
              ...state.mapping[objectName],
              [fieldId]: {
                ...state.mapping[objectName][fieldId],
                mapped_to: state.mapping[objectName][fieldId].mapped_to.map(
                  (o) => (o.id === mappingId ? { ...o, [type]: value } : o)
                ),
              },
            },
          },
        };
      }
      return state;
    }

    case CLEAR_MAPPINGS: {
      return {
        ...state,
        mapping: {},
      };
    }

    case UPDATE_MAPPINGS_FROM_FILE: {
      return {
        ...state,
        mapping: action.payload.mappings,
      };
    }

    default: {
      return state;
    }
  }
};

export default ToSTIXReducer;
