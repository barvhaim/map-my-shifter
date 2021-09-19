import React from "react";
import MappedFieldsTable from "./MappedFieldsTable";

const MetadataObjectBody = ({ sourceFields, objectKey }) => {
  return (
    <MappedFieldsTable
      isStix={false}
      objectKey={objectKey}
      sourceFieldId={sourceFields}
      sourceFieldData={sourceFields}
    />
  );
};

export default React.memo(MetadataObjectBody);
