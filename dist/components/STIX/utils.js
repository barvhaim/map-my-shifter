import { saveAs } from "file-saver";
export function filterFieldsForValue(fields, value) {
  if (!value || value === "") return fields;
  var lowerCaseValue = value.toLowerCase();
  var filteredFields = fields.filter(function (category) {
    return (
      category.title.toLowerCase().includes(lowerCaseValue) ||
      category.type.includes(lowerCaseValue)
    );
  });
  filteredFields = filteredFields.filter(function (category) {
    return category.items.length > 0;
  });
  return filteredFields;
}
export function saveJsonToDisk(filename, obj) {
  var blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
  });
  saveAs(blob, filename);
}
