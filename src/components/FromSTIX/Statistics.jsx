import React from "react";
import styles from "./from_stix.module.scss";
import {useSelector} from "react-redux";
import "./Statistics.scss";


const Statistics = () => {
    const mapping = useSelector((state) => state.fromStix.mapping);
    const stixVersion = useSelector((state) => state.fromStix.stixFields);

    function CalculateNumberOfCustomObjects(mapping){
        var mylist = [];
        for (let i = 0; i < Object.keys(mapping).length; i++)
        {
            if(mapping[(Object.keys(mapping))[i]][0])
            {
                mylist.push((Object.keys(mapping))[i].split(':')[0]);
            }
        }


        // var objectWhithoutValue = 0;
        // for (let i = 0; i < mylist.length; i++) {
        //     if(!mapping[(Object.keys(mapping))[i]][0]){
        //         objectWhithoutValue++;
        //     }
        //
        //     /*
        //     {console.log(mapping[(Object.keys(mapping))[i]][0])}
        //     var res = Object.keys(mapping).map(function(name){
        //         var obj = {};
        //         obj[(Object.keys(mapping))[i]] = mapping[(Object.keys(mapping))[i]];
        //         return obj;
        //     });
        //     {console.log(mapping)}
        //     {console.log("eeeeeeeeeeeeeeeee")}
        //     {console.log(res)};
        //
        //      */
        // }  {console.log(objectWhithoutValue)}



        const unique = [...new Set(mylist)];

        // {console.log(unique)}

        // var objectWhithoutValue = 0;
        // for (let i = 0; i < unique.length; i++) {
        //     if(!mapping[(Object.keys(mapping))[i]][0]){
        //         objectWhithoutValue++;
        //     }
        //
        //     /*
        //     {console.log(mapping[(Object.keys(mapping))[i]][0])}
        //     var res = Object.keys(mapping).map(function(name){
        //         var obj = {};
        //         obj[(Object.keys(mapping))[i]] = mapping[(Object.keys(mapping))[i]];
        //         return obj;
        //     });
        //     {console.log(mapping)}
        //     {console.log("eeeeeeeeeeeeeeeee")}
        //     {console.log(res)};
        //
        //      */
        // }


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

    function TotalNumberOfOfficialObjects(stixVersion){
        return stixVersion.length;
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

        if (isNaN(percentageAfterTrunc)) {
            return 0;
        }
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
                                {CalculateCoveragePercentage((CalculateNumberOfOfficialObjectsCurrentlyInUse(mapping)+CalculateNumberOfCustomObjects(mapping)),CalculateNumberOfOfficialObjectsCurrentlyInUse(mapping))} %
                            </ul>
                            ({CalculateNumberOfOfficialObjectsCurrentlyInUse(mapping)} of {TotalNumberOfOfficialObjects(stixVersion)})
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;
