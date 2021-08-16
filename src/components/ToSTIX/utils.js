import { v4 as uuidv4 } from "uuid";

export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj, {}, "");
}

function getDataSourceFieldId(
  stateMapping,
  objectName,
  dataSourceField,
  dataSourceFieldId
) {
  let ids = [];
  if (objectName in stateMapping) {
    ids = Object.keys(stateMapping[objectName]).filter((id) => {
      return dataSourceField === stateMapping[objectName][id].field;
    });
  }
  return ids.length !== 0 ? ids[0] : dataSourceFieldId;
}

function shifterMappingToStateMapping(shifterMapping, stateMapping, fieldName) {
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach((dataSourceField) => {
    if (typeof Object.keys(shifterMapping[dataSourceField]) === Array) {
      shifterMappingToStateMapping(
        shifterMapping[dataSourceField],
        stateMapping,
        dataSourceField
      );
    } else if (
      new Set(Object.keys(shifterMapping[dataSourceField])).has("key")
    ) {
      if (new Set(Object.keys(shifterMapping[dataSourceField])).has("object")) {
        const objectName = shifterMapping[dataSourceField].object;
        const dataSourceFieldId = uuidv4();
        const mapped_to_id = uuidv4();
        let id = getDataSourceFieldId(
          stateMapping,
          objectName,
          dataSourceField,
          dataSourceFieldId
        );

        const references = shifterMapping[dataSourceField]?.references;
        const transformer = shifterMapping[dataSourceField]?.transformer;

        const mappedTo = {
          id: mapped_to_id,
          key: shifterMapping[dataSourceField].key.replace(".", ":"),
          ...(transformer ? { transformer: transformer } : {}),
          ...(references ? { references: references } : {}),
        };

        stateMapping[objectName] = {
          ...stateMapping[objectName],
        };
        stateMapping[objectName][id] = {
          ...stateMapping[objectName][id],
          ...(id === dataSourceFieldId
            ? { field: fieldName ? fieldName : dataSourceField }
            : {}),
          mapped_to: [
            id !== dataSourceFieldId
              ? { ...stateMapping[objectName][id].mapped_to, ...mappedTo }
              : mappedTo,
          ],
        };
      } else {
        console.log("TODO - metadata");
      }
    } else {
      const newFieldName = fieldName
        ? `${fieldName}.${dataSourceField}`
        : dataSourceField;
      shifterMappingToStateMapping(
        shifterMapping[dataSourceField],
        stateMapping,
        newFieldName
      );
    }
  });
  return stateMapping;
}

export function stateMappingToShifterMapping(stateMapping) {
  let output = {};
  Object.keys(stateMapping).forEach((object) => {
    Object.keys(stateMapping[object]).forEach((field) => {
      const _field = stateMapping[object][field].field;
      const mappedTo = stateMapping[object][field].mapped_to;
      Object.keys(mappedTo).forEach((index) => {
        const key = mappedTo[index].key.replace(":", ".");
        const transformer =
          mappedTo[index].transformer && mappedTo[index].transformer !== "None"
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
  return output;
}

export function getDataForStatistics(mapping, stixTypesSet) {
  console.log(mapping);
  const officialFields = new Set();
  const CustomFields = new Set();
  const officialObjects = new Set();
  const CustomObjects = new Set();
  Object.keys(mapping).forEach((object) => {
    Object.keys(mapping[object]).forEach((id) => {
      Object.keys(mapping[object][id].mapped_to).forEach((index) => {
        console.log(mapping);
        console.log(mapping[object]);
        console.log(mapping[object][id]);
        console.log(mapping[object][id].mapped_to);
        console.log(mapping[object][id].mapped_to[index]);
        console.log(mapping[object][id].mapped_to[index].key);
        const [type, key] = mapping[object][id].mapped_to[index].key.split(":");
        if (stixTypesSet.has(type)) {
          officialFields.add(`${type}:${key}`);
          officialObjects.add(object);
        } else if (type.startsWith("x-")) {
          CustomFields.add(`${type}:${key}`);
          CustomObjects.add(object);
        }
      });
    });
  });
  return [
    officialFields.size,
    CustomFields.size,
    officialObjects.size,
    CustomObjects.size,
  ];
}
