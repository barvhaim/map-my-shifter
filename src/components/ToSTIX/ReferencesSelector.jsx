import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect } from "carbon-components-react";
import { updateStixField } from "../../store/actions/to_stix";

const ReferencesSelector = ({
  selectedReferences,
  objectKey,
  sourceFieldId,
  stixFieldId,
}) => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.toStix.mapping);
  const allAvailableObjectKeys = useMemo(() => {
    return [...Object.keys(mapping)].filter((o) => o !== objectKey);
  }, [objectKey, mapping]);
  console.log(selectedReferences);

  return (
    <div className={"bx--col-md-2"}>
      <MultiSelect
        id={"references"}
        size={"sm"}
        useTitleInItem={false}
        label={
          selectedReferences?.length !== 0
            ? selectedReferences.map((referenceObjectName) =>
                referenceObjectName !==
                selectedReferences[selectedReferences.length - 1]
                  ? referenceObjectName + ", "
                  : referenceObjectName
              )
            : "None"
        }
        invalid={false}
        invalidText="Invalid Selection"
        onChange={(e) => {
          dispatch(
            updateStixField(
              objectKey,
              sourceFieldId,
              stixFieldId,
              e.selectedItems,
              "references"
            )
          );
        }}
        items={allAvailableObjectKeys}
        disabled={allAvailableObjectKeys.length === 0}
        initialSelectedItems={selectedReferences}
        selectedItem={selectedReferences}
        itemToString={(item) => (item ? item : "")}
        inline={true}
      />
    </div>
  );
};

export default ReferencesSelector;
