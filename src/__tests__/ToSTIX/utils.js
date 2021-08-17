import { loadJsonFromDisk } from "../../components/ToSTIX/utils.js";
import { stateMappingToShifterMapping } from "../../components/ToSTIX/utils.js";

const mapping = {
  "x-qradar": {
    "7cf1f4b3-2c62-4ee7-bd7f-0e18d266440e": {
      field: "categoryid",
      mapped_to: [
        {
          id: "b9e9c970-8b4f-41e2-a3dc-c2da48676d52",
          key: "x-qradar:category_id",
          transformer: "ToInteger",
        },
      ],
    },
  },
  useraccount: {
    "c3e7a403-c733-4b02-8d9b-ec7e24a1f001": {
      field: "username",
      mapped_to: [
        {
          id: "2663fd6e-17dc-4d4f-8c33-f6cd0a317cce",
          key: "user-account:user_id",
        },
      ],
    },
  },
  finding: {
    "5017aa35-239d-495e-9715-4da4a839278f": {
      field: "username",
      mapped_to: [
        {
          id: "ae999cdc-355a-423f-af28-524f3929fea7",
          key: "x-ibm-finding:src_application_user_ref",
          references: "useraccount",
        },
      ],
    },
  },
  process: {
    "00184524-60bc-41d8-93da-79c4d2570760": {
      field: "username",
      mapped_to: [
        {
          id: "ff0db88b-0e20-4840-bfe6-c42f5829b922",
          key: "process:creator_user_ref",
          references: "useraccount",
        },
      ],
    },
  },
  event: {
    "598bb818-410d-4cf0-b51c-1c693039ec51": {
      field: "username",
      mapped_to: [
        {
          id: "0c591d52-6160-4756-a8a6-10426e892d58",
          key: "x-oca-event:user_ref",
          references: "useraccount",
        },
      ],
    },
  },
};

const outputJsonContent = {
  categoryid: [
    {
      key: "x-qradar.category_id",
      object: "x-qradar",
      transformer: "ToInteger",
    },
  ],
  username: [
    {
      key: "user-account.user_id",
      object: "useraccount",
    },
    {
      key: "x-ibm-finding.src_application_user_ref",
      object: "finding",
      references: "useraccount",
    },
    {
      key: "process.creator_user_ref",
      object: "process",
      references: "useraccount",
    },
    {
      key: "x-oca-event.user_ref",
      object: "event",
      references: "useraccount",
    },
  ],
};

test("convert mapping to output json content", () => {
  expect(stateMappingToShifterMapping(mapping)).toEqual(outputJsonContent);
});

test("convert json content TO mapping", () => {
  expect(loadJsonFromDisk(outputJsonContent)).toEqual(mapping);
});
