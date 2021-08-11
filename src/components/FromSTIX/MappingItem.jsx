import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteField,
  addValue,
  deleteValue,
  updateValue,
} from "../../store/actions/from_stix";
import { TextInput } from "carbon-components-react";
import { Delete20, Close16, Add16 } from "@carbon/icons-react";
import styles from "./from_stix.module.scss";

const MappingItem = ({ title }) => {
  const values = useSelector((state) => state.fromStix.mapping[title].values);
  const dispatch = useDispatch();
  return (
    <li className={styles.mapping__item}>
      <div className="bx--row" style={{ marginBottom: ".5rem" }}>
        <div className="bx--col-sm-3">
          <h1 className={styles.mapping_item__title}>{title}</h1>
        </div>
        <div className={`bx--col-sm-1 ${styles.mapping_item__btn_top}`}>
          <Add16
            className={`${styles.mapping_item__btn}`}
            style={{ border: "1px solid #000000", marginRight: ".5rem" }}
            onClick={() => {
              dispatch(addValue(title));
            }}
          />
          <Close16
            className={`${styles.mapping_item__btn}`}
            style={{ border: "1px solid #000000" }}
            onClick={() => {
              dispatch(deleteField(title));
            }}
          />
        </div>
      </div>

      {values.length > 0 ? (
        values.map((v) => (
          <div
            key={`${title}_${v.id}`}
            className="bx--row"
            style={{ marginBottom: "1rem" }}
          >
            <div className="bx--col-sm-3">
              <TextInput
                id={`${title}_${v.id}`}
                labelText={""}
                autoComplete={"off"}
                value={v.value}
                onChange={(input) => {
                  dispatch(updateValue(title, v.id, input.target.value));
                }}
              />
            </div>
            <div className="bx--col-sm-1" style={{ margin: "auto" }}>
              <Delete20
                className={`${styles.mapping_item__btn}`}
                onClick={() => {
                  dispatch(deleteValue(title, v.id));
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className={styles.mapping__item_empty}>
          Use the [+] button to add values.
        </div>
      )}
    </li>
  );
};

export default MappingItem;
