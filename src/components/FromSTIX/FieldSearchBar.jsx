import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "carbon-components-react";
import { updateSearchFieldValue } from "../../store/actions/from_stix";

const FieldSearchBar = () => {
  const dispatch = useDispatch();
  const fieldSearch = useSelector((state) => state.fromStix.fieldSearch);
  return (
    <Search
      light={true}
      labelText={"search"}
      size={"sm"}
      value={fieldSearch}
      onChange={(event) => {
        dispatch(updateSearchFieldValue(event.target.value));
      }}
      placeHolderText={"Search field.."}
    />
  );
};

export default FieldSearchBar;
