import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toPropertyKey from "@babel/runtime/helpers/esm/toPropertyKey";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_DATASOURCE_FIELD,
  ADD_NEW_STIX_OBJECT,
  ADD_NEW_METADATA_OBJECT,
  UPDATE_OBJECT_NAME,
  OPEN_NEW_OBJECT_MODAL,
  CLOSE_NEW_OBJECT_MODAL,
  REMOVE_DATASOURCE_FIELD,
  MOVE_DATASOURCE_FIELD_TO_OBJECT,
  REMOVE_STIX_OBJECT,
  REMOVE_METADATA_OBJECT,
  UPDATE_DATASOURCE_FIELD,
  ADD_STIX_FIELD,
  REMOVE_STIX_FIELD,
  UPDATE_STIX_FIELD,
  ADD_METADATA_FIELD,
  REMOVE_METADATA_FIELD,
  UPDATE_METADATA_FIELD,
  CLEAR_TO_STIX_MAPPINGS,
  UPDATE_TO_STIX_MAPPINGS_FROM_FILE,
  OPEN_SELECT_FIELD_MODAL,
  CLOSE_SELECT_FIELD_MODAL,
  OPEN_MOVE_FIELD_TO_OBJECT_MODAL,
  CLOSE_MOVE_FIELD_TO_OBJECT_MODAL,
} from "../actions/to_stix";
var INITIAL_STATE = {
  isNewObjectModalOpen: false,
  isNewMetadataFieldModalOpen: false,
  selectFieldModalData: null,
  moveFieldToObjectModalData: null,
  stixMapping: {},
  stixObjects: [],
  metadataMapping: {},
  metadataObjects: [],
};

