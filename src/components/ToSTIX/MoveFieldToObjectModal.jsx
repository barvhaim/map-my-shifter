import React, { useMemo, useState } from "react";
import { Modal, ComboBox } from "carbon-components-react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMoveFieldToObjectModal,
  moveDataSourceFieldToObject,
} from "../../store/actions/to_stix";
import styles from "./to_stix.module.scss";

const MoveFieldToObjectModal = () => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.toStix.mapping);
  const data = useSelector((state) => state.toStix.moveFieldToObjectModalData);
  const allAvailableObjectKeys = useMemo(() => {
    return [...Object.keys(mapping)].filter((o) => o !== data?.objectKey);
  }, [data, mapping]);
  const isOpen = !!data;
  const [object, setobject] = useState("");

  return (
    <Modal
      shouldSubmitOnEnter={true}
      open={isOpen}
      primaryButtonText={"Move Field"}
      secondaryButtonText={"Cancel"}
      onRequestClose={() => {
        dispatch(closeMoveFieldToObjectModal());
      }}
      onRequestSubmit={() => {
        dispatch(moveDataSourceFieldToObject(object));
        dispatch(closeMoveFieldToObjectModal());
        setobject("");
      }}
      modalHeading={
        isOpen
          ? `Select object to move field "${
              mapping[data?.objectKey][data?.fieldId].field
            }" to`
          : ""
      }
      className={styles.modal}
    >
      <div className={styles.modal}>
        <ComboBox
          className={styles.ComboBox}
          id={data?.objectKey}
          // light={true}
          placeholder={"Search object..."}
          items={allAvailableObjectKeys}
          downshiftProps={{ isOpen: isOpen }}
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
