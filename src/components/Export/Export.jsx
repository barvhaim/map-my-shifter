import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextInput } from "@carbon/ibm-security";
import { Save16 } from "@carbon/icons-react";
import styles from "./export.module.scss";
import { saveJsonToDisk } from "../STIX/utils";

const Export = (props) => {
  const [exportFilename, setExportFilename] = useState("");
  const mapping = props.mapping;

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

Export.propTypes = {
  mapping: PropTypes.object,
  stateMappingToShifterMapping: PropTypes.func,
};

export default React.memo(Export);
