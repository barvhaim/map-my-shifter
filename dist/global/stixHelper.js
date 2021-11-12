export var isValidCustomStixField = function isValidCustomStixField(
  customField
) {
  var re = /(^\S+:+\S+$)/;
  return re.test(customField);
};
