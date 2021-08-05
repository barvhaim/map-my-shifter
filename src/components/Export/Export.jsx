import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Button, TextInput } from "carbon-components-react";
import { Save16 } from "@carbon/icons-react";
import { saveAs } from "file-saver";
import styles from "./export.module.scss";

const Export = (props) => {
  const [exportFilename, setExportFilename] = useState("");
  const mapping = props.mapping;

  function saveJsonToDisk(filename, obj) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, filename);
  }

  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">Save Configuration</h4>
        </div>
      </div>

      <div className="bx--row" style={{ marginBottom: ".75rem" }}>
        <div className={`bx--col ${styles.export__col}`}>
          <div className="bx--row">
            <div className="bx--col">
              <TextInput
                autoComplete={"off"}
                id={"export-filename"}
                labelText={"Filename"}
                value={exportFilename}
                onChange={(input) => {
                  setExportFilename(input.target.value);
                }}
              />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col" style={{ textAlign: "right" }}>
              <Button
                disabled={exportFilename.length === 0}
                renderIcon={Save16}
                onClick={() => {
                  saveJsonToDisk(
                    `${exportFilename}.json`,
                    props.stateMappingToShifterMapping(mapping)
                  );
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Export;