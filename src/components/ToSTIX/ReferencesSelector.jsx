import React, { useMemo, useEffect } from "react";
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
  const objects = useSelector((state) => state.toStix.objects);
  const allAvailableObjectKeys = useMemo(() => {
    return objects.filter((o) => o !== objectKey);
  }, [objectKey, objects]);

  useEffect(() => {
    const updatedReferences = selectedReferences.filter((ref) => {
      return allAvailableObjectKeys.includes(ref);
    });
    dispatch(
      updateStixField(
        updatedReferences,
        "references",
        objectKey,
        sourceFieldId,
        stixFieldId
      )
    );
  }, [allAvailableObjectKeys]);

  return (
    <div className={"bx--col-md-2"}>
      <MultiSelect.Filterable
        key={`${stixFieldId}_${selectedReferences}`}
        id={`MultiSelect.Filterable_${stixFieldId}`}
        size={"sm"}
        downshiftProps={{ setItemCount: selectedReferences.length }}
        placeholder={"Search References"}
        invalid={false}
        invalidText="Invalid Selection"
        items={allAvailableObjectKeys}
        useTitleInItem={true}
        disabled={allAvailableObjectKeys.length === 0}
        initialSelectedItems={selectedReferences}
        selectedItems={selectedReferences}
        itemToString={(item) => (item ? item : "")}
        onChange={(e) => {
          dispatch(
            updateStixField(
              e.selectedItems,
              "references",
              objectKey,
              sourceFieldId,
              stixFieldId
            )
          );
        }}
      />
    </div>
  );
};

export default ReferencesSelector;
