import {
  loadJsonFromDisk,
  getDataSourceFieldId,
  shifterMappingToStateMapping,
  getFieldName,
  stateMappingToShifterMapping,
  getValue,
  getDataForStatistics,
} from "./utils.js";
import { testArgs } from "../../global/testHelper";

test("loadJsonFromDisk", () => {
  loadJsonFromDisk(testArgs.arrayMapping);
  expect(shifterMappingToStateMapping.toHaveBeenCalled);
});

test("getDataSourceFieldId - return dataSourceFieldId", () => {
  expect(
    getDataSourceFieldId(
      testArgs.stateMapping,
      testArgs.objectName,
      2,
      testArgs.dataSourceFieldId
    )
  ).toEqual(testArgs.dataSourceFieldId);
});

jest.mock("uuid", () => {
  let counter = 0;
  counter += 1;
  const uuidGen = () => `uuid_${counter}`;
  uuidGen.reset = () => {
    counter = 0;
  };
  return { v4: uuidGen };
});

test("shifterMappingToStateMapping - Qradar", () => {
  expect(
    shifterMappingToStateMapping(testArgs.shifterMappingQradar, {}, "")
  ).toEqual(testArgs.stateMappingQradar);
});

test("shifterMappingToStateMapping - Elastic", () => {
  expect(
    shifterMappingToStateMapping(testArgs.shifterMappingElastic, {}, "")
  ).toEqual(testArgs.stateMappingElastic);
});

test("get field name - no change", () => {
  expect(getFieldName("username", "0")).toEqual("username");
});

test("get field name - combine", () => {
  expect(getFieldName("agent", "type")).toEqual("agent.type");
});

test("convert mapping to output json content", () => {
  expect(stateMappingToShifterMapping(testArgs.mapping)).toEqual(
    testArgs.outputJsonContent
  );
});

test("convert mapping to output json content - one object, one Source field name, one stix field", () => {
  expect(
    stateMappingToShifterMapping(testArgs.oneObj_oneSource_oneStixfield_mapping)
  ).toEqual(testArgs.oneObj_oneSource_oneStixfield_jasonContent);
});

test("get Value", () => {
  expect(getValue(testArgs.mappedTo, 0, "transformer")).toEqual(
    "ToDirectoryPath"
  );
});

test("get Data For Statistics", () => {
  expect(
    getDataForStatistics(testArgs.mappingForStatictic, testArgs.stixTypesSet)
  ).toEqual(testArgs.data);
});
