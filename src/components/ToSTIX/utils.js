import { v4 as uuidv4 } from "uuid";

export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj, {}, "");
}

export function getDataSourceFieldId(
  stateMapping,
  objectName,
  fieldName,
  dataSourceFieldId
) {
  let ids = [];
  if (objectName in stateMapping) {
    ids = Object.keys(stateMapping[objectName]).filter((id) => {
      return fieldName === stateMapping[objectName][id].field;
    });
  }
  const id = ids.length !== 0 ? ids[0] : dataSourceFieldId;
  return id;
}

export function shifterMappingToStateMapping(
  shifterMapping,
  stateMapping,
  fieldName
) {
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach((dataSourceField) => {
    const newFieldName = getFieldName(fieldName, dataSourceField);
    if (new Set(Object.keys(shifterMapping[dataSourceField])).has("key")) {
      if (new Set(Object.keys(shifterMapping[dataSourceField])).has("object")) {
        stateMapping = createStateMapping(
          shifterMapping,
          stateMapping,
          dataSourceField,
          newFieldName
        );
      } else {
        console.log("TODO - metadata");
      }
    } else
      shifterMappingToStateMapping(
        shifterMapping[dataSourceField],
        stateMapping,
        newFieldName
      );
  });
  return stateMapping;
}

export function getFieldName(fieldName, dataSourceField) {
  return fieldName
    ? isNaN(parseInt(dataSourceField))
      ? `${fieldName}.${dataSourceField}`
      : fieldName
    : dataSourceField;
}

export function createStateMapping(
  shifterMapping,
  stateMapping,
  dataSourceField,
  fieldName
) {
  const objectName = shifterMapping[dataSourceField].object;
  const dataSourceFieldId = uuidv4();
  const mapped_to_id = uuidv4();
  let id = getDataSourceFieldId(
    stateMapping,
    objectName,
    fieldName,
    dataSourceFieldId
  );
  const references = shifterMapping[dataSourceField]?.references;
  const transformer = shifterMapping[dataSourceField]?.transformer;

  if (!(objectName in stateMapping)) stateMapping[objectName] = {};
  if (!(id in stateMapping[objectName])) stateMapping[objectName][id] = {};
  if (!("field" in stateMapping[objectName][id])) {
    stateMapping[objectName][id] = {
      field: fieldName,
      mapped_to: [],
    };
  }
  stateMapping[objectName][id].mapped_to = [
    ...stateMapping[objectName][id].mapped_to,
    {
      id: mapped_to_id,
      key: shifterMapping[dataSourceField].key.replace(".", ":"),
      ...(transformer ? { transformer: transformer } : {}),
      ...(references ? { references: references } : {}),
    },
  ];
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
        const transformer = getValue(mappedTo, index, "transformer");
        const references = getValue(mappedTo, index, "references");
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

export function getValue(mappedTo, index, valueType) {
  return mappedTo[index][valueType] && mappedTo[index][valueType] !== "None"
    ? mappedTo[index][valueType]
    : null;
}

export function getDataForStatistics(mapping, stixTypesSet) {
  const officialFields = new Set();
  const CustomFields = new Set();
  const officialObjects = new Set();
  const CustomObjects = new Set();
  Object.keys(mapping).forEach((object) => {
    Object.keys(mapping[object]).forEach((id) => {
      Object.keys(mapping[object][id].mapped_to).forEach((index) => {
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
  const data = [
    officialFields.size,
    CustomFields.size,
    officialObjects.size,
    CustomObjects.size,
  ];
  return data;
}
