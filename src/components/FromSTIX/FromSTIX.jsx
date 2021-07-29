import React from "react";
import AddFields from "./AddFields";
import Mapping from "./Mapping";
import Export from "./Export";
import Import from "./Import";
import Statistics from "./Statistics";


const FromSTIX = () => {
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="page-title">From STIX</h1>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col-sm-1">
          <AddFields />
        </div>

        <div className="bx--col-sm-2">
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

          <div className="bx--row">
            <div className="bx--col-sm-4">
              <Statistics/>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FromSTIX;
