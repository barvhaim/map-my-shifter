import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AddFields from "./AddFields";
import Mapping from "./Mapping";
import Export from "../Export/Export";
import Import from "../Import/Import";
import { stateMappingToShifterMapping, loadJsonFromDisk } from "./utils";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/from_stix";
import Statistics from "./Statistics";
import { getObjectsData } from "./utils";
import { requiredFields } from "../../global/requiredFields";

const FromSTIX = () => {
  const mapping = useSelector((state) => state.fromStix.mapping);
  const stixVersion = useSelector((state) => state.stix.stixVersion);
  const stixFields = useSelector((state) => state.stix.stixFields);

  console.log(mapping);

  const requiredSet = requiredFields[stixVersion];

  // const stixFieldsObject = useMemo(
  //   () => new Set(Object.values(stixFields).map((field) => field.type)), //
  //   [stixFields]
  // );
  const stixFieldsObject = useMemo(
    () =>
      Object.assign(
        ...Array.from(stixFields, (field) => ({
          [field.type]: field.items.map((item) => item.name),
        }))
      ),
    [stixFields]
  );
  console.log(stixFieldsObject); //name

  const [coverage, officialObjectsCount, requiredObjectsCount] = getObjectsData(
    mapping,
    stixFieldsObject,
    requiredSet
  );
  // const officialObjectsCount = Object.keys(officialObjects);
  console.log(officialObjectsCount);
  // console.log(officialObjects);
  // console.log(Object.assign(Array.from(officialObjects, o => ({[o]:''}))))
  // console.log(Object.assign(Array.from(stixFieldsObject, o => ({[o]:''}))))
  // // let noaa = {};
  // // noaa = Object.assign({}, ...Array.from(officialObjects, value => ({ [value.split(":")[0]]: [noaa[value.split(":")[0]] ,value.split(":")[1]] })))
  // console.log(Array.from(officialObjects, value => ({ [value.split(":")[0]]: value.split(":")[1] })))
  // console.log(Object.assign({}, ...Array.from(stixFieldsObject, value => ({ [value]: 0 }))))
  // console.log(Object.assign(Array.from(officialObjects)))
  // console.log(Object.assign(Array.from(officialObjects)).map(o=>o.split(":")))
  // console.log(noaa);
  // console.log(officialObjects);

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="page-title">From STIX</h1>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col-sm-1">
          <AddFields objects={coverage} />
        </div>

        <div className="bx--col-sm-2">
          <Mapping />
        </div>

        <div className="bx--col-sm-1">
          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Export
                mapping={mapping}
                stateMappingToShifterMapping={stateMappingToShifterMapping}
              />
            </div>
          </div>

          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Import
                loadJsonFromDisk={loadJsonFromDisk}
                updateMappingsFromFile={updateMappingsFromFile}
                clearMappings={clearMappings}
              />
            </div>
          </div>

          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Statistics
                officialObjectsCount={officialObjectsCount}
                requiredObjectsCount={requiredObjectsCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromSTIX;
