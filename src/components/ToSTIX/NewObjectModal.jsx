import React, { useState } from "react";
import { Modal, TextInput } from "@carbon/ibm-security";
import { useDispatch } from "react-redux";
import { closeNewObjectModal } from "../../store/actions/to_stix";

const NewObjectModal = ({ isOpen, add, title }) => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");

  return (
    <Modal
      shouldSubmitOnEnter={true}
      open={isOpen}
      onRequestClose={() => {
        setName("");
        dispatch(closeNewObjectModal());
      }}
      onRequestSubmit={() => {
        if (Name !== "") {
          dispatch(add(Name));
          setName("");
        }
        dispatch(closeNewObjectModal());
      }}
      primaryButtonText={"Create"}
      secondaryButtonText={"Cancel"}
      modalHeading={`Create new ${title}`}
      hasForm={true}
      primaryButtonDisabled={Name === ""}
    >
      <TextInput
        id={`new-${title}-name`}
        labelText={title.charAt(0).toUpperCase() + title.slice(1) + " name"}
        autoComplete={"off"}
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={Name}
        helperText={
          "Should be lowercase, use dash for spacing, e.g. `foo_bar` "
        }
      />
    </Modal>
  );
};

export default React.memo(NewObjectModal);
