import React from "react";
import SourceField from "./SourceField";

const MetadataObjectBody = ({ sourceFields, objectKey, isStix }) => {
  return (
    <SourceField
      isStix={isStix}
      key={sourceFields}
      objectKey={objectKey}
      fieldId={sourceFields}
      fieldData={sourceFields}
    />
    //   <MappedFieldsTable
    //   isStix={isStix}
    //   objectKey={objectKey}
    //   sourceFieldId={sourceFields}
    //   sourceFieldData={fieldData}
    // />
  );
};

export default React.memo(MetadataObjectBody);
