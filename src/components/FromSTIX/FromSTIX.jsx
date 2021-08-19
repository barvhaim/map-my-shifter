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
  const mapping = useSelector((state) => state.fromStix.mapping);
  const stixVersion = useSelector((state) => state.stix.stixVersion);
  const stixFields = useSelector((state) => state.stix.stixFields);
  const requiredFields = requiredStixFields[stixVersion];
  const stixFieldsObject = useMemo(
    () =>
      Object.assign(
        ...Array.from(stixFields, (field) => ({
          [field.type]: field.items.map((item) => item.name),
        }))
      ),
    [stixFields]
  );
  const officialFields = getOfficialFieldsFromMapping(
    mapping,
    stixFieldsObject
  );
  const [officialObjectsCount, requiredObjectsCount] = getDataForStatistics(
    officialFields,
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
          <SelectFields officialFields={officialFields} />
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
