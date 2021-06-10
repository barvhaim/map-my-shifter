import React, {useState} from "react";
import { Accordion } from "carbon-components-react";
import { useSelector } from "react-redux";
import styles from "./from_stix.module.scss";
import AddFieldItems from "./AddFieldItems";
import FieldSearchBar from "./FieldSearchBar";
import customField from "./customField";

const AddFields = () => {
  const stixFields = useSelector((state) => state.fromStix.stixFields);
    const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bx--row">
        <div className="bx--col">

          <h4 className="section-title">Select Fields</h4>
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
              />
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AddFields;
