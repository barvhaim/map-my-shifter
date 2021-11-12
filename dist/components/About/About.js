import React from "react";
import {
  Accordion,
  AccordionItem,
  UnorderedList,
  ListItem,
} from "@carbon/ibm-security";
import "./About.scss";

var About = function About() {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        /*#__PURE__*/ React.createElement("img", {
          src: "https://user-images.githubusercontent.com/16198896/129204519-78bb6448-246e-4e6d-a456-182792c7b894.png",
          alt: "logo",
        }),
        /*#__PURE__*/ React.createElement(
          "h4",
          null,
          "STIX-Shifter Connector's Mapping Builder"
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col",
        },
        /*#__PURE__*/ React.createElement(
          Accordion,
          {
            align: "start",
          },
          /*#__PURE__*/ React.createElement(
            AccordionItem,
            {
              title: "Introduction",
              open: true,
            },
            /*#__PURE__*/ React.createElement(
              "p",
              null,
              "The map-my-shifter (MMS) project provides a visual way for building mapping files for",
              " ",
              /*#__PURE__*/ React.createElement(
                "a",
                {
                  href: "https://github.com/opencybersecurityalliance/stix-shifter",
                },
                "STIX-Shifter"
              ),
              " ",
              "project."
            ),
            /*#__PURE__*/ React.createElement(
              UnorderedList,
              null,
              /*#__PURE__*/ React.createElement(
                ListItem,
                null,
                "From STIX pattern mapping - When building the data source query from STIX query, the STIX fields, for examples `file:name`, is mapped to the target data source's field.",
                /*#__PURE__*/ React.createElement(
                  "a",
                  {
                    href: "https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-2-edit-the-from_stix_map-json-files",
                  },
                  "Read more..."
                )
              ),
              /*#__PURE__*/ React.createElement(
                ListItem,
                null,
                "To STIX object mapping - When results object is back from the data source, this object should be displayed in the final results as STIX object. For examples ",
                "{",
                '"filename": "xxxxx"',
                "}",
                "should be translated to STIX object of type `file`.",
                /*#__PURE__*/ React.createElement(
                  "a",
                  {
                    href: "https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-4-edit-the-to_stix_map-json-file",
                  },
                  "Read more..."
                )
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            AccordionItem,
            {
              title: "Use-cases",
              open: true,
            },
            /*#__PURE__*/ React.createElement(
              UnorderedList,
              null,
              /*#__PURE__*/ React.createElement(
                ListItem,
                null,
                "Create mapping file from scratch."
              ),
              /*#__PURE__*/ React.createElement(
                ListItem,
                null,
                "Load existing mapping file, edit the file and save it to a new file"
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            AccordionItem,
            {
              title: "Authors",
              open: true,
            },
            /*#__PURE__*/ React.createElement(
              UnorderedList,
              null,
              /*#__PURE__*/ React.createElement(
                ListItem,
                null,
                /*#__PURE__*/ React.createElement(
                  "a",
                  {
                    href: "https://github.com/barvhaim",
                  },
                  "Bar Haim"
                )
              ),
              /*#__PURE__*/ React.createElement(
                ListItem,
                null,
                /*#__PURE__*/ React.createElement(
                  "a",
                  {
                    href: "https://github.com/idohersko",
                  },
                  "Ido Hersko"
                )
              ),
              /*#__PURE__*/ React.createElement(
                ListItem,
                null,
                /*#__PURE__*/ React.createElement(
                  "a",
                  {
                    href: "https://github.com/noaakl",
                  },
                  "Noaa Kless"
                )
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            AccordionItem,
            {
              title: "Licensing",
              open: true,
            },
            /*#__PURE__*/ React.createElement(
              "p",
              null,
              "map-my-shifter is licensed under the Apache License, Version 2.0. See",
              " ",
              /*#__PURE__*/ React.createElement(
                "a",
                {
                  href: "https://github.com/barvhaim/map-my-shifter/blob/master/LICENSE",
                },
                "LICENSE"
              ),
              " ",
              "for the full license text."
            )
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "bx--row",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "bx--col footer",
        },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Built with ",
          /*#__PURE__*/ React.createElement(
            "span",
            {
              className: "heart",
            },
            "\u2764"
          ),
          " from",
          " ",
          /*#__PURE__*/ React.createElement(
            "a",
            {
              href: "https://www.research.ibm.com/haifa/ccoe/",
            },
            "IBM Cyber Security Center of Excellence (CCoE)"
          )
        )
      )
    )
  );
};

export default About;