var ToSTIXReducer = function ToSTIXReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case OPEN_NEW_OBJECT_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          isNewObjectModalOpen: true,
        }
      );
    }

    case CLOSE_NEW_OBJECT_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          isNewObjectModalOpen: false,
        }
      );
    }

    case OPEN_SELECT_FIELD_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          selectFieldModalData: {
            objectKey: action.payload.objectKey,
            sourceFieldId: action.payload.sourceFieldId,
            stixFieldId: action.payload.stixFieldId,
          },
        }
      );
    }

    case CLOSE_SELECT_FIELD_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          selectFieldModalData: null,
        }
      );
    }

    case OPEN_MOVE_FIELD_TO_OBJECT_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          moveFieldToObjectModalData: {
            objectKey: action.payload.objectKey,
            fieldId: action.payload.fieldId,
            fieldName: action.payload.fieldName,
          },
        }
      );
    }

    case CLOSE_MOVE_FIELD_TO_OBJECT_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          moveFieldToObjectModalData: null,
        }
      );
    }

    case ADD_NEW_STIX_OBJECT: {
      var _action$payload;

      if (
        !(
          ((_action$payload = action.payload) === null ||
          _action$payload === void 0
            ? void 0
            : _action$payload.name) in state.stixMapping
        )
      ) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixObjects: [].concat(_toConsumableArray(state.stixObjects), [
              action.payload.name,
            ]),
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty({}, action.payload.name, {})
            ),
          }
        );
      }

      return state;
    }

    case ADD_NEW_METADATA_OBJECT: {
      var _action$payload2;

      if (
        !(
          ((_action$payload2 = action.payload) === null ||
          _action$payload2 === void 0
            ? void 0
            : _action$payload2.name) in state.metadataMapping
        )
      ) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            metadataMapping: _objectSpread(
              _objectSpread({}, state.metadataMapping),
              {},
              _defineProperty({}, action.payload.name, [])
            ),
          }
        );
      }

      return state;
    }

    case REMOVE_STIX_OBJECT: {
      var _action$payload3;

      if (
        ((_action$payload3 = action.payload) === null ||
        _action$payload3 === void 0
          ? void 0
          : _action$payload3.name) in state.stixMapping
      ) {
        var _action$payload4;

        var _state$stixMapping = state.stixMapping,
          _action$payload$name =
            (_action$payload4 = action.payload) === null ||
            _action$payload4 === void 0
              ? void 0
              : _action$payload4.name,
          omit = _state$stixMapping[_action$payload$name],
          restOfMapping = _objectWithoutProperties(
            _state$stixMapping,
            [_action$payload$name].map(_toPropertyKey)
          );

        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixObjects: Object.keys(restOfMapping),
            stixMapping: restOfMapping,
          }
        );
      }

      return state;
    }

    case REMOVE_METADATA_OBJECT: {
      var _action$payload5;

      if (
        ((_action$payload5 = action.payload) === null ||
        _action$payload5 === void 0
          ? void 0
          : _action$payload5.name) in state.metadataMapping
      ) {
        var _action$payload6;

        var _state$metadataMappin = state.metadataMapping,
          _action$payload$name2 =
            (_action$payload6 = action.payload) === null ||
            _action$payload6 === void 0
              ? void 0
              : _action$payload6.name,
          _omit = _state$metadataMappin[_action$payload$name2],
          _restOfMapping = _objectWithoutProperties(
            _state$metadataMappin,
            [_action$payload$name2].map(_toPropertyKey)
          );

        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            metadataMapping: _restOfMapping,
          }
        );
      }

      return state;
    }

    case ADD_DATASOURCE_FIELD: {
      var _action$payload7;

      var objectName =
        (_action$payload7 = action.payload) === null ||
        _action$payload7 === void 0
          ? void 0
          : _action$payload7.objectName;

      if (objectName in state.stixMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                objectName,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[objectName]),
                  {},
                  _defineProperty({}, uuidv4(), {
                    field: "",
                    mapped_to: [],
                  })
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case UPDATE_DATASOURCE_FIELD: {
      var _action$payload8, _action$payload9, _action$payload10;

      var _objectName =
        (_action$payload8 = action.payload) === null ||
        _action$payload8 === void 0
          ? void 0
          : _action$payload8.objectName;

      var fieldName =
        (_action$payload9 = action.payload) === null ||
        _action$payload9 === void 0
          ? void 0
          : _action$payload9.fieldName;
      var fieldId =
        (_action$payload10 = action.payload) === null ||
        _action$payload10 === void 0
          ? void 0
          : _action$payload10.fieldId;

      if (
        _objectName in state.stixMapping &&
        fieldId in state.stixMapping[_objectName]
      ) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                _objectName,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[_objectName]),
                  {},
                  _defineProperty(
                    {},
                    fieldId,
                    _objectSpread(
                      _objectSpread(
                        {},
                        state.stixMapping[_objectName][fieldId]
                      ),
                      {},
                      {
                        field: fieldName,
                      }
                    )
                  )
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case REMOVE_DATASOURCE_FIELD: {
      var _action$payload11, _action$payload12;

      var _objectName2 =
        (_action$payload11 = action.payload) === null ||
        _action$payload11 === void 0
          ? void 0
          : _action$payload11.objectName;

      var _fieldId =
        (_action$payload12 = action.payload) === null ||
        _action$payload12 === void 0
          ? void 0
          : _action$payload12.fieldId;

      if (
        _objectName2 in state.stixMapping &&
        _fieldId in state.stixMapping[_objectName2]
      ) {
        var _state$stixMapping$_o = state.stixMapping[_objectName2],
          _omit2 = _state$stixMapping$_o[_fieldId],
          restOfFields = _objectWithoutProperties(
            _state$stixMapping$_o,
            [_fieldId].map(_toPropertyKey)
          );

        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty({}, _objectName2, restOfFields)
            ),
          }
        );
      }

      return state;
    }

    case MOVE_DATASOURCE_FIELD_TO_OBJECT: {
      var _state$moveFieldToObj, _action$payload13, _state$moveFieldToObj2;

      var currObject =
        (_state$moveFieldToObj = state.moveFieldToObjectModalData) === null ||
        _state$moveFieldToObj === void 0
          ? void 0
          : _state$moveFieldToObj.objectKey;
      var objectToMoveTo =
        (_action$payload13 = action.payload) === null ||
        _action$payload13 === void 0
          ? void 0
          : _action$payload13.objectToMoveTo;

      var _fieldId2 =
        (_state$moveFieldToObj2 = state.moveFieldToObjectModalData) === null ||
        _state$moveFieldToObj2 === void 0
          ? void 0
          : _state$moveFieldToObj2.fieldId;

      if (
        currObject in state.stixMapping &&
        _fieldId2 in state.stixMapping[currObject]
      ) {
        var _objectSpread10;

        var _state$stixMapping$cu = state.stixMapping[currObject],
          _omit3 = _state$stixMapping$cu[_fieldId2],
          _restOfFields = _objectWithoutProperties(
            _state$stixMapping$cu,
            [_fieldId2].map(_toPropertyKey)
          );

        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              ((_objectSpread10 = {}),
              _defineProperty(
                _objectSpread10,
                objectToMoveTo,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[objectToMoveTo]),
                  {},
                  _defineProperty(
                    {},
                    _fieldId2,
                    _objectSpread({}, state.stixMapping[currObject][_fieldId2])
                  )
                )
              ),
              _defineProperty(_objectSpread10, currObject, _restOfFields),
              _objectSpread10)
            ),
          }
        );
      }

      return state;
    }

    case ADD_STIX_FIELD: {
      var _action$payload14, _action$payload15, _action$payload16;

      var _objectName3 =
        (_action$payload14 = action.payload) === null ||
        _action$payload14 === void 0
          ? void 0
          : _action$payload14.objectName;

      var _fieldId3 =
        (_action$payload15 = action.payload) === null ||
        _action$payload15 === void 0
          ? void 0
          : _action$payload15.fieldId;

      var key =
        (_action$payload16 = action.payload) === null ||
        _action$payload16 === void 0
          ? void 0
          : _action$payload16.key;

      if (_objectName3 in state.stixMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                _objectName3,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[_objectName3]),
                  {},
                  _defineProperty(
                    {},
                    _fieldId3,
                    _objectSpread(
                      _objectSpread(
                        {},
                        state.stixMapping[_objectName3][_fieldId3]
                      ),
                      {},
                      {
                        mapped_to: [].concat(
                          _toConsumableArray(
                            state.stixMapping[_objectName3][_fieldId3].mapped_to
                          ),
                          [
                            {
                              id: uuidv4(),
                              key: key,
                            },
                          ]
                        ),
                      }
                    )
                  )
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case REMOVE_STIX_FIELD: {
      var _action$payload17, _action$payload18, _action$payload19;

      var _objectName4 =
        (_action$payload17 = action.payload) === null ||
        _action$payload17 === void 0
          ? void 0
          : _action$payload17.objectName;

      var _fieldId4 =
        (_action$payload18 = action.payload) === null ||
        _action$payload18 === void 0
          ? void 0
          : _action$payload18.fieldId;

      var mappingId =
        (_action$payload19 = action.payload) === null ||
        _action$payload19 === void 0
          ? void 0
          : _action$payload19.mappingId;

      if (
        _objectName4 in state.stixMapping &&
        _fieldId4 in state.stixMapping[_objectName4]
      ) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                _objectName4,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[_objectName4]),
                  {},
                  _defineProperty(
                    {},
                    _fieldId4,
                    _objectSpread(
                      _objectSpread(
                        {},
                        state.stixMapping[_objectName4][_fieldId4]
                      ),
                      {},
                      {
                        mapped_to: state.stixMapping[_objectName4][
                          _fieldId4
                        ].mapped_to.filter(function (o) {
                          return o.id !== mappingId;
                        }),
                      }
                    )
                  )
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case UPDATE_STIX_FIELD: {
      var _state$selectFieldMod,
        _action$payload20,
        _state$selectFieldMod2,
        _action$payload21,
        _state$selectFieldMod3,
        _action$payload22,
        _action$payload23,
        _action$payload24;

      var _objectName5 =
        ((_state$selectFieldMod = state.selectFieldModalData) === null ||
        _state$selectFieldMod === void 0
          ? void 0
          : _state$selectFieldMod.objectKey) ||
        ((_action$payload20 = action.payload) === null ||
        _action$payload20 === void 0
          ? void 0
          : _action$payload20.objectName);

      var sourceFieldId =
        ((_state$selectFieldMod2 = state.selectFieldModalData) === null ||
        _state$selectFieldMod2 === void 0
          ? void 0
          : _state$selectFieldMod2.sourceFieldId) ||
        ((_action$payload21 = action.payload) === null ||
        _action$payload21 === void 0
          ? void 0
          : _action$payload21.fieldId);
      var stixFieldId =
        ((_state$selectFieldMod3 = state.selectFieldModalData) === null ||
        _state$selectFieldMod3 === void 0
          ? void 0
          : _state$selectFieldMod3.stixFieldId) ||
        ((_action$payload22 = action.payload) === null ||
        _action$payload22 === void 0
          ? void 0
          : _action$payload22.mappingId);
      var value =
        (_action$payload23 = action.payload) === null ||
        _action$payload23 === void 0
          ? void 0
          : _action$payload23.value;
      var type =
        (_action$payload24 = action.payload) === null ||
        _action$payload24 === void 0
          ? void 0
          : _action$payload24.type;

      if (
        _objectName5 in state.stixMapping &&
        sourceFieldId in state.stixMapping[_objectName5]
      ) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            stixMapping: _objectSpread(
              _objectSpread({}, state.stixMapping),
              {},
              _defineProperty(
                {},
                _objectName5,
                _objectSpread(
                  _objectSpread({}, state.stixMapping[_objectName5]),
                  {},
                  _defineProperty(
                    {},
                    sourceFieldId,
                    _objectSpread(
                      _objectSpread(
                        {},
                        state.stixMapping[_objectName5][sourceFieldId]
                      ),
                      {},
                      {
                        mapped_to: state.stixMapping[_objectName5][
                          sourceFieldId
                        ].mapped_to.map(function (o) {
                          return o.id === stixFieldId
                            ? _objectSpread(
                                _objectSpread({}, o),
                                {},
                                _defineProperty({}, type, value)
                              )
                            : o;
                        }),
                      }
                    )
                  )
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case ADD_METADATA_FIELD: {
      var _action$payload25;

      var _objectName6 =
        (_action$payload25 = action.payload) === null ||
        _action$payload25 === void 0
          ? void 0
          : _action$payload25.objectName;

      if (_objectName6 in state.metadataMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            metadataMapping: _objectSpread(
              _objectSpread({}, state.metadataMapping),
              {},
              _defineProperty(
                {},
                _objectName6,
                [].concat(
                  _toConsumableArray(state.metadataMapping[_objectName6]),
                  [
                    {
                      id: uuidv4(),
                      key: "",
                    },
                  ]
                )
              )
            ),
          }
        );
      }

      return state;
    }

    case UPDATE_OBJECT_NAME: {
      var _action$payload26, _action$payload27, _action$payload28;

      var oldName =
        (_action$payload26 = action.payload) === null ||
        _action$payload26 === void 0
          ? void 0
          : _action$payload26.oldName;
      var newName =
        (_action$payload27 = action.payload) === null ||
        _action$payload27 === void 0
          ? void 0
          : _action$payload27.newName;
      var isStix =
        (_action$payload28 = action.payload) === null ||
        _action$payload28 === void 0
          ? void 0
          : _action$payload28.isStix;
      var mapping = isStix ? "stixMapping" : "metadataMapping";
      var objects = isStix ? "stixObjects" : "metadataObjects";
      var oldNameData = state[mapping][oldName];

      var _state$mapping = state[mapping],
        _omit4 = _state$mapping[oldName],
        _restOfMapping2 = _objectWithoutProperties(
          _state$mapping,
          [oldName].map(_toPropertyKey)
        );

      if (oldName in state[mapping]) {
        var _objectSpread20;

        return _objectSpread(
          _objectSpread({}, state),
          {},
          ((_objectSpread20 = {}),
          _defineProperty(
            _objectSpread20,
            mapping,
            _objectSpread(
              _defineProperty({}, newName, _objectSpread({}, oldNameData)),
              _restOfMapping2
            )
          ),
          _defineProperty(
            _objectSpread20,
            objects,
            Object.keys(_restOfMapping2)
          ),
          _objectSpread20)
        );
      }

      return state;
    }

    case REMOVE_METADATA_FIELD: {
      var _action$payload29, _action$payload30;

      var _objectName7 =
        (_action$payload29 = action.payload) === null ||
        _action$payload29 === void 0
          ? void 0
          : _action$payload29.objectName;

      var _mappingId =
        (_action$payload30 = action.payload) === null ||
        _action$payload30 === void 0
          ? void 0
          : _action$payload30.mappingId;

      if (_objectName7 in state.metadataMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            metadataMapping: _objectSpread(
              _objectSpread({}, state.metadataMapping),
              {},
              _defineProperty(
                {},
                _objectName7,
                state.metadataMapping[_objectName7].filter(function (o) {
                  return o.id !== _mappingId;
                })
              )
            ),
          }
        );
      }

      return state;
    }

    case UPDATE_METADATA_FIELD: {
      var _action$payload31,
        _action$payload32,
        _action$payload33,
        _action$payload34;

      var _objectName8 =
        (_action$payload31 = action.payload) === null ||
        _action$payload31 === void 0
          ? void 0
          : _action$payload31.objectName;

      var metadataFieldId =
        (_action$payload32 = action.payload) === null ||
        _action$payload32 === void 0
          ? void 0
          : _action$payload32.mappingId;

      var _value =
        (_action$payload33 = action.payload) === null ||
        _action$payload33 === void 0
          ? void 0
          : _action$payload33.value;

      var _type =
        (_action$payload34 = action.payload) === null ||
        _action$payload34 === void 0
          ? void 0
          : _action$payload34.type;

      if (_objectName8 in state.metadataMapping) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            metadataMapping: _objectSpread(
              _objectSpread({}, state.metadataMapping),
              {},
              _defineProperty(
                {},
                _objectName8,
                state.metadataMapping[_objectName8].map(function (o) {
                  return o.id === metadataFieldId
                    ? _objectSpread(
                        _objectSpread({}, o),
                        {},
                        _defineProperty({}, _type, _value)
                      )
                    : o;
                })
              )
            ),
          }
        );
      }

      return state;
    }

    case CLEAR_TO_STIX_MAPPINGS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          stixMapping: {},
          stixObjects: [],
          metadataMapping: {},
        }
      );
    }

    case UPDATE_TO_STIX_MAPPINGS_FROM_FILE: {
      var stixMapping = action.payload.stixMapping;
      var metadataMapping = action.payload.metadataMapping;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          stixMapping: stixMapping,
          metadataMapping: metadataMapping,
          stixObjects: Object.keys(stixMapping),
        }
      );
    }

    default: {
      return state;
    }
  }
};

export default ToSTIXReducer;
