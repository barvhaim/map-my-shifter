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
      return objects.includes(ref);
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
  }, [objects]);

  return (
    <div className={"bx--col-md-2"}>
      <MultiSelect.Filterable
        key={selectedReferences}
        id={`MultiSelect_${stixFieldId}`}
        size={"sm"}
        downshiftProps={{ setItemCount: selectedReferences.length }}
        placeholder={"Search References"}
        invalid={false}
        invalidText="Invalid Selection"
        items={allAvailableObjectKeys}
        useTitleInItem={true}
        disabled={allAvailableObjectKeys.length === 0}
        initialSelectedItems={selectedReferences.filter((ref) => {
          return objects.includes(ref);
        })}
        selectedItems={selectedReferences.filter((ref) => {
          return objects.includes(ref);
        })}
        itemToString={(item) => (item ? item : "")}
        onChange={(e) => {
          dispatch(
            updateStixField(
              e.selectedItems.filter((ref) => {
                return objects.includes(ref);
              }),
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
