import { saveAs } from "file-saver";
import { v4 as uuidv4 } from "uuid";

export function stateMappingToShifterMapping(stateMapping) {
  let output = {};
  Object.keys(stateMapping).forEach((field) => {
    const type = field.split(":")[0];
    const key = field.split(":")[1];
    if (!(type in output)) {
      output[type] = { fields: {} };
    }
    output[type]["fields"][key] = stateMapping[field].values.map(
      (o) => o.value
    );
  });
  return output;
}

export function saveJsonToDisk(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
  });
  saveAs(blob, filename);
}

export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj);
}

function shifterMappingToStateMapping(shifterMapping) {
  let stateMapping = {};
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach((type) => {
    if ("fields" in shifterMapping[type]) {
      const fields = shifterMapping[type]["fields"];
      Object.keys(fields).forEach((key) => {
        stateMapping[`${type}:${key}`] = {
          values: fields[key].map((value) => ({
            value,
            id: uuidv4(),
          })),
        };
      });
    }
  });
  return stateMapping;
}

export function filterMappingFieldsForValue(mappings, value) {
  if (!value || value === "") return mappings;
  const lowerCaseValue = value.toLowerCase();
  return Object.keys(mappings)
    .filter((category) => category.toLowerCase().includes(lowerCaseValue))
    .reduce((obj, key) => {
      obj[key] = mappings[key];
      return obj;
    }, {});
}

export function getNumOfObjects(mapping, stixTypesSet, requiredSet) {
  //TODO: change name
  const officialObjects = new Set();
  const requiredObjects = new Set();
  Object.keys(mapping).forEach((field) => {
    const [type, key] = field.split(":");
    if (Object.keys(mapping[field].values).length > 0) {
      Object.keys(mapping[field].values).forEach((val) => {
        if (mapping[field].values[val].value !== "" && stixTypesSet.has(type)) {
          officialObjects.add(`${type}:${key}`);
          if (requiredSet.has(`${type}:${key}`)) {
            requiredObjects.add(`${type}:${key}`);
          }
        }
      });
    }
  });
  return [officialObjects, requiredObjects.size];
}

export function getNumOfFields(stixFields) {
  let officialFieldsCount = 0;
  let requiredFieldsCount = 0;
  Object.keys(stixFields).forEach((field) => {
    officialFieldsCount += stixFields[field].items.length;
    Object.keys(stixFields[field].items).forEach((item) => {
      if (stixFields[field].items[item].required) {
        requiredFieldsCount += 1;
      }
    });
  });
  return [officialFieldsCount, requiredFieldsCount];
}
