import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { v4 as uuidv4 } from "uuid";
export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj, {}, {}, "");
}
export function getDataSourceFieldId(
  stateMapping,
  objectName,
  fieldName,
  dataSourceFieldId
) {
  var ids = [];

  if (objectName in stateMapping) {
    ids = Object.keys(stateMapping[objectName]).filter(function (id) {
      return fieldName === stateMapping[objectName][id].field;
    });
  }

  var id = ids.length !== 0 ? ids[0] : dataSourceFieldId;
  return id;
}
export function shifterMappingToStateMapping(
  shifterMapping,
  stateMapping,
  metadataMapping,
  fieldName
) {
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach(function (dataSourceField) {
    var newFieldName = getFieldName(fieldName, dataSourceField);

    if (
      new Set(Object.keys(shifterMapping[dataSourceField])).has("key") &&
      shifterMapping[dataSourceField].key.constructor === String
    ) {
      if (new Set(Object.keys(shifterMapping[dataSourceField])).has("object")) {
        stateMapping = createStateMapping(
          shifterMapping,
          stateMapping,
          dataSourceField,
          newFieldName
        );
      } else {
        metadataMapping = createMetadata(
          shifterMapping,
          metadataMapping,
          dataSourceField,
          newFieldName
        );
      }
    } else shifterMappingToStateMapping(shifterMapping[dataSourceField], stateMapping, metadataMapping, newFieldName);
  });
  return [stateMapping, metadataMapping];
}
export function getFieldName(fieldName, dataSourceField) {
  return fieldName
    ? isNaN(parseInt(dataSourceField))
      ? "".concat(fieldName, ".").concat(dataSourceField)
      : fieldName
    : dataSourceField;
}
export function createStateMapping(
  shifterMapping,
  stateMapping,
  dataSourceField,
  fieldName
) {
  var _shifterMapping$dataS, _shifterMapping$dataS2;

  var objectName = shifterMapping[dataSourceField].object;
  var dataSourceFieldId = uuidv4();
  var mapped_to_id = uuidv4();
  var id = getDataSourceFieldId(
    stateMapping,
    objectName,
    fieldName,
    dataSourceFieldId
  );
  var references =
    (_shifterMapping$dataS = shifterMapping[dataSourceField]) === null ||
    _shifterMapping$dataS === void 0
      ? void 0
      : _shifterMapping$dataS.references;
  var transformer =
    (_shifterMapping$dataS2 = shifterMapping[dataSourceField]) === null ||
    _shifterMapping$dataS2 === void 0
      ? void 0
      : _shifterMapping$dataS2.transformer;
  if (!(objectName in stateMapping)) stateMapping[objectName] = {};
  if (!(id in stateMapping[objectName])) stateMapping[objectName][id] = {};

  if (!("field" in stateMapping[objectName][id])) {
    stateMapping[objectName][id] = {
      field: fieldName,
      mapped_to: [],
    };
  }

  stateMapping[objectName][id].mapped_to = [].concat(
    _toConsumableArray(stateMapping[objectName][id].mapped_to),
    [
      _objectSpread(
        _objectSpread(
          {
            id: mapped_to_id,
            key: shifterMapping[dataSourceField].key.replace(".", ":"),
          },
          transformer
            ? {
                transformer: transformer,
              }
            : {}
        ),
        references
          ? {
              references:
                references.constructor === Array ? references : [references],
            }
          : {}
      ),
    ]
  );
  return stateMapping;
}
export function createMetadata(
  shifterMapping,
  metadataMapping,
  dataSourceField,
  fieldName
) {
  var _shifterMapping$dataS3;

  var key = shifterMapping[dataSourceField].key;
  var transformer =
    (_shifterMapping$dataS3 = shifterMapping[dataSourceField]) === null ||
    _shifterMapping$dataS3 === void 0
      ? void 0
      : _shifterMapping$dataS3.transformer;
  var id = uuidv4();
  if (!(fieldName in metadataMapping)) metadataMapping[fieldName] = [];
  metadataMapping[fieldName] = [].concat(
    _toConsumableArray(metadataMapping[fieldName]),
    [
      _objectSpread(
        {
          id: id,
          key: key,
        },
        transformer
          ? {
              transformer: transformer,
            }
          : {}
      ),
    ]
  );
  return metadataMapping;
}
export function buildInnerField(sourceField, outputLevel) {
  var splitedField = sourceField.split(".");
  var innerField = splitedField[splitedField.length - 1];

  for (var i = 0; i < splitedField.length - 1; i++) {
    if (splitedField[i] in outputLevel)
      outputLevel = outputLevel[splitedField[i]];
    else {
      outputLevel[splitedField[i]] = {};
      outputLevel = outputLevel[splitedField[i]];
    }
  }

  return [innerField, outputLevel];
}
export function stateMappingToShifterMapping(stateMapping, metadataMapping) {
  var output = {};
  Object.keys(metadataMapping).forEach(function (field) {
    Object.keys(metadataMapping[field]).forEach(function (index) {
      var _metadataMapping$fiel;

      var transformer = getValue(
        (_metadataMapping$fiel = metadataMapping[field][index]) === null ||
          _metadataMapping$fiel === void 0
          ? void 0
          : _metadataMapping$fiel.transformer
      );

      if (!(field in output)) {
        output[field] = [];
      }

      output[field] = [].concat(_toConsumableArray(output[field]), [
        _objectSpread(
          _objectSpread(
            {
              key: metadataMapping[field][index].key,
            },
            transformer
              ? {
                  transformer: transformer,
                }
              : {}
          ),
          {},
          {
            cybox: false,
          }
        ),
      ]);
    });
  });
  Object.keys(stateMapping).forEach(function (object) {
    Object.keys(stateMapping[object]).forEach(function (field) {
      var sourceField = stateMapping[object][field].field;
      var mappedTo = stateMapping[object][field].mapped_to;
      Object.keys(mappedTo).forEach(function (index) {
        var _mappedTo$index;

        var key = mappedTo[index].key.replace(":", ".");
        var transformer = getValue(
          (_mappedTo$index = mappedTo[index]) === null ||
            _mappedTo$index === void 0
            ? void 0
            : _mappedTo$index.transformer
        );
        var references = getValue(mappedTo[index].references);
        var outputLevel = output;
        var innerField = sourceField;

        if (sourceField.includes(".")) {
          var _buildInnerField = buildInnerField(sourceField, outputLevel);

          var _buildInnerField2 = _slicedToArray(_buildInnerField, 2);

          innerField = _buildInnerField2[0];
          outputLevel = _buildInnerField2[1];
        }

        if (!(innerField in outputLevel)) {
          outputLevel[innerField] = [];
        }

        outputLevel[innerField] = [].concat(
          _toConsumableArray(outputLevel[innerField]),
          [
            _objectSpread(
              _objectSpread(
                {
                  key: key,
                  object: object,
                },
                transformer
                  ? {
                      transformer: transformer,
                    }
                  : {}
              ),
              references
                ? {
                    references: references,
                  }
                : {}
            ),
          ]
        );
      });
    });
  });
  return output;
}
export function getValue(value) {
  return value && value !== "None" && value.length !== 0 ? value : null;
}
export function getDataForStatistics(stixMapping, stixTypesSet) {
  var officialFields = new Set();
  var CustomFields = new Set();
  var officialObjects = new Set();
  var CustomObjects = new Set();
  Object.keys(stixMapping).forEach(function (object) {
    Object.keys(stixMapping[object]).forEach(function (id) {
      Object.keys(stixMapping[object][id].mapped_to).forEach(function (index) {
        var _stixMapping$object$i =
            stixMapping[object][id].mapped_to[index].key.split(":"),
          _stixMapping$object$i2 = _slicedToArray(_stixMapping$object$i, 2),
          type = _stixMapping$object$i2[0],
          key = _stixMapping$object$i2[1];

        if (stixTypesSet.has(type)) {
          officialFields.add("".concat(type, ":").concat(key));
          officialObjects.add(object);
        } else if (type.startsWith("x-")) {
          CustomFields.add("".concat(type, ":").concat(key));
          CustomObjects.add(object);
        }
      });
    });
  });
  var data = [
    officialFields.size,
    CustomFields.size,
    officialObjects.size,
    CustomObjects.size,
  ];
  return data;
}
export function isValidObjectName(oldName, newName, objects) {
  return newName && (oldName === newName || !objects.includes(newName));
}
export function isActiveObject(object, activObject) {
  return object === activObject;
}
