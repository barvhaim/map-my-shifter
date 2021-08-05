export const OPEN_NEW_OBJECT_MODAL = "OPEN_NEW_OBJECT_MODAL";
export const CLOSE_NEW_OBJECT_MODAL = "CLOSE_NEW_OBJECT_MODAL";
export const ADD_NEW_OBJECT = "ADD_NEW_OBJECT";
export const REMOVE_OBJECT = "REMOVE_OBJECT";
export const ADD_DATASOURCE_FIELD = "ADD_DATASOURCE_FIELD";
export const REMOVE_DATASOURCE_FIELD = "REMOVE_DATASOURCE_FIELD";
export const UPDATE_DATASOURCE_FIELD = "UPDATE_DATASOURCE_FIELD";
export const REMOVE_MAPPING_FIELD = "REMOVE_MAPPING_FIELD";
export const ADD_MAPPING_FIELD = "ADD_MAPPING_FIELD";
export const UPDATE_MAPPING_FIELD = "UPDATE_MAPPING_FIELD";
export const CLEAR_MAPPINGS = "CLEAR_MAPPINGS";
export const UPDATE_MAPPINGS_FROM_FILE = "UPDATE_MAPPINGS_FROM_FILE";

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

export function addMappingField(objectName, fieldId, key) {
  return {
    type: ADD_MAPPING_FIELD,
    payload: {
      objectName,
      fieldId,
      key,
    },
  };
}

export function updateMappingField(
  objectName,
  fieldId,
  mappingId,
  value,
  type
) {
  return {
    type: UPDATE_MAPPING_FIELD,
    payload: {
      objectName,
      fieldId,
      mappingId,
      value,
      type,
    },
  };
}

export function removeMappingField(objectName, fieldId, mappingId) {
  return {
    type: REMOVE_MAPPING_FIELD,
    payload: {
      objectName,
      fieldId,
      mappingId,
    },
  };
}

export function clearMappings() {
  return {
    type: CLEAR_MAPPINGS,
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
