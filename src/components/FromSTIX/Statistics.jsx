import React from "react";
import styles from "./from_stix.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {clearMappings} from "../../store/actions/from_stix";
import "./Statistics.scss";


const Statistics = () => {
    const dispatch = useDispatch();
    const mapping = useSelector((state) => state.fromStix.mapping);


    function calculateNumber(mapping){
        var mylist = [];
        for (let i = 0; i < Object.keys(mapping).length; i++) {
            mylist.push((Object.keys(mapping))[i].split(':')[0]);
        }
        const unique = [...new Set(mylist)];
        return unique.length - 0;
    }
//instead of the zero it will be the number of custom object added.
    return (
        <>
            <div className="bx--row">
                <div className="bx--col">
                    <h4 className="section-title-margin-top">Coverage Statistics</h4>
                </div>
            </div>
            <div className="bx--row">
                <div className={`bx--col ${styles.import__col}`}>
                    <div className="bx--row">
                        <div className="bx--col">
                            Official STIX Object
                            <ul className="stats">
                                {calculateNumber(mapping) /16 * 100} %
                            </ul>
                            ({calculateNumber(mapping)} of 16)
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;
