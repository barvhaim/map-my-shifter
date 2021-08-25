export function filterFieldsForValue(fields, value) {
  if (!value || value === "") return fields;
  const lowerCaseValue = value.toLowerCase();
  let filteredFields = fields.filter(
    (category) =>
      category.title.toLowerCase().includes(lowerCaseValue) ||
      category.type.includes(lowerCaseValue)
  );
  filteredFields = filteredFields.filter(
    (category) => category.items.length > 0
  );
  return filteredFields;
}
