import React from 'react';
import styles from './FiltersBlock.module.css';

const FiltersBlock = (props) => {
    const labelMock = [
        {
            className: 'styles.filtersBlock__rafioItem',
            type: "radio",
            name: "sortingoption",
            value: "priceup",
            title: " - по возрастанию цены"
        },
        {
            className: 'styles.filtersBlock__rafioItem',
            type: "radio",
            name: "sortingoption",
            value: "pricedown",
            title: " - по убыванию цены"
        },
        {
            className: 'styles.filtersBlock__rafioItem',
            type: "radio",
            name: "sortingoption",
            value: "duration",
            title: " - по времени в пути"
        },
    ]
    const labels = labelMock.map(({className, type, name, value, title}) =>
        <label
            className={className}>
            <input
                type={type}
                name={name}
                value={value}/>
            {title}
        </label>
    )

    return (
        <div className={styles.filtersBlock}>
            <form className={styles.filtersBlock__form}>
                <p>Сортировать</p>
                <div className={styles.filtersBlock__filterOptions} onChange={(e) => {
                    props.filterArray(e.target.value);
                }}>
                    {labels}
                </div>
                <p>Фильтровать</p>
                <div className={styles.filtersBlock__filterOptions} >
                    <input type="checkbox" id="1change" onClick={(e) => console.dir(e)}/><label for="1change">1 пересадка</label>
                    <input type="checkbox" id="nochange"/><label for="nochange"> Без пересадки</label>
                </div>


            </form>
        </div>
    )
}

export default FiltersBlock;
