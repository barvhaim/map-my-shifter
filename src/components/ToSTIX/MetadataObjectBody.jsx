import React from "react";
import MappedFieldsTable from "./MappedFieldsTable";

const MetadataObjectBody = ({ sourceFields, objectKey, isStix }) => {
  return (
    <MappedFieldsTable
      isStix={isStix}
      objectKey={objectKey}
      sourceFieldId={sourceFields}
      sourceFieldData={sourceFields}
    />
  );
};

export default React.memo(MetadataObjectBody);
