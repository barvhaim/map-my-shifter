import React from "react";
import {Accordion, AccordionItem} from "carbon-components-react";
const About = () => {
  return<div>
      <img src="https://user-images.githubusercontent.com/16198896/114301821-0653e000-9acf-11eb-923d-baeec7ba80dc.png" alt="new"/>
      <h1> map-my-shifter </h1>
      <h3>STIX-Shifter Connector's Mapping Builder</h3>
      <Accordion>

          <AccordionItem title="Introduction">
              The map-my-shifter (MMS) project provides a visual way for building mapping files for <a href={"https://github.com/opencybersecurityalliance/stix-shifter"}>STIX-Shifter</a> project.
              <p></p>
              <p>
                  - From STIX pattern mapping - When building the data source query from STIX query, the STIX fields, for examples `file:name`, is mapped to the target data source's field.
                  <a href={"https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-2-edit-the-from_stix_map-json-files"}>Read more...</a>
              </p>
              <p>
                  - To STIX object mapping - When results object is back from the data source, this object should be displayed in the final results as STIX object. For examples "filename": "xxxxx"}  should be translated to STIX object of type `file`.
                  <a href={"https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-4-edit-the-to_stix_map-json-file"}>Read more...</a>
              </p>
          </AccordionItem>
          <AccordionItem title="Use-cases">
              <p>
                  MMS is a static client side app, there is no backend involved, except from serving the static content. It is built with <a href={"https://reactjs.org"}>ReactJS</a> library, and designed using <a href={"https://www.carbondesignsystem.com"}>Carbon Design System</a> components.
              </p>
          </AccordionItem>
          <AccordionItem title="Devlopment">
              <p>
                  - Create mapping file from scratch.
              </p>
              <p>
                  - Load existing mapping file, edit the file and save it to a new file.
              </p>
          </AccordionItem>
          <AccordionItem title="Demo version">
              <p>
                  <a href={"https://barvhaim.github.io/map-my-shifter/"}>https://barvhaim.github.io/map-my-shifter/</a>
              </p>

          </AccordionItem>
          <AccordionItem title="Running locally">
              <p>
                  1. Make sure to install required packages using `yarn install` command in the project root folder.
              </p>
              <p>
                  2. `yarn start` runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.
              </p>
          </AccordionItem>
          <AccordionItem title="Building the project for deployment">
              <p>
                  1. `yarn build` builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
              </p>
              <p>
                  2. Your app is ready to be deployed.
              </p>
          </AccordionItem>
          <AccordionItem title="Authors">
              <p>
                  <a href={"https://github.com/barvhaim"}>Bar Haim</a>
              </p>
              <p>
                  <a href={"https://github.com/idohersko"}>Ido Hersko</a>
              </p>
          </AccordionItem>
          <AccordionItem title="Licensing">
              <p>
                  map-my-shifter is licensed under the Apache License, Version 2.0. See  <a href={"https://github.com/barvhaim/map-my-shifter/blob/master/LICENSE"}>LICENSE</a> for the full license text.
              </p>
          </AccordionItem>
      </Accordion>
      <p></p>
      Built with ❤️ from <a href={"https://www.research.ibm.com/haifa/ccoe/"}>IBM Cyber Security Center of Excellence (CCoE)</a>
  </div>;
};

export default About;
