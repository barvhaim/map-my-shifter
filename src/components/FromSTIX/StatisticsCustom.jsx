import React from "react";
import styles from "./from_stix.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {clearMappings} from "../../store/actions/from_stix";
import "./Statistics.scss";


const Statistics = () => {
    const dispatch = useDispatch();
//    const mappingCustom = useSelector((state) => state.fromStix.mappingCustom);

//(Object.keys(mappingCustom).length
    return (
        <>
            <div className="bx--row">
                <div className={`bx--col ${styles.import__col}`}>
                    <div className="bx--row">
                        <div className="bx--col">
                            Custom STIX Object
                            <ul className="stats">
                                {0 /(16+0) * 100} %
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;
