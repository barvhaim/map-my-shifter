import {
  stateMappingToShifterMapping,
  loadJsonFromDisk,
  shifterMappingToStateMapping,
  filterMappingFieldsForValue,
  getOfficialFieldsFromMapping,
  getDataForStatistics,
  getNumOfFields,
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
test("stateMappingToShifterMapping", function () {
  expect(stateMappingToShifterMapping(testArgs.fromStateMapping)).toEqual(
    testArgs.toShifterMapping
  );
});
test("loadJsonFromDisk", function () {
  loadJsonFromDisk();
  expect(shifterMappingToStateMapping.toHaveBeenCalled);
});
test("shifterMappingToStateMapping", function () {
  expect(shifterMappingToStateMapping(testArgs.fromShifterMapping)).toEqual(
    testArgs.toStateMapping
  );
});
test("filterMappingFieldsForValue", function () {
  expect(filterMappingFieldsForValue(testArgs.toStateMapping[0], "ip")).toEqual(
    testArgs.filterdMapping
  );
});
test("filterMappingFieldsForValue - empty", function () {
  expect(filterMappingFieldsForValue(testArgs.toStateMapping[0], "")).toEqual(
    testArgs.toStateMapping[0]
  );
});
test("getOfficialFieldsFromMapping", function () {
  expect(
    getOfficialFieldsFromMapping(
      testArgs.toStateMapping[0],
      testArgs.officialStixFields,
      testArgs.officialStixKeys
    )
  ).toEqual(testArgs.officialFields);
});
test("getDataForStatistics", function () {
  expect(
    getDataForStatistics(testArgs.officialFields, testArgs.requiredFields)
  ).toEqual([1, 1]);
});
test("getNumOfFields", function () {
  expect(getNumOfFields(testArgs.stixFields)).toEqual([68, 12]);
});
