export var ADD_FIELD = "ADD_FIELD";
export var DELETE_FIELD = "DELETE_FIELD";
export var ADD_VALUE = "ADD_VALUE";
export var UPDATE_VALUE = "UPDATE_VALUE";
export var DELETE_VALUE = "DELETE_VALUE";
export var UPDATE_SEARCH_FIELD_VALUE = "UPDATE_SEARCH_FIELD_VALUE";
export var UPDATE_FROM_STIX_MAPPINGS_FROM_FILE =
  "UPDATE_FROM_STIX_MAPPINGS_FROM_FILE";
export var UPDATE_MAPPINGS_FILTER_FIELD_VALUE =
  "UPDATE_MAPPINGS_FILTER_FIELD_VALUE";
export var CLEAR_FROM_STIX_MAPPINGS = "CLEAR_FROM_STIX_MAPPINGS";
export var SHOW_CUSTOM_FIELD_MODAL = "SHOW_CUSTOM_FIELD_MODAL";
export var CLOSE_CUSTOM_FIELD_MODAL = "CLOSE_CUSTOM_FIELD_MODAL";
export function addField(field) {
  var required =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: ADD_FIELD,
    payload: {
      field: field,
      required: required,
    },
  };
}
export function deleteField(field) {
  return {
    type: DELETE_FIELD,
    payload: {
      field: field,
    },
  };
}
export function addValue(field) {
  return {
    type: ADD_VALUE,
    payload: {
      field: field,
    },
  };
}
export function deleteValue(field, id) {
  return {
    type: DELETE_VALUE,
    payload: {
      field: field,
      id: id,
    },
  };
}
export function updateValue(field, id, value) {
  return {
    type: UPDATE_VALUE,
    payload: {
      field: field,
      id: id,
      value: value,
    },
  };
}
export function updateMappingsFilterFieldValue(value) {
  return {
    type: UPDATE_MAPPINGS_FILTER_FIELD_VALUE,
    payload: {
      value: value,
    },
  };
}
export function updateMappingsFromFile(stixMapping) {
  return {
    type: UPDATE_FROM_STIX_MAPPINGS_FROM_FILE,
    payload: {
      stixMapping: stixMapping,
    },
  };
}
export function clearMappings() {
  return {
    type: CLEAR_FROM_STIX_MAPPINGS,
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
