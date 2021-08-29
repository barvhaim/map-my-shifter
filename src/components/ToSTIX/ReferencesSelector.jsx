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

  return (
    <div className={"bx--col-md-2"}>
      <MultiSelect.Filterable
        id={`ComboBox_${stixFieldId}`}
        size={"sm"}
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
