import React from "react";
import { ClickableTile } from "carbon-components-react";
import styles from "./welcome.module.scss";

const Welcome = () => {
  return (
    <>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <p>
              This tool is used for generating mapping file for `STIX-Shifter`
              project
            </p>
          </div>
        </div>

        <div className="bx--row">
          <div className="bx--col-sm-2">
            <ClickableTile href="/from_stix" className={styles.tile__btn}>
              Generate "From STIX" File
            </ClickableTile>
          </div>
          <div className="bx--col-sm-2">
            <ClickableTile href="/to_stix" className={styles.tile__btn}>
              Generate "To STIX" File
            </ClickableTile>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
