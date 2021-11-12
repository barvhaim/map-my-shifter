var requiredStixFieldsV2_0 = new Set([
  "autonomous-system:number",
  "directory:path",
  "domain-name:value",
  "email-addr:value",
  "email-message:is_multipart",
  "ipv4-addr:value",
  "ipv6-addr:value",
  "mac-addr:value",
  "software:name",
  "url:value",
  "user-account:user_id",
  "windows-registry-key:key",
]);
var requiredStixFieldsV2_1 = new Set([
  "autonomous-system:number",
  "directory:path",
  "domain-name:value",
  "email-addr:value",
  "email-message:is_multipart",
  "ipv4-addr:value",
  "ipv6-addr:value",
  "mac-addr:value",
  "mutex:name",
  "network-traffic:protocols",
  "software:name",
  "url:value",
  "user-account:user_id",
]);
export var requiredStixFields = {
  stix_version_2_0: requiredStixFieldsV2_0,
  stix_version_2_1: requiredStixFieldsV2_1,
};
