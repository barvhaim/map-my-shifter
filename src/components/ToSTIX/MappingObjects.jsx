import React from "react";
import { useSelector } from "react-redux";
import MappingObject from "./MappingObject";
import { Link } from "react-scroll";
import "react-minimap/dist/react-minimap.css";
import { ButtonClusterModule, Tile } from "@carbon/ibm-security";
import styles from "./to_stix.module.scss";
import StickyBox from "react-sticky-box";

const MappingObjects = ({ title }) => {
  const isStix = title === "object";
  const mappingObjects = isStix ? "stixMapping" : "metadataMapping";
  const mapping = useSelector((state) => state.toStix[mappingObjects]);
  const isMappingEmpty = Object.keys(mapping).length === 0;

  if (isMappingEmpty) {
    return (
      <div className="bx--row">
        <div className={`bx--col`}>
          <p style={{ paddingTop: "1rem" }}>
            There are currently no {title}s to show. Click the “New {title}”
            button to start mapping or load configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bx--row">
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
              <ButtonClusterModule style={{ position: "absolute" }}>
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
      <div className="bx--col-sm-3">
        {Object.keys(mapping).map((o) => {
          return (
            <div id={`${isStix}_${o}`} key={`${isStix}_${o}`}>
              <MappingObject
                key={`${isStix}_${o}`}
                objectKey={o}
                objectData={mapping[o]}
                isStix={isStix}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MappingObjects;
