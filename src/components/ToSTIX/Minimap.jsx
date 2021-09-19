import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import styles from "./to_stix.module.scss";
import StickyBox from "react-sticky-box";
import { isActivObject } from "./utils";

const Minimap = ({ isStix }) => {
  const mappingObjects = isStix ? "stixMapping" : "metadataMapping";
  const mapping = useSelector((state) => state.toStix[mappingObjects]);
  const [activObject, setActivObject] = useState("");

  return (
    <div className="bx--col-sm-1">
      <StickyBox offsetTop={70}>
        <div style={{ overflowY: "auto", overflowX: "hidden" }}>
          <h4 className="section-title" style={{ marginLeft: "1rem" }}>
            Objects Map
          </h4>
          <div className={styles.minimap}>
            {Object.keys(mapping).map((o) => {
              return (
                <div key={`link_${o}`} id={`link_${o}`}>
                  <Link
                    to={`${o}`}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    onSetActive={() => setActivObject(o)}
                  >
                    <div
                      className={
                        isActivObject(o, activObject)
                          ? styles.minimap__activTile
                          : styles.minimap__tile
                      }
                    >
                      {o}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </StickyBox>
    </div>
  );
};

export default Minimap;
