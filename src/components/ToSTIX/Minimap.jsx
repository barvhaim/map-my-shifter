import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { ButtonClusterModule, Tile } from "@carbon/ibm-security";
import styles from "./to_stix.module.scss";
import StickyBox from "react-sticky-box";

const Minimap = ({ isStix }) => {
  const mappingObjects = isStix ? "stixMapping" : "metadataMapping";
  const mapping = useSelector((state) => state.toStix[mappingObjects]);

  return (
    <div className="bx--col-sm-1">
      <StickyBox offsetTop={50} offsetBottom={50}>
        <div style={{ height: 650, position: "relative", overflow: "auto" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              minHeight: "100%",
            }}
          >
            <h4 className="section-title" style={{ marginLeft: "1rem" }}>
              Objects Map
            </h4>
            <ButtonClusterModule>
              {Object.keys(mapping).map((o) => {
                return (
                  <div key={`${isStix}_${o}`}>
                    <Link
                      activeClass="active"
                      to={`${isStix}_${o}`}
                      spy={true}
                      smooth={true}
                    >
                      <Tile className={styles.minimap__tile}>{o}</Tile>
                    </Link>
                  </div>
                );
              })}
            </ButtonClusterModule>
          </div>
        </div>
      </StickyBox>
    </div>
  );
};

export default Minimap;
