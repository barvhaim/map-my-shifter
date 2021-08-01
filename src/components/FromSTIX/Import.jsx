import React from "react";
import { FileUploader } from "carbon-components-react";
import styles from "./from_stix.module.scss";
import { loadJsonFromDisk } from "./utils";
import { useDispatch } from "react-redux";
import {
  updateMappingsFromFile,
  clearMappings,
} from "../../store/actions/from_stix";

const Import = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">Load Configuration</h4>
        </div>
      </div>

      <div className="bx--row" style={{ marginBottom: ".75rem" }}>
        <div className={`bx--col ${styles.import__col}`}>
          <div className="bx--row">
            <div className="bx--col">
              <FileUploader
                accept={[".json"]}
                buttonKind="primary"
                buttonLabel="Load file"
                filenameStatus="edit"
                multiple={false}
                onDelete={() => {
                  dispatch(clearMappings());
                }}
                onChange={(event) => {
                  let reader = new FileReader();
                  reader.onload = (_event) => {
                    let input = null;
                    if (
                      _event &&
                      "target" in _event &&
                      "result" in _event.target
                    ) {
                      input = JSON.parse(_event.target.result);
                      const mappings = loadJsonFromDisk(input);
                      dispatch(updateMappingsFromFile(mappings));
                    }
                  };
                  reader.readAsText(event.target.files[0]);
                }}
                iconDescription="Clear file"
                labelDescription="Select configuration .json file"
                labelTitle=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Import;
