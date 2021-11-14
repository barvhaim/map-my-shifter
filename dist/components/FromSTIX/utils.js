import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { v4 as uuidv4 } from "uuid";
export function stateMappingToShifterMapping(stateMapping) {
  var output = {};
  Object.keys(stateMapping).forEach(function (field) {
    var type = field.split(":")[0];
    var key = field.split(":")[1];
    if (!(type in output))
      output[type] = {
        fields: {},
      };
    output[type]["fields"][key] = stateMapping[field].values.map(function (o) {
      return o.value;
    });
  });
  return output;
}
export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj);
}
export function shifterMappingToStateMapping(shifterMapping) {
  var stateMapping = {};
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach(function (type) {
    if ("fields" in shifterMapping[type]) {
      var fields = shifterMapping[type]["fields"];
      Object.keys(fields).forEach(function (key) {
        stateMapping["".concat(type, ":").concat(key)] = {
          values: fields[key].map(function (value) {
            return {
              value: value,
              id: uuidv4(),
            };
          }),
        };
      });
    }
  });
  return [stateMapping, {}];
}
export function filterMappingFieldsForValue(stixMapping, value) {
  if (!value || value === "") return stixMapping;
  var lowerCaseValue = value.toLowerCase();
  return Object.keys(stixMapping)
    .filter(function (category) {
      return category.toLowerCase().includes(lowerCaseValue);
    })
    .reduce(function (obj, key) {
      obj[key] = stixMapping[key];
      return obj;
    }, {});
}
export function getOfficialFieldsFromMapping(
  stixMapping,
  stixFieldsByKey,
  stixFieldsFromMapping
) {
  Object.keys(stixMapping).forEach(function (field) {
    var _field$split = field.split(":"),
      _field$split2 = _slicedToArray(_field$split, 2),
      type = _field$split2[0],
      key = _field$split2[1];

    if (Object.keys(stixMapping[field].values).length > 0) {
      Object.keys(stixMapping[field].values).forEach(function (val) {
        var _stixFieldsByKey$type;

        if (
          stixMapping[field].values[val].value !== "" &&
          ((_stixFieldsByKey$type = stixFieldsByKey[type]) === null ||
          _stixFieldsByKey$type === void 0
            ? void 0
            : _stixFieldsByKey$type.includes(key))
        ) {
          stixFieldsFromMapping[type].add("".concat(key));
        }
      });
    }
  });
  return stixFieldsFromMapping;
}
export function getDataForStatistics(officialFields, requiredStixFields) {
  var officialObjectsCount = 0;
  var requiredObjectsCount = 0;
  Object.keys(officialFields).forEach(function (type) {
    officialObjectsCount += officialFields[type].size;
    officialFields[type].forEach(function (key) {
      if (requiredStixFields.has("".concat(type, ":").concat(key)))
        requiredObjectsCount++;
    });
  });
  return [officialObjectsCount, requiredObjectsCount];
}
export function getNumOfFields(stixFields) {
  var officialFieldsCount = 0;
  var requiredFieldsCount = 0;
  Object.keys(stixFields).forEach(function (field) {
    officialFieldsCount += stixFields[field].items.length;
    Object.keys(stixFields[field].items).forEach(function (item) {
      if (stixFields[field].items[item].required) requiredFieldsCount += 1;
    });
  });
  return [officialFieldsCount, requiredFieldsCount];
}
