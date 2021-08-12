import React from "react";
import { Modal } from "carbon-components-react";
import { useDispatch, useSelector } from "react-redux";
import { closeSelectFieldModal } from "../../store/actions/to_stix";
import SelectField from "../STIX/SelectField";

const SelectFieldModal = () => {
  const dispatch = useDispatch();
  const selectFieldModal = useSelector(
    (state) => state.toStix.selectFieldModal
  );
  const isOpen = !(selectFieldModal === null);

  return (
    <Modal
      shouldSubmitOnEnter={true}
      open={isOpen}
      onRequestClose={() => {
        dispatch(closeSelectFieldModal());
      }}
      modalHeading={"Select field"}
      hasForm={false}
      passiveModal={true}
    >
      {isOpen && (
        <SelectField
          objectName={selectFieldModal.objectKey}
          fieldId={selectFieldModal.sourceFieldId}
          stixFieldId={selectFieldModal.stixFieldId}
          type={"key"}
        />
      )}
    </Modal>
  );
};

export default SelectFieldModal;
