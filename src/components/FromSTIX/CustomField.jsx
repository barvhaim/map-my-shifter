import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCustomFieldModal } from "../../store/actions/from_stix";
import CustomFieldModal from "./CustomFieldModal";
import { Button } from "@carbon/ibm-security";

const CustomField = () => {
  const dispatch = useDispatch();
  const customFieldModalShow = useSelector(
    (state) => state.fromStix.customFieldModalShow
  );

  return (
    <div>
      <Button
        kind="tertiary"
        size="sm"
        onClick={() => {
          dispatch(showCustomFieldModal());
        }}
      >
        Custom Field
      </Button>
      {customFieldModalShow && <CustomFieldModal />}
    </div>
  );
};

export default CustomField;
