import React from "react";
import styles from "./from_stix.module.scss";
import "./Statistics.scss";
import {useSelector} from "react-redux";




const StatisticsCustom = () => {
    const mapping = useSelector((state) => state.fromStix.mapping);
    function CalculateNumberOfCustomObjects(mapping){
        var mylist = [];
        for (let i = 0; i < Object.keys(mapping).length; i++)
        {
            if(mapping[(Object.keys(mapping))[i]][0])
            {
                mylist.push((Object.keys(mapping))[i].split(':')[0]);
            }
        }
        const unique = [...new Set(mylist)];

        var counter = 0;
        for (let i = 0; i < unique.length; i++) {
            var myString = unique[i];
            var myTruncatedString = myString.substring(0,2);
            if (myTruncatedString==="x-"){
                counter++;
            }
        }
        return counter;
    }

    function CalculateNumberOfOfficialObjectsCurrentlyInUse(mapping){
        var mylist = [];
        for (let i = 0; i < Object.keys(mapping).length; i++)
        {
            if(mapping[(Object.keys(mapping))[i]][0])
            {
                mylist.push((Object.keys(mapping))[i].split(':')[0]);
            }
        }
        const unique = [...new Set(mylist)];
        return unique.length - CalculateNumberOfCustomObjects(mapping);
    }


    function CalculateCoveragePercentage(Denominator, Nominator){
        var percentage = Nominator/Denominator * 100;
        var percentageAfterTrunc = percentage.toFixed(2);

        if (isNaN(percentageAfterTrunc) || Denominator === 0 || Denominator === null) {
            return 0;
        }
        return percentageAfterTrunc;
    }

    return (
        <>
            <div className="bx--row">
                <div className={`bx--col ${styles.import__col}`}>
                    <div className="bx--row">
                        <div className="bx--col">
                            Custom STIX Object
                            <ul className="stats">
                                {CalculateCoveragePercentage((CalculateNumberOfCustomObjects(mapping)+CalculateNumberOfOfficialObjectsCurrentlyInUse(mapping)),CalculateNumberOfCustomObjects(mapping))} %
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatisticsCustom;
