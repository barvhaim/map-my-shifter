import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./from_stix.module.scss";
import MappingItem from "./MappingItem";
import MappingsFilterBar from "./MappingsFilterBar";
import { filterMappingFieldsForValue } from "./utils";
import { clearMappings } from "../../store/actions/from_stix";

const Mapping = () => {
  const dispatch = useDispatch();
  const mapping = useSelector((state) => state.fromStix.mapping);
  const fieldMappingFilter = useSelector(
    (state) => state.fromStix.fieldMappingFilter
  );
  console.log(
    new Set([
      "autonomous-system:number",
      "directory:path",
      "domain-name:value",
      "email-addr:value",
      "email-message:is_multipart",
      "ipv4-addr:value",
      "ipv6-addr:value",
      "mac-addr:value",
      "software:name",
      "url:value",
      "user-account:user_id",
      "windows-registry-key:key",
    ])
  );
  console.log(
    new Set([
      "autonomous-system:number",
      "directory:path",
      "domain-name:value",
      "email-addr:value",
      "email-message:is_multipart",
      "ipv4-addr:value",
      "ipv6-addr:value",
      "mac-addr:value",
      "mutex:name",
      "network-traffic:protocols",
      "software:name",
      "url:value",
      "user-account:user_id",
    ])
  );

  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">
            {Object.keys(mapping).length} Total Fields{" "}
            <span
              onClick={() => {
                dispatch(clearMappings());
              }}
              className={styles.mappings_clear__btn}
            >
              (Clear)
            </span>
          </h4>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col">
          <MappingsFilterBar />
        </div>
      </div>
      <div className="bx--row">
        <div
          className={`bx--col ${styles.full_height__col} ${styles.mapping__col}`}
        >
          <ul>
            {Object.keys(
              filterMappingFieldsForValue(mapping, fieldMappingFilter)
            ).map((o) => (
              <MappingItem key={o} title={o} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mapping;
