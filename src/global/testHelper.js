// ------------------------------------------------------
// getDataSourceFieldId
export const testArgs = {
  stateMapping: {
    process: {
      "3449d1d8-f0da-419f-a1ca-14d89c679615": {
        field: "username",
        mapped_to: [
          {
            id: "702f1e4d-e75c-4230-83dd-8a5d6c8de1ff",
            key: "process:creator_user_ref",
            references: "useraccount",
          },
        ],
      },
    },
  },
  objectName: process,

  dataSourceFieldId: "3449d1d8-f0da-419f-a1ca-14d89c679615",

  // ------------------------------------------------------
  // shifterMappingToStateMapping

  shifterMappingQradar: {
    categoryid: [
      {
        key: "x-qradar.category_id",
        object: "x-qradar",
        transformer: "ToInteger",
      },
      {
        key: "x-qradar.category_id",
        object: "x-qradar",
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
  },

  shifterMappingElastic: {
    "@timestamp": [
      {
        key: "first_observed",
        cybox: false,
      },
      {
        key: "last_observed",
        cybox: false,
      },
    ],
    source: {
      ip: [
        {
          key: "ipv4-addr.value",
          object: "src_ip",
        },
        {
          key: "ipv6-addr.value",
          object: "src_ip",
        },
        {
          key: "network-traffic.src_ref",
          object: "nt",
          references: "src_ip",
        },
      ],
    },
  },

  stateMappingQradar: {
    "x-qradar": {
      uuid_1: {
        field: "categoryid",
        mapped_to: [
          {
            id: "uuid_1",
            key: "x-qradar:category_id",
            transformer: "ToInteger",
          },
          {
            id: "uuid_1",
            key: "x-qradar:category_id",
          },
        ],
      },
    },
    useraccount: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "user-account:user_id",
          },
        ],
      },
    },
    finding: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "x-ibm-finding:src_application_user_ref",
            references: "useraccount",
          },
        ],
      },
    },
    process: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "process:creator_user_ref",
            references: "useraccount",
          },
        ],
      },
    },
    event: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "x-oca-event:user_ref",
            references: "useraccount",
          },
        ],
      },
    },
  },

  stateMappingElastic: {
    src_ip: {
      uuid_1: {
        field: "source.ip",
        mapped_to: [
          {
            id: "uuid_1",
            key: "ipv4-addr:value",
          },
          {
            id: "uuid_1",
            key: "ipv6-addr:value",
          },
        ],
      },
    },
    nt: {
      uuid_1: {
        field: "source.ip",
        mapped_to: [
          {
            id: "uuid_1",
            key: "network-traffic:src_ref",
            references: "src_ip",
          },
        ],
      },
    },
  },

  shifterMappingQradar2: {
    categoryid: [
      {
        key: "x-qradar.category_id",
        object: "x-qradar",
        transformer: "ToInteger",
      },
      {
        key: "x-qradar.category_id",
        object: "x-qradar",
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
    categoryname: [
      {
        key: "x-oca-event.outcome",
        object: "event",
      },
    ],
  },

  stateMappingQradar2: {
    "x-qradar": {
      uuid_1: {
        field: "categoryid",
        mapped_to: [
          {
            id: "uuid_1",
            key: "x-qradar:category_id",
            transformer: "ToInteger",
          },
          {
            id: "uuid_1",
            key: "x-qradar:category_id",
          },
        ],
      },
    },
    useraccount: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "user-account:user_id",
          },
        ],
      },
    },
    finding: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "x-ibm-finding:src_application_user_ref",
            references: "useraccount",
          },
        ],
      },
    },
    process: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "process:creator_user_ref",
            references: "useraccount",
          },
        ],
      },
    },
    event: {
      uuid_1: {
        field: "username",
        mapped_to: [
          {
            id: "uuid_1",
            key: "x-oca-event:user_ref",
            references: "useraccount",
          },
        ],
      },
      uuid_1: {
        field: "categoryname",
        mapped_to: [
          {
            id: "uuid_1",
            key: "x-oca-event:outcome",
          },
        ],
      },
    },
  },

  // ------------------------------------------------------
  // createStateMapping

  shifterMapping: [
    {
      key: "ipv4-addr.value",
      object: "src_ip",
    },
    {
      key: "ipv6-addr.value",
      object: "src_ip",
    },
    {
      key: "network-traffic.src_ref",
      object: "nt",
      references: "src_ip",
    },
  ],

  currStateMapping: {
    src_ip: {
      "ff6849ad-62fc-45ee-912c-b84358f022c8": {
        field: "source.ip",
        mapped_to: [
          {
            id: "ccff4a12-b433-42c0-9104-872ab5f686c5",
            key: "ipv4-addr:value",
          },
          {
            id: "00b0bff2-e9b3-4897-9ba2-e0ed4358c1c4",
            key: "ipv4-addr:value",
          },
          {
            id: "727bfa28-11f8-45c2-a449-cfadf7f402d3",
            key: "ipv6-addr:value",
          },
          {
            id: "2e134eea-4207-4163-a5cd-d0957b2fe2bf",
            key: "ipv6-addr:value",
          },
        ],
      },
    },
    nt: {
      "e957360f-ef2e-42fa-ad05-a50c3ae25aac": {
        field: "source.ip",
        mapped_to: [
          {
            id: "1400517f-ea68-4ecc-af74-998767fc109d",
            key: "network-traffic:src_ref",
            references: "src_ip",
          },
          {
            id: "6885e92c-497c-44a8-b051-2b9240e6edca",
            key: "network-traffic:src_ref",
            references: "src_ip",
          },
        ],
      },
    },
  },

  createdStateMapping: {
    src_ip: {
      "ff6849ad-62fc-45ee-912c-b84358f022c8": {
        field: "source.ip",
        mapped_to: [
          {
            id: "ccff4a12-b433-42c0-9104-872ab5f686c5",
            key: "ipv4-addr:value",
          },
          {
            id: "00b0bff2-e9b3-4897-9ba2-e0ed4358c1c4",
            key: "ipv4-addr:value",
          },
          {
            id: "727bfa28-11f8-45c2-a449-cfadf7f402d3",
            key: "ipv6-addr:value",
          },
          {
            id: "2e134eea-4207-4163-a5cd-d0957b2fe2bf",
            key: "ipv6-addr:value",
          },
        ],
      },
    },
    nt: {
      "e957360f-ef2e-42fa-ad05-a50c3ae25aac": {
        field: "source.ip",
        mapped_to: [
          {
            id: "1400517f-ea68-4ecc-af74-998767fc109d",
            key: "network-traffic:src_ref",
            references: "src_ip",
          },
          {
            id: "6885e92c-497c-44a8-b051-2b9240e6edca",
            key: "network-traffic:src_ref",
            references: "src_ip",
          },
        ],
      },
    },
  },

  // ------------------------------------------------------
  // stateMappingToShifterMapping

  mapping: {
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
  },

  outputJsonContent: {
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
  },

  oneObj_oneSource_oneStixfield_mapping: {
    objectname: {
      1: {
        field: "Sourcefieldname",
        mapped_to: [
          {
            id: "2",
            key: "stixfield",
            transformer: "StringToBool",
          },
        ],
      },
    },
  },

  oneObj_oneSource_oneStixfield_jasonContent: {
    Sourcefieldname: [
      {
        key: "stixfield",
        object: "objectname",
        transformer: "StringToBool",
      },
    ],
  },

  // ------------------------------------------------------
  // getValue

  mappedTo: [
    {
      id: "896a76a4-7896-46be-a1f5-462e06ac4d77",
      key: "directory:path",
      transformer: "ToDirectoryPath",
    },
  ],

  // ------------------------------------------------------
  // getDataForStatistics

  mappingForStatictic: {
    "x-qradar": {
      "14c45672-2780-4255-9d50-3f0081718bdb": {
        field: "categoryid",
        mapped_to: [
          {
            id: "64f690f2-4772-4c21-bc34-b454914fba63",
            key: "x-qradar:category_id",
            transformer: "ToInteger",
          },
          {
            id: "5f2efb29-7a0e-4b8d-aeb6-f5bab61f3aff",
            key: "x-qradar:category_id",
          },
        ],
      },
    },
    useraccount: {
      "c181bb89-e313-4b33-9dc9-de742f1c1ca8": {
        field: "username",
        mapped_to: [
          {
            id: "ecd0d6e6-8bcc-4c83-88bb-0490fa323e74",
            key: "user-account:user_id",
          },
        ],
      },
    },
    finding: {
      "dbbdb756-7d7e-41d8-902e-2e9bec913ff0": {
        field: "username",
        mapped_to: [
          {
            id: "a27d2d66-1367-439d-bdf6-43732dc8282d",
            key: "x-ibm-finding:src_application_user_ref",
            references: "useraccount",
          },
        ],
      },
    },
    process: {
      "f644c2ad-fc29-43b4-a456-4a069bdac9de": {
        field: "username",
        mapped_to: [
          {
            id: "d52c46ab-ba0b-4e87-b403-402b459e0121",
            key: "process:creator_user_ref",
            references: "useraccount",
          },
        ],
      },
    },
    event: {
      "bfd8fb6b-e6fd-4a22-ace2-341402d2ec8a": {
        field: "username",
        mapped_to: [
          {
            id: "c171f8a2-cf81-451a-a36b-25021fa3ab32",
            key: "x-oca-event:user_ref",
            references: "useraccount",
          },
        ],
      },
    },
  },

  stixTypesSet: new Set([
    "artifact",
    "autonomous-system",
    "directory",
    "domain-name",
    "email-addr",
    "email-message",
    "file",
    "ipv4-addr",
    "ipv6-addr",
    "mac-addr",
    "network-traffic",
    "process",
    "software",
    "url",
    "user-account",
    "windows-registry-key",
  ]),

  data: [2, 3, 2, 3],
};
