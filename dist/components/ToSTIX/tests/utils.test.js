import {
  loadJsonFromDisk,
  getDataSourceFieldId,
  shifterMappingToStateMapping,
  getFieldName,
  stateMappingToShifterMapping,
  getValue,
  getDataForStatistics,
} from "../utils.js";
import { testArgs } from "./testHelper";
jest.mock("uuid", function () {
  var uuidGen = function uuidGen() {
    return "uuid";
  };

  return {
    v4: uuidGen,
  };
});
test("loadJsonFromDisk", function () {
  loadJsonFromDisk(testArgs.arrayMapping);
  expect(shifterMappingToStateMapping.toHaveBeenCalled);
});
test("getDataSourceFieldId - return dataSourceFieldId", function () {
  expect(
    getDataSourceFieldId(
      testArgs.stateMapping,
      testArgs.objectName,
      2,
      testArgs.dataSourceFieldId
    )
  ).toEqual(testArgs.dataSourceFieldId);
});
test("shifterMappingToStateMapping - Qradar", function () {
  expect(
    shifterMappingToStateMapping(testArgs.shifterMappingQradar, {}, {}, "")
  ).toEqual(testArgs.stateMappingQradar);
});
test("shifterMappingToStateMapping - Elastic", function () {
  expect(
    shifterMappingToStateMapping(testArgs.shifterMappingElastic, {}, {}, "")
  ).toEqual(testArgs.stateMappingElastic);
});
test("get field name - no change", function () {
  expect(getFieldName("username", "0")).toEqual("username");
});
test("get field name - combine", function () {
  expect(getFieldName("agent", "type")).toEqual("agent.type");
});
test("convert mapping to json output - Qradar", function () {
  expect(stateMappingToShifterMapping(testArgs.QradarMapping, {})).toEqual(
    testArgs.QradarOutput
  );
});
test("convert mapping to json output - Elastic", function () {
  expect(
    stateMappingToShifterMapping(
      testArgs.elasticMapping[0],
      testArgs.elasticMapping[1]
    )
  ).toEqual(testArgs.elasticOutput);
});
test("get Value", function () {
  expect(getValue(testArgs.mappedTo[0].transformer)).toEqual("ToDirectoryPath");
});
test("get Data For Statistics", function () {
  expect(
    getDataForStatistics(testArgs.mappingForStatictic, testArgs.stixTypesSet)
  ).toEqual(testArgs.data);
});
