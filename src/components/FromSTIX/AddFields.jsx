import React from "react";
import CustomField from "./CustomField";
import SelectField from "../STIX/SelectField";

const AddFields = ({ objects }) => {
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

      <SelectField objects={objects} />
    </>
  );
};

export default AddFields;
