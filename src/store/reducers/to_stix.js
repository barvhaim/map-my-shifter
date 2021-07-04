import { v4 as uuidv4 } from "uuid";

import {
  ADD_DATASOURCE_FIELD,
  ADD_NEW_OBJECT,
  CLOSE_NEW_OBJECT_MODAL,
  OPEN_NEW_OBJECT_MODAL,
  REMOVE_DATASOURCE_FIELD,
  REMOVE_OBJECT,
} from "../actions/to_stix";

const INITIAL_STATE = {
  isNewObjectModalOpen: false,
  mapping: {
    src_ip: {
      a1337: {
        field: "dest.ip",
        mapped_to: [
          {
            key: "ipv4-addr.value",
          },
        ],
      },
      a1338: {
        field: "src.ip",
        mapped_to: [
          {
            key: "ipv4-addr.value",
          },
        ],
      },
    },
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
      if (objectName in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [objectName]: {
              ...state.mapping[objectName],
              [uuidv4()]: {
                field: "",
                mapped_to: [],
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

    default: {
      return state;
    }
  }
};

export default ToSTIXReducer;
