export const OPEN_NEW_OBJECT_MODAL = "OPEN_NEW_OBJECT_MODAL";
export const CLOSE_NEW_OBJECT_MODAL = "CLOSE_NEW_OBJECT_MODAL";
export const ADD_NEW_OBJECT = "ADD_NEW_OBJECT";
export const REMOVE_OBJECT = "REMOVE_OBJECT";
export const ADD_DATASOURCE_FIELD = "ADD_DATASOURCE_FIELD";
export const REMOVE_DATASOURCE_FIELD = "REMOVE_DATASOURCE_FIELD";

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

export function addDataSourceField(objectName) {
  return {
    type: ADD_DATASOURCE_FIELD,
    payload: {
      objectName,
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
