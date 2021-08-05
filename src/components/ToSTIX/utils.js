import { v4 as uuidv4 } from "uuid";

export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj, {}, "");
}

function getDataSourceFieldId(stateMapping, objectName, dataSourceField) {
  if (objectName in stateMapping) {
    const ids = Object.keys(stateMapping[objectName]).filter((id) => {
      return dataSourceField === stateMapping[objectName][id].field;
    });
    return ids[0];
  }
}

function shifterMappingToStateMapping(shifterMapping, stateMapping, fieldName) {
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach((dataSourceField) => {
    if (new Set(Object.keys(shifterMapping[dataSourceField])).has("key")) {
      if (new Set(Object.keys(shifterMapping[dataSourceField])).has("object")) {
        const objectName = shifterMapping[dataSourceField].object;
        const dataSourceFieldId = uuidv4();
        const mapped_to_id = uuidv4();
        const id = getDataSourceFieldId(
          stateMapping,
          objectName,
          dataSourceField
        );
        // || dataSourceFieldId;
        const references = shifterMapping[dataSourceField]?.references;
        const transformer = shifterMapping[dataSourceField]?.transformer;
        // if (!fieldName) {
        //   fieldName = dataSourceField;
        // }
        const mappedTo = {
          id: mapped_to_id,
          key: shifterMapping[dataSourceField].key,
          ...(transformer ? { transformer: transformer } : {}),
          ...(references ? { references: references } : {}),
        };

        stateMapping[objectName] = {
          ...stateMapping[objectName],
        };

        // stateMapping = {
        //   ...stateMapping,
        //   [objectName]: {
        //     ...stateMapping[objectName],
        //     [id] : {
        //       ...stateMapping[objectName][id],
        //       ...(id===dataSourceFieldId ? { field: fieldName? fieldName : dataSourceField } : {}),
        //       mapped_to: [
        //         ...stateMapping[objectName][id].mapped_to,
        //         mappedTo,
        //       ]
        //     }
        //   }
        // }

        if (id) {
          // console.log(stateMapping)
          // console.log(stateMapping[objectName])
          // console.log(stateMapping[objectName][id])
          // console.log(stateMapping[objectName][id].mapped_to)
          stateMapping[objectName][id] = {
            ...stateMapping[objectName][id],
            mapped_to: [...stateMapping[objectName][id].mapped_to, mappedTo],
          };
        } else {
          stateMapping[objectName][dataSourceFieldId] = {
            field: fieldName ? fieldName : dataSourceField,
            mapped_to: [mappedTo],
          };
        }
      } else {
        console.log("metadata");
      }
    } else {
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
