import React from 'react';
import FlightsBlock from "./FlightsBlock";


const FlightsBlockContainer = (props) => {
    return (
        <FlightsBlock data={props.data}/>
    )
};

export default FlightsBlockContainer;
