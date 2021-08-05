import { v4 as uuidv4 } from "uuid";

export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj, {}, "");
}

function getDataSourceFieldId(stateMapping, objectName, dataSourceField) {
  if (objectName in stateMapping) {
    const ids = Object.keys(stateMapping[objectName]).filter((id) => {
      return dataSourceField === stateMapping[objectName][id].field;
    });
    console.log(ids);
    return ids[0];
  }
}

function shifterMappingToStateMapping(shifterMapping, stateMapping, fieldName) {
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach((dataSourceField) => {
    console.log(shifterMapping);
    console.log(dataSourceField);
    console.log(shifterMapping[dataSourceField]);
    let references = null;
    let transformer = null;
    if (new Set(Object.keys(shifterMapping[dataSourceField])).has("key")) {
      console.log(shifterMapping[dataSourceField].key);
      if (new Set(Object.keys(shifterMapping[dataSourceField])).has("object")) {
        const objectName = shifterMapping[dataSourceField].object;
        if (
          new Set(Object.keys(shifterMapping[dataSourceField])).has(
            "references"
          )
        ) {
          references = shifterMapping[dataSourceField].references;
        }
        if (
          new Set(Object.keys(shifterMapping[dataSourceField])).has(
            "transformer"
          )
        ) {
          transformer = shifterMapping[dataSourceField].transformer;
        }
        const dataSourceFieldId = uuidv4();
        const mapped_to_id = uuidv4();

        const id =
          getDataSourceFieldId(stateMapping, objectName, dataSourceField) ||
          dataSourceFieldId;
        if (!fieldName) {
          fieldName = dataSourceField;
        }
        stateMapping[objectName] = {
          ...stateMapping[objectName],
          [id]: {
            ...(id !== dataSourceFieldId ? stateMapping[objectName][id] : {}),
            ...(id === dataSourceFieldId ? { field: fieldName } : {}),
            mapped_to: [
              ...(id === dataSourceFieldId
                ? {}
                : { ...stateMapping[objectName][id].mapped_to }),
              {
                id: mapped_to_id,
                key: shifterMapping[dataSourceField].key,
                references: references ? references : "",
                transformer: transformer ? transformer : "",
              },
            ],
          },
        };
      } else {
        console.log("metadata");
      }
    } else {
      console.log("hey");
      shifterMappingToStateMapping(
        shifterMapping[dataSourceField],
        stateMapping,
        dataSourceField
      );
    }
  });
  console.log(stateMapping);
  return stateMapping;
}

export function stateMappingToShifterMapping(stateMapping) {
  let output = {};
  Object.keys(stateMapping).forEach((object) => {
    Object.keys(stateMapping[object]).forEach((field) => {
      const _field = stateMapping[object][field].field;
      const mappedTo = stateMapping[object][field].mapped_to;
      Object.keys(mappedTo).forEach((index) => {
        const key = mappedTo[index].key;
        const transformer = mappedTo[index].transformer
          ? mappedTo[index].transformer
          : null;
        let references = mappedTo[index].references
          ? mappedTo[index].references
          : null;
        if (!(_field in output)) {
          output[_field] = [];
        }
        if (!(key in output[_field])) {
          output = {
            ...output,
            [_field]: [
              ...output[_field],
              {
                key: key,
                object: object,
                ...(transformer ? { transformer: transformer } : {}),
                ...(references ? { references: references } : {}),
              },
            ],
          };
        }
      });
    });
  });
  console.log(output);
  return output;
}
