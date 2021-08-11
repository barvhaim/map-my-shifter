import React from "react";
import { Modal } from "carbon-components-react";
import { useDispatch, useSelector } from "react-redux";
import { closeSelectFieldModal } from "../../store/actions/to_stix";
import SelectField from "../STIX/SelectField";

const SelectFieldModal = ({ objectName, fieldId, stixFieldId, type }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toStix.isSelectFieldModalOpen);

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
      <SelectField
        objectName={objectName}
        fieldId={fieldId}
        stixFieldId={stixFieldId}
        type={type}
      />
    </Modal>
  );
};

export default SelectFieldModal;
