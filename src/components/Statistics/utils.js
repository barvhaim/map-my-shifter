export function getNumOfFields(stixFields) {
  let officialFieldsCount = 0;
  let requiredFieldsCount = 0;
  Object.keys(stixFields).forEach((field) => {
    officialFieldsCount += stixFields[field].items.length;
    Object.keys(stixFields[field].items).forEach((item) => {
      if (stixFields[field].items[item].required) {
        requiredFieldsCount += 1;
      }
    });
  });
  return [officialFieldsCount, requiredFieldsCount];
}
