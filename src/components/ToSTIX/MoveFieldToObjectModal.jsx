import React, { useMemo, useState } from "react";
import { Modal, ComboBox } from "carbon-components-react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMoveFieldToObjectModal,
  moveDataSourceFieldToObject,
} from "../../store/actions/to_stix";
import styles from "./to_stix.module.scss";

const MoveFieldToObjectModal = () => {
  console.log("modal");
  const dispatch = useDispatch();
  const objects = useSelector((state) => state.toStix.objects);
  const data = useSelector((state) => state.toStix.moveFieldToObjectModalData);
  const allAvailableObjectKeys = useMemo(() => {
    return objects.filter((o) => o !== data?.objectKey);
  }, [data, objects]);
  const isOpen = !!data;
  const [object, setobject] = useState("");
  const fieldName = "";
  // const fieldName = isOpen
  //   ? mapping[data?.objectKey][data?.fieldId]?.field
  //   : "";

  return (
    <Modal
      shouldSubmitOnEnter={true}
      open={isOpen}
      primaryButtonText={"Move"}
      secondaryButtonText={"Cancel"}
      onRequestClose={() => {
        dispatch(closeMoveFieldToObjectModal());
        setobject("");
      }}
      onRequestSubmit={() => {
        dispatch(moveDataSourceFieldToObject(object));
        dispatch(closeMoveFieldToObjectModal());
        setobject("");
      }}
      modalHeading={`Select object to move field ${
        fieldName ? `${fieldName}` : ""
      } to`}
      className={styles.modal}
    >
      <div className={styles.modal} id={`div_${data?.objectKey}`}>
        <ComboBox
          className={styles.ComboBox}
          id={`comboBox_${data?.objectKey}`}
          light
          placeholder={"Search object..."}
          items={allAvailableObjectKeys}
          // downshiftProps={{ isOpen: isOpen }}
          itemToString={(item) => (item ? item : "")}
          selectedItem={object}
          onChange={(e) => {
            setobject(e.selectedItem);
          }}
        />
      </div>
    </Modal>
  );
};

export default MoveFieldToObjectModal;
