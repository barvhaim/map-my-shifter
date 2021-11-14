import React from "react";
import styles from "./to_stix.module.scss";
import {
  openSelectFieldModal,
  removeStixField,
  removeMetadataField,
  updateStixField,
  updateMetadataField,
} from "../../store/actions/to_stix";
import { ComboBox, TextInput } from "@carbon/ibm-security";
import { useDispatch } from "react-redux";
import transformers from "../../global/transformers";
import { Delete20, List20 } from "@carbon/icons-react";
import ReferencesSelector from "./ReferencesSelector";

var MappedField = function MappedField(_ref) {
  var isStix = _ref.isStix,
    objectKey = _ref.objectKey,
    sourceFieldId = _ref.sourceFieldId,
    mappedFieldId = _ref.mappedFieldId,
    mappedFieldKey = _ref.mappedFieldKey,
    mappedFieldTransformer = _ref.mappedFieldTransformer,
    mappedFieldReferences = _ref.mappedFieldReferences;
  var dispatch = useDispatch();
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      key: mappedFieldId,
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row ".concat(styles.object_item__field),
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col-md-3",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "bx--row",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "bx--col",
            },
            /*#__PURE__*/ React.createElement(TextInput, {
              id: "".concat(mappedFieldId),
              labelText: "",
              onChange: function onChange(e) {
                isStix
                  ? dispatch(
                      updateStixField(
                        e.target.value,
                        "key",
                        objectKey,
                        sourceFieldId,
                        mappedFieldId
                      )
                    )
                  : dispatch(
                      updateMetadataField(
                        e.target.value,
                        "key",
                        objectKey,
                        mappedFieldId
                      )
                    );
              },
              size: "sm",
              value: mappedFieldKey,
            })
          ),
          isStix &&
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(List20, {
                style: {
                  border: 0,
                },
                className: "".concat(styles.object_item__btn),
                onClick: function onClick() {
                  dispatch(
                    openSelectFieldModal(
                      objectKey,
                      sourceFieldId,
                      mappedFieldId
                    )
                  );
                },
              })
            )
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col-md-2",
        },
        /*#__PURE__*/ React.createElement(ComboBox, {
          id: "ComboBox_".concat(mappedFieldId),
          size: "sm",
          placeholder: "Search Transformer",
          ariaLabel: "transformers_combobox",
          items: transformers,
          selectedItem: mappedFieldTransformer ? mappedFieldTransformer : null,
          onChange: function onChange(e) {
            isStix
              ? dispatch(
                  updateStixField(
                    e.selectedItem,
                    "transformer",
                    objectKey,
                    sourceFieldId,
                    mappedFieldId
                  )
                )
              : dispatch(
                  updateMetadataField(
                    e.selectedItem,
                    "transformer",
                    objectKey,
                    mappedFieldId
                  )
                );
          },
        })
      ),
      isStix &&
        /*#__PURE__*/ React.createElement(ReferencesSelector, {
          objectKey: objectKey,
          sourceFieldId: sourceFieldId,
          mappedFieldId: mappedFieldId,
          selectedReferences: mappedFieldReferences,
        }),
      /*#__PURE__*/ React.createElement(
        "div",
        null,
        /*#__PURE__*/ React.createElement(Delete20, {
          className: "".concat(styles.object_item__btn),
          onClick: function onClick() {
            isStix
              ? dispatch(
                  removeStixField(objectKey, sourceFieldId, mappedFieldId)
                )
              : dispatch(removeMetadataField(objectKey, mappedFieldId));
          },
        })
      )
    )
  );
};

export default React.memo(MappedField);
