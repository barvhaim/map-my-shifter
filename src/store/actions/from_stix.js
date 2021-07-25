export const ADD_FIELD = "ADD_FIELD";
export const DELETE_FIELD = "DELETE_FIELD";
export const ADD_VALUE = "ADD_VALUE";
export const UPDATE_VALUE = "UPDATE_VALUE";
export const DELETE_VALUE = "DELETE_VALUE";
export const UPDATE_SEARCH_FIELD_VALUE = "UPDATE_SEARCH_FIELD_VALUE";
export const UPDATE_MAPPINGS_FROM_FILE = "UPDATE_MAPPINGS_FROM_FILE";
export const UPDATE_MAPPINGS_FILTER_FIELD_VALUE =
  "UPDATE_MAPPINGS_FILTER_FIELD_VALUE";
export const CLEAR_MAPPINGS = "CLEAR_MAPPINGS";
export const CHANGE_STIX_VERSION = "CHANGE_STIX_VERSION";
export const SHOW_CUSTOM_FIELD_MODAL = "SHOW_CUSTOM_FIELD_MODAL";
export const CLOSE_CUSTOM_FIELD_MODAL = "CLOSE_CUSTOM_FIELD_MODAL";

export function addField(type, key) {
  return {
    type: ADD_FIELD,
    payload: {
      type,
      key,
    },
  };
}

export function deleteField(field) {
  return {
    type: DELETE_FIELD,
    payload: {
      field,
    },
  };
}

export function addValue(field) {
  return {
    type: ADD_VALUE,
    payload: {
      field,
    },
  };
}

export function deleteValue(field, id) {
  return {
    type: DELETE_VALUE,
    payload: {
      field,
      id,
    },
  };
}

export function updateValue(field, id, value) {
  return {
    type: UPDATE_VALUE,
    payload: {
      field,
      id,
      value,
    },
  };
}

export function updateSearchFieldValue(value) {
  return {
    type: UPDATE_SEARCH_FIELD_VALUE,
    payload: {
      value,
    },
  };
}

export function updateMappingsFilterFieldValue(value) {
  return {
    type: UPDATE_MAPPINGS_FILTER_FIELD_VALUE,
    payload: {
      value,
    },
  };
}

export function updateMappingsFromFile(mappings) {
  return {
    type: UPDATE_MAPPINGS_FROM_FILE,
    payload: {
      mappings,
    },
  };
}

export function clearMappings() {
  return {
    type: CLEAR_MAPPINGS,
  };
}

export function changeStixVersion(stixVersion) {
  return {
    type: CHANGE_STIX_VERSION,
    payload: {
      version: stixVersion,
    },
  };
}

export function showCustomFieldModal() {
  return {
    type: SHOW_CUSTOM_FIELD_MODAL,
  };
}

export function closeCustomFieldModal() {
  return {
    type: CLOSE_CUSTOM_FIELD_MODAL,
  };
}
