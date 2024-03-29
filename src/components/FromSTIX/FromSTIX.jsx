import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import SelectFields from "./SelectFields";
import Mapping from "./Mapping";
import Export from "../Export/Export";
import Import from "../Import/Import";
import { stateMappingToShifterMapping, loadJsonFromDisk } from "./utils";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/from_stix";
import Statistics from "./Statistics";
import { getDataForStatistics, getOfficialFieldsFromMapping } from "./utils";
import { requiredStixFields } from "../../global/requiredStixFields";

const FromSTIX = () => {
  const stixMapping = useSelector((state) => state.fromStix.stixMapping);
  const stixVersion = useSelector((state) => state.stix.stixVersion);
  const stixFields = useSelector((state) => state.stix.stixFields);
  const requiredFields = requiredStixFields[stixVersion];

  const officialStixFields = Object.assign(
    ...Array.from(stixFields, (field) => ({
      [field.type]: field.items.map((item) => item.name),
    }))
  );

  const officialStixKeys = useMemo(
    () =>
      Object.assign(
        {},
        ...Array.from(Object.keys(officialStixFields), (value) => ({
          [value]: new Set(),
        }))
      ),
    [officialStixFields]
  );

  const mappingOfficialFields = getOfficialFieldsFromMapping(
    stixMapping,
    officialStixFields,
    officialStixKeys
  );

  const [officialObjectsCount, requiredObjectsCount] = getDataForStatistics(
    mappingOfficialFields,
    requiredFields
  );

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="page-title">From STIX</h1>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col-sm-1">
          <SelectFields officialFields={mappingOfficialFields} />
        </div>

        <div className="bx--col-sm-2">
          <Mapping />
        </div>

        <div className="bx--col-sm-1">
          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Export
                stixMapping={stixMapping}
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
