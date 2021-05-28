import React from 'react';
import styles from './MainBody.module.css';
import Sidebar from "../Sidebar/Sidebar";
import FlightsBlockContainer from "../FlightsBlock/FlightsBlockContainer";


const MainBody = (props) => {
    return (
        <div className={styles.mainBody}>
            <Sidebar filterArray={props.filterArray}/>
            <FlightsBlockContainer data={props.data}/>
        </div>
    )
}

export default MainBody;
