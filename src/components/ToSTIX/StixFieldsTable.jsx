import React from "react";
import { Add20 } from "@carbon/icons-react";
import { addStixField } from "../../store/actions/to_stix";
import { useDispatch } from "react-redux";
import StixField from "./StixField";
import styles from "./to_stix.module.scss";

const StixFieldsTableHeader = ({ objectKey, sourceFieldId }) => {
  const dispatch = useDispatch();
  return (
    <div className={`bx--row ${styles.object_item_field__header}`}>
      <div className={"bx--col-md-3"}>STIX field</div>
      <div className={"bx--col-md-2"}>Transformer</div>
      <div className={"bx--col-md-2"}>References</div>
      <div className={"bx--col-md-1"} style={{ textAlign: "right" }}>
        <Add20
          className={`${styles.object_item__btn}`}
          onClick={() => {
            dispatch(addStixField(objectKey, sourceFieldId, ""));
          }}
        />
      </div>
    </div>
  );
};

const StixFieldsTableBody = ({ objectKey, sourceFieldId, stixFieldsData }) => {
  return stixFieldsData.map((stixField) => {
    const stixFieldTransformer = stixField?.transformer;
    const stixFieldReferences =
      stixField.references && stixField.references.length !== 0
        ? stixField.references.constructor === Array
          ? stixField.references
          : [stixField.references]
        : [];
    return (
      <StixField
        key={stixField.id}
        sourceFieldId={sourceFieldId}
        objectKey={objectKey}
        stixFieldId={stixField.id}
        stixFieldKey={stixField.key}
        stixFieldTransformer={stixFieldTransformer}
        stixFieldReferences={stixFieldReferences}
      />
    );
  });
};

const StixFieldsTable = ({ objectKey, sourceFieldId, sourceFieldData }) => {
  return (
    <div className={`bx--row ${styles.object_item__field}`}>
      <div className={"bx--col-sm-4"}>
        <StixFieldsTableHeader
          objectKey={objectKey}
          sourceFieldId={sourceFieldId}
        />
        <StixFieldsTableBody
          objectKey={objectKey}
          sourceFieldId={sourceFieldId}
          stixFieldsData={sourceFieldData.mapped_to}
        />
      </div>
    </div>
  );
};

export default StixFieldsTable;
