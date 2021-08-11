import React from "react";
import CustomField from "./CustomField";
import SelectField from "../STIX/SelectField";
import { addField } from "../../store/actions/from_stix";

const AddFields = () => {
  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">Select Fields</h4>
        </div>
        <div>
          <CustomField />
        </div>
      </div>

      <SelectField addField={addField} />
    </>
  );
};

export default AddFields;
