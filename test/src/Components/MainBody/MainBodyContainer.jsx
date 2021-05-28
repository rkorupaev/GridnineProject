import React, {useEffect, useState} from 'react';
import MainBody from "./MainBody";
import axios from "axios";

const MainBodyContainer = (props) => {

    const [data, setData] = useState(null);
    const [filteredFlightsArray, setFilteredFlightsArray] = useState(null);

    const fetchFlights = async () => {
        const {data} = await axios.get(`http://localhost:4000/result`)
        setData(data)
    };

    useEffect(() => {
        fetchFlights()
    }, []);


    useEffect(() => {
        if (data) {
            setFilteredFlightsArray(data.flights);
        }
    }, [data]);


    const filterArray = (filterOption) => {
        switch (filterOption) {
            case `priceup`:
                filteredFlightsArray.sort(function (a, b) {
                    return a.flight.price.total.amount - b.flight.price.total.amount;
                });
                setFilteredFlightsArray([...filteredFlightsArray]);
                console.log(filteredFlightsArray);
                break;
            case `pricedown`:
                filteredFlightsArray.sort(function (a, b) {
                    return b.flight.price.total.amount - a.flight.price.total.amount;
                });
                setFilteredFlightsArray([...filteredFlightsArray]);
                console.log(filteredFlightsArray);
                break;
        }
    }

    return (
        <div>
            <MainBody data={filteredFlightsArray} filterArray={filterArray}/>
        </div>
    )
}

export default MainBodyContainer;
