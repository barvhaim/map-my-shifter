const requiredSetV2_0 = new Set([
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

const requiredSetV2_1 = new Set([
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

export const requiredFields = {
  stix_version_2_0: new Set(requiredSetV2_0),
  stix_version_2_1: new Set(requiredSetV2_1),
};
