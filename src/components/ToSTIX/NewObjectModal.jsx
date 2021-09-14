import React, { useState } from "react";
import { Modal, TextInput } from "@carbon/ibm-security";
import { useDispatch, useSelector } from "react-redux";
import { addNewObject, closeNewObjectModal } from "../../store/actions/to_stix";

const NewObjectModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toStix.isNewObjectModalOpen);
  const [objectName, setObjectName] = useState("");

  return (
    <Modal
      shouldSubmitOnEnter={true}
      open={isOpen}
      onRequestClose={() => {
        setObjectName("");
        dispatch(closeNewObjectModal());
      }}
      onRequestSubmit={() => {
        if (objectName !== "") {
          dispatch(addNewObject(objectName));
          setObjectName("");
        }
        dispatch(closeNewObjectModal());
      }}
      primaryButtonText={"Create"}
      secondaryButtonText={"Cancel"}
      modalHeading={"Create new object"}
      hasForm={true}
      primaryButtonDisabled={objectName === ""}
    >
      <TextInput
        id={"new-object-name"}
        labelText={"Object name"}
        autoComplete={"off"}
        onChange={(e) => {
          setObjectName(e.target.value);
        }}
        value={objectName}
        helperText={
          "Should be lowercase, use dash for spacing, e.g. `foo_bar` "
        }
      />
    </Modal>
  );
};

export default React.memo(NewObjectModal);
