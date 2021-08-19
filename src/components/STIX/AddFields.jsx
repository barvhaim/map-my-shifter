import React from "react";
import { Accordion } from "carbon-components-react";
import { useSelector } from "react-redux";
import styles from "./stix.module.scss";
import AddFieldItems from "./AddFieldItems";
import FieldSearchBar from "./FieldSearchBar";
import ChangeVersion from "./ChangeVersion";

const AddFields = ({ fieldNameToUpdate, officialFields }) => {
  const stixFields = useSelector((state) => state.stix.stixFields);
  const isInModal = fieldNameToUpdate ? true : false;

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
                items={
                  isInModal
                    ? o.items.filter(
                        (item) =>
                          !item.name.endsWith("_ref") &&
                          !item.name.endsWith("_refs")
                      )
                    : o.items
                }
                fieldNameToUpdate={fieldNameToUpdate}
                officialFields={officialFields}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AddFields;
