import React from "react";
import Mapping from "./Mapping";
import Export from "../FromSTIX/Export";
import Import from "../FromSTIX/Import";
import NewObjectModal from "./NewObjectModal";

const ToSTIX = () => {
  // const parseMapping = (o, s = '', objects) => {
  //   if (typeof o !== "object") return;
  //
  //   if ('key' in o) {
  //     console.log(o.key);
  //
  //     if ('object' in o) {
  //       console.log(o.object);
  //     }
  //     console.log(s);
  //   } else {
  //     Object.keys(o).forEach(k => {
  //       const new_s = s + "." + k
  //       parseMapping(o[k], new_s);
  //     });
  //   }
  // }

  return (
    <>
      <NewObjectModal />
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <h1 className="page-title">To STIX</h1>
          </div>
        </div>

        <div className="bx--row">
          <div className="bx--col-sm-3">
            <Mapping />
          </div>

          <div className="bx--col-sm-1">
            <div className="bx--row">
              <div className="bx--col-sm-4">
                <Export />
              </div>
            </div>

            <div className="bx--row">
              <div className="bx--col-sm-4">
                <Import />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToSTIX;
