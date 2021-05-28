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
    const labels = labelMock.map(({className, type, name, value, title}) => (
        <label
            className={className}>
            <input
                type={type}
                name={name}
                value={value}/>
            {title}
        </label>
    ))

    return (
        <div className={styles.filtersBlock}>
            <form className={styles.filtersBlock__form} onChange={(e) => {
                console.log(e.target.value)
                props.filterArray(e.target.value);
            }}>
                <p>Сортировать</p>
                <div className={styles.filtersBlock__radio}>
                    {labels}
                </div>
            </form>
        </div>
    )
}

export default FiltersBlock;
