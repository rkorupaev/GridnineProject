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
                filteredFlightsArray.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
                setFilteredFlightsArray([...filteredFlightsArray]);
                break;
            case `pricedown`:
                filteredFlightsArray.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
                setFilteredFlightsArray([...filteredFlightsArray]);
                break;
            case `duration`:
                let mappedArray = filteredFlightsArray.map((item, index) => {
                    let legTravelTime = 0;
                    item.flight.legs.forEach(leg => {
                        leg.segments.forEach(segment => {
                            legTravelTime += segment.travelDuration;
                        });
                    });
                    return {index: index, legTravelTime: legTravelTime, flight: item};
                });

                mappedArray.sort((a, b) => a.legTravelTime - b.legTravelTime);

                let filteredResult = mappedArray.map(item=> {
                    return item.flight;
                })
                setFilteredFlightsArray([...filteredResult]);
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
