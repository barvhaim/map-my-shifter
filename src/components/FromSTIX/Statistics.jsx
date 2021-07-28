import React from "react";
import styles from "./from_stix.module.scss";
import {useSelector} from "react-redux";
import "./Statistics.scss";


const Statistics = () => {
    const mapping = useSelector((state) => state.fromStix.mapping);
    const stixVersion = useSelector((state) => state.fromStix.stixFields);

    function TotalNumberOfOfficialObjects(stixVersion){
        return stixVersion.length;
    }

    function NumberOfOfficialObjectsCurrentlyInUse(mapping){
        var mylist = [];
        for (let i = 0; i < Object.keys(mapping).length; i++) {
            mylist.push((Object.keys(mapping))[i].split(':')[0]);
        }
        const unique = [...new Set(mylist)];
        return unique.length - 0;
    }
//instead of the zero it will be the number of custom object added.

    function CalculateCoveragePercentageOfOfficialObjects(Denominator, Nominator){
        var percentage = Nominator/Denominator * 100;
        var percentageAfterTrunc = percentage.toFixed(2);
        return percentageAfterTrunc;
    }

    return (
        <>
            <div className="bx--row">
                <div className="bx--col">
                    <h4 className="section-title">Coverage Statistics</h4>
                </div>
            </div>
            <div className="bx--row">
                <div className={`bx--col ${styles.import__col}`}>
                    <div className="bx--row">
                        <div className="bx--col">
                            Official STIX Object
                            <ul className="stats">
                                {CalculateCoveragePercentageOfOfficialObjects(TotalNumberOfOfficialObjects(stixVersion),NumberOfOfficialObjectsCurrentlyInUse(mapping))} %
                            </ul>
                            ({NumberOfOfficialObjectsCurrentlyInUse(mapping)} of {TotalNumberOfOfficialObjects(stixVersion)})
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;
