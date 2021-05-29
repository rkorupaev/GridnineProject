import React from 'react';
import styles from './FlightSegment.module.css';

const FlightSegment = (props) => {
    // console.log(props)

    // let date = new Date(props.legsArray).toString().split(" ");
    // let dateObj = {
    //     day: date[0],
    //     month: date[1],
    //     date: date[2],
    //     time: date[4]
    // };
    //
    // console.log(dateObj);

    return (
        <>
            {props.legsArray.map(leg => <div className={styles.flightItem__infoBlock}>
                <div className={styles.flightItem__cities}>
                    <p>{leg.segments[0]?.departureCity?.caption}, {leg.segments[0]?.departureAirport?.caption}
                        <span>({leg.segments[0]?.departureAirport?.uid})</span>
                        <span
                            className={styles.flightItem__arrow}>→</span> {leg.segments[props.legsArray.length - 1]?.arrivalCity?.caption}, {leg.segments[props.legsArray.length - 1]?.arrivalAirport?.caption}
                        <span>({leg.segments[props.legsArray.length - 1]?.arrivalAirport?.uid})</span></p>
                </div>
                <div className={styles.flightItem__dates}>
                    <p>20:40 <span>18 авг. вт</span></p>
                    <p>◴ 14 ч 25 мин</p>
                    <p><span>19 авг. ср</span> 09:25</p>
                </div>
                <p className={styles.flightItem__transfers}>{leg.segments.length - 1} Пересадка</p>
                <p className={styles.flightItem__airlineInfo}>Рейс
                    выполняет: <span>{props.carrier}</span></p>
            </div>)}
        </>
    )
}

export default FlightSegment;
