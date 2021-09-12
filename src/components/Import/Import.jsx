import React from "react";
import { FileUploader } from "@carbon/ibm-security";
import styles from "./import.module.scss";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Import = (props) => {
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
                  dispatch(props.clearMappings());
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
                      const [stixMapping, metadataMapping] =
                        props.loadJsonFromDisk(input);
                      dispatch(
                        props.updateMappingsFromFile(
                          stixMapping,
                          metadataMapping
                        )
                      );
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

Import.propTypes = {
  loadJsonFromDisk: PropTypes.func,
  updateMappingsFromFile: PropTypes.func,
  clearMappings: PropTypes.func,
};

export default React.memo(Import);
