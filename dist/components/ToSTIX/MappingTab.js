import React from "react";
import { Add32 } from "@carbon/icons-react";
import { Button } from "@carbon/ibm-security";
import { useDispatch, useSelector } from "react-redux";
import { openNewObjectModal } from "../../store/actions/to_stix";
import MappingObjects from "./MappingObjects";
import SelectFieldModal from "./SelectFieldModal";
import MoveFieldToObjectModal from "./MoveFieldToObjectModal";
import NewObjectModal from "./NewObjectModal";
import { MAPPING_TYPE } from "../../global/constants";

var MappingTab = function MappingTab(_ref) {
  var type = _ref.type,
    addingFunction = _ref.addingFunction;
  var dispatch = useDispatch();
  var isOpen = useSelector(function (state) {
    return state.toStix.isNewObjectModalOpen;
  });
  var isStix = type === MAPPING_TYPE.OBJECT;
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(NewObjectModal, {
      isOpen: isOpen,
      add: addingFunction,
      type: type,
    }),
    isStix &&
      /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /*#__PURE__*/ React.createElement(SelectFieldModal, null),
        /*#__PURE__*/ React.createElement(MoveFieldToObjectModal, null)
      ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
          style: {
            textAlign: "right",
          },
        },
        /*#__PURE__*/ React.createElement(
          Button,
          {
            renderIcon: Add32,
            onClick: function onClick() {
              dispatch(openNewObjectModal());
            },
          },
          "New ",
          type
        )
      )
    ),
    /*#__PURE__*/ React.createElement(MappingObjects, {
      type: type,
    })
  );
};

export default React.memo(MappingTab);
