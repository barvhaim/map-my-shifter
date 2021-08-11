export const OPEN_NEW_OBJECT_MODAL = "OPEN_NEW_OBJECT_MODAL";
export const CLOSE_NEW_OBJECT_MODAL = "CLOSE_NEW_OBJECT_MODAL";
export const ADD_NEW_OBJECT = "ADD_NEW_OBJECT";
export const REMOVE_OBJECT = "REMOVE_OBJECT";
export const ADD_DATASOURCE_FIELD = "ADD_DATASOURCE_FIELD";
export const REMOVE_DATASOURCE_FIELD = "REMOVE_DATASOURCE_FIELD";
export const UPDATE_DATASOURCE_FIELD = "UPDATE_DATASOURCE_FIELD";
export const REMOVE_STIX_FIELD = "REMOVE_STIX_FIELD";
export const ADD_STIX_FIELD = "ADD_STIX_FIELD";
export const UPDATE_STIX_FIELD = "UPDATE_STIX_FIELD";
export const CLEAR_TO_STIX_MAPPINGS = "CLEAR_TO_STIX_MAPPINGS";
export const UPDATE_TO_STIX_MAPPINGS_FROM_FILE =
  "UPDATE_TO_STIX_MAPPINGS_FROM_FILE";
export const OPEN_SELECT_FIELD_MODAL = "OPEN_SELECT_FIELD_MODAL";
export const CLOSE_SELECT_FIELD_MODAL = "CLOSE_SELECT_FIELD_MODAL";

export function openNewObjectModal() {
  return {
    type: OPEN_NEW_OBJECT_MODAL,
  };
}

export function closeNewObjectModal() {
  return {
    type: CLOSE_NEW_OBJECT_MODAL,
  };
}

export function openSelectFieldModal() {
  return {
    type: OPEN_SELECT_FIELD_MODAL,
  };
}

export function closeSelectFieldModal() {
  return {
    type: CLOSE_SELECT_FIELD_MODAL,
  };
}

export function addNewObject(name) {
  return {
    type: ADD_NEW_OBJECT,
    payload: {
      name,
    },
  };
}

export function removeObject(name) {
  return {
    type: REMOVE_OBJECT,
    payload: {
      name,
    },
  };
}

export function addDataSourceField(objectName, fieldName) {
  return {
    type: ADD_DATASOURCE_FIELD,
    payload: {
      objectName,
      fieldName,
    },
  };
}

export function updateDataSourceField(objectName, fieldId, fieldName) {
  return {
    type: UPDATE_DATASOURCE_FIELD,
    payload: {
      objectName,
      fieldId,
      fieldName,
    },
  };
}

export function removeDataSourceField(objectName, fieldId) {
  return {
    type: REMOVE_DATASOURCE_FIELD,
    payload: {
      objectName,
      fieldId,
    },
  };
}

export function addStixField(objectName, fieldId, key) {
  return {
    type: ADD_STIX_FIELD,
    payload: {
      objectName,
      fieldId,
      key,
    },
  };
}

export function updateStixField(
  objectName,
  fieldId,
  mappingId,
  value,
  type,
  required = false
) {
  return {
    type: UPDATE_STIX_FIELD,
    payload: {
      objectName,
      fieldId,
      mappingId,
      value,
      type,
      required,
    },
  };
}

export function removeStixField(objectName, fieldId, mappingId) {
  return {
    type: REMOVE_STIX_FIELD,
    payload: {
      objectName,
      fieldId,
      mappingId,
    },
  };
}

export function clearMappings() {
  return {
    type: CLEAR_TO_STIX_MAPPINGS,
  };
}

export function updateMappingsFromFile(mappings) {
  return {
    type: UPDATE_TO_STIX_MAPPINGS_FROM_FILE,
    payload: {
      mappings,
    },
  };
}
