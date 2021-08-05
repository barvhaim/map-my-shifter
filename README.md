![6b112b14705d4d56b401766df306f129](https://user-images.githubusercontent.com/16198896/114301821-0653e000-9acf-11eb-923d-baeec7ba80dc.png)

# `map-my-shifter`

> STIX-Shifter Connector's Mapping Builder

The map-my-shifter (MMS) project provides a visual way for building mapping files for [STIX-Shifter](https://github.com/opencybersecurityalliance/stix-shifter) project.
A typical connector requires two types of fields mapping:

- From STIX pattern mapping - When building the data source query from STIX query, the STIX fields, for examples `file:name`, is mapped to the target data source's field. [Read more...](https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-2-edit-the-from_stix_map-json-files)
- To STIX object mapping - When results object is back from the data source, this object should be displayed in the final results as STIX object. For examples `{"filename": "xxxxx"}` should be translated to STIX object of type `file`. [Read more...](https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-4-edit-the-to_stix_map-json-file)

### Use-cases

- Create mapping file from scratch.
- Load existing mapping file, edit the file and save it to a new file.

## Demo version

https://barvhaim.github.io/map-my-shifter/

## Development

MMS is a static client side app, there is no backend involved, except from serving the static content. It is built with [ReactJS](https://reactjs.org) library, and designed using [Carbon Design System](https://www.carbondesignsystem.com) components.

### Running locally

1. Make sure to install required packages using `yarn install` command in the project root folder.
2. `yarn start` runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code.
   You will see the build errors and lint warnings in the console.

### Building the project for deployment

1. `yarn build` builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
2. Your app is ready to be deployed.

### Authors

- [Bar Haim](https://github.com/barvhaim)
- [Ido Hersko](https://github.com/idohersko)
- [Noaa Kless](https://github.com/noaakl)

### Licensing

map-my-shifter is licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/barvhaim/map-my-shifter/blob/master/LICENSE) for the full license text.

Built with ❤️ from
[IBM Cyber Security Center of Excellence (CCoE)](https://www.research.ibm.com/haifa/ccoe/)
