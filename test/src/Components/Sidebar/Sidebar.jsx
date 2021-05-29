import React from 'react';
import styles from './Sidebar.module.css';
import FiltersBlock from "./FilterBlock/FiltersBlock";

const Sidebar = (props) => {
    return (
            <div className={styles.sidebar}>
                <FiltersBlock filterArray={props.filterArray} transfersCount={props.transfersCount}/>
            </div>
    )
}

export default Sidebar;
