export var OPEN_NEW_OBJECT_MODAL = "OPEN_NEW_OBJECT_MODAL";
export var CLOSE_NEW_OBJECT_MODAL = "CLOSE_NEW_OBJECT_MODAL";
export var ADD_NEW_STIX_OBJECT = "ADD_NEW_STIX_OBJECT";
export var ADD_NEW_METADATA_OBJECT = "ADD_NEW_METADATA_OBJECT";
export var UPDATE_OBJECT_NAME = "UPDATE_OBJECT_NAME";
export var REMOVE_STIX_OBJECT = "REMOVE_STIX_OBJECT";
export var REMOVE_METADATA_OBJECT = "REMOVE_METADATA_OBJECT";
export var ADD_DATASOURCE_FIELD = "ADD_DATASOURCE_FIELD";
export var REMOVE_DATASOURCE_FIELD = "REMOVE_DATASOURCE_FIELD";
export var MOVE_DATASOURCE_FIELD_TO_OBJECT = "MOVE_DATASOURCE_FIELD_TO_OBJECT";
export var UPDATE_DATASOURCE_FIELD = "UPDATE_DATASOURCE_FIELD";
export var REMOVE_STIX_FIELD = "REMOVE_STIX_FIELD";
export var ADD_STIX_FIELD = "ADD_STIX_FIELD";
export var UPDATE_STIX_FIELD = "UPDATE_STIX_FIELD";
export var ADD_METADATA_FIELD = "ADD_METADATA_FIELD";
export var REMOVE_METADATA_FIELD = "REMOVE_METADATA_FIELD";
export var UPDATE_METADATA_FIELD = "UPDATE_METADATA_FIELD";
export var CLEAR_TO_STIX_MAPPINGS = "CLEAR_TO_STIX_MAPPINGS";
export var UPDATE_TO_STIX_MAPPINGS_FROM_FILE =
  "UPDATE_TO_STIX_MAPPINGS_FROM_FILE";
export var OPEN_SELECT_FIELD_MODAL = "OPEN_SELECT_FIELD_MODAL";
export var CLOSE_SELECT_FIELD_MODAL = "CLOSE_SELECT_FIELD_MODAL";
export var OPEN_MOVE_FIELD_TO_OBJECT_MODAL = "OPEN_MOVE_FIELD_TO_OBJECT_MODAL";
export var CLOSE_MOVE_FIELD_TO_OBJECT_MODAL =
  "CLOSE_MOVE_FIELD_TO_OBJECT_MODAL";
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
export function openSelectFieldModal(objectKey, sourceFieldId, stixFieldId) {
  return {
    type: OPEN_SELECT_FIELD_MODAL,
    payload: {
      objectKey: objectKey,
      sourceFieldId: sourceFieldId,
      stixFieldId: stixFieldId,
    },
  };
}
export function closeSelectFieldModal() {
  return {
    type: CLOSE_SELECT_FIELD_MODAL,
  };
}
export function openMoveFieldToObjectModal(objectKey, fieldId, fieldName) {
  return {
    type: OPEN_MOVE_FIELD_TO_OBJECT_MODAL,
    payload: {
      objectKey: objectKey,
      fieldId: fieldId,
      fieldName: fieldName,
    },
  };
}
export function closeMoveFieldToObjectModal() {
  return {
    type: CLOSE_MOVE_FIELD_TO_OBJECT_MODAL,
  };
}
export function addNewStixObject(name) {
  return {
    type: ADD_NEW_STIX_OBJECT,
    payload: {
      name: name,
    },
  };
}
export function addNewMetadataObject(name) {
  return {
    type: ADD_NEW_METADATA_OBJECT,
    payload: {
      name: name,
    },
  };
}
export function removeStixObject(name) {
  return {
    type: REMOVE_STIX_OBJECT,
    payload: {
      name: name,
    },
  };
}
export function removeMetadataObject(name) {
  return {
    type: REMOVE_METADATA_OBJECT,
    payload: {
      name: name,
    },
  };
}
export function updateObjectName(oldName, newName, isStix) {
  return {
    type: UPDATE_OBJECT_NAME,
    payload: {
      oldName: oldName,
      newName: newName,
      isStix: isStix,
    },
  };
}
export function addDataSourceField(objectName) {
  return {
    type: ADD_DATASOURCE_FIELD,
    payload: {
      objectName: objectName,
    },
  };
}
export function updateDataSourceField(objectName, fieldId, fieldName) {
  return {
    type: UPDATE_DATASOURCE_FIELD,
    payload: {
      objectName: objectName,
      fieldId: fieldId,
      fieldName: fieldName,
    },
  };
}
export function removeDataSourceField(objectName, fieldId) {
  return {
    type: REMOVE_DATASOURCE_FIELD,
    payload: {
      objectName: objectName,
      fieldId: fieldId,
    },
  };
}
export function moveDataSourceFieldToObject(objectToMoveTo) {
  return {
    type: MOVE_DATASOURCE_FIELD_TO_OBJECT,
    payload: {
      objectToMoveTo: objectToMoveTo,
    },
  };
}
export function addStixField(objectName, fieldId, key) {
  return {
    type: ADD_STIX_FIELD,
    payload: {
      objectName: objectName,
      fieldId: fieldId,
      key: key,
    },
  };
}
export function updateStixField(value, type, objectName, fieldId, mappingId) {
  return {
    type: UPDATE_STIX_FIELD,
    payload: {
      value: value,
      type: type,
      objectName: objectName,
      fieldId: fieldId,
      mappingId: mappingId,
    },
  };
}
export function removeStixField(objectName, fieldId, mappingId) {
  return {
    type: REMOVE_STIX_FIELD,
    payload: {
      objectName: objectName,
      fieldId: fieldId,
      mappingId: mappingId,
    },
  };
}
export function addMetadataField(objectName) {
  return {
    type: ADD_METADATA_FIELD,
    payload: {
      objectName: objectName,
    },
  };
}
export function removeMetadataField(objectName, mappingId) {
  return {
    type: REMOVE_METADATA_FIELD,
    payload: {
      objectName: objectName,
      mappingId: mappingId,
    },
  };
}
export function updateMetadataField(value, type, objectName, mappingId) {
  return {
    type: UPDATE_METADATA_FIELD,
    payload: {
      value: value,
      type: type,
      objectName: objectName,
      mappingId: mappingId,
    },
  };
}
export function clearMappings() {
  return {
    type: CLEAR_TO_STIX_MAPPINGS,
  };
}
export function updateMappingsFromFile(stixMapping, metadataMapping) {
  return {
    type: UPDATE_TO_STIX_MAPPINGS_FROM_FILE,
    payload: {
      stixMapping: stixMapping,
      metadataMapping: metadataMapping,
    },
  };
}
