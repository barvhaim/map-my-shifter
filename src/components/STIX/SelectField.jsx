import React from "react";
import { Accordion } from "carbon-components-react";
import { useSelector } from "react-redux";
import styles from "./stix.module.scss";
import AddFieldItems from "./AddFieldItems";
import FieldSearchBar from "./FieldSearchBar";
import ChangeVersion from "./ChangeVersion";

const SelectField = ({ objectName, fieldId, stixFieldId, type, objects }) => {
  const stixFields = useSelector((state) => state.stix.stixFields);

  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <ChangeVersion />
        </div>
      </div>

      <div className="bx--row">
        <div
          className={`bx--col ${styles.full_height__col} ${styles.add_fields__col}`}
        >
          <FieldSearchBar />
          <Accordion>
            {stixFields.map((o) => (
              <AddFieldItems
                key={o.title}
                title={o.title}
                type={o.type}
                items={o.items}
                objectName={objectName}
                fieldId={fieldId}
                stixFieldId={stixFieldId}
                updateType={type}
                objects={objects}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default SelectField;
