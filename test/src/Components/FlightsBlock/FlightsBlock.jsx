import React from 'react';
import styles from './FlightsBlock.module.css';
import FlightSegment from "./FlightSegment/FlightSegment";

const FlightsBlock = (props) => {
    return (
        <div className={styles.flighsBlock}>
            {props.data?.map(flight => <div className={styles.flightItem}>
                <div className={styles.flightItem__header}>
                    <img src="https://logo-logos.com/wp-content/uploads/2016/10/Lufthansa_logo.png"
                         alt="airline logo"
                         width='150' height='30'/>
                    <div className={styles.flightItem__priceBlock}>
                        <h3>{flight.flight.price.total.amount}<span> {flight.flight.price.total.currency}</span></h3>
                        <p>Стоимость для взрослого пассажира</p>
                    </div>
                </div>
                <FlightSegment legsArray={flight.flight.legs} carrier={flight.flight.carrier.caption}/>
                <button className={styles.flightItem__button}>ВЫБРАТЬ</button>
            </div>)}
        </div>
    )
}

export default FlightsBlock;
