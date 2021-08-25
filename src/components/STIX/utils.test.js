import { filterFieldsForValue } from "./utils.js";
import stixLanguageV2_0 from "../../global/stixLangV2";

const filteredFields = [
  {
    title: "Artifact",
    type: "artifact",
    items: [
      {
        name: "mime_type",
        required: false,
      },
      {
        name: "payload_bin",
        required: false,
      },
      {
        name: "url",
        required: false,
      },
      {
        name: "hashes.SHA-256",
        required: false,
      },
      {
        name: "hashes.MD5",
        required: false,
      },
      {
        name: "hashes.SHA-1",
        required: false,
      },
    ],
  },
  {
    title: "Software",
    type: "software",
    items: [
      {
        name: "name",
        required: true,
      },
      {
        name: "cpe",
        required: false,
      },
      {
        name: "vendor",
        required: false,
      },
      {
        name: "version",
        required: false,
      },
    ],
  },
];

test("filterFieldsForValue - search 'ar'", () => {
  expect(filterFieldsForValue(stixLanguageV2_0, "ar")).toEqual(filteredFields);
});

test("filterFieldsForValue - no value", () => {
  expect(filterFieldsForValue(stixLanguageV2_0, "")).toEqual(stixLanguageV2_0);
});
