import React from 'react';
import styles from './FiltersBlock.module.css';

const FiltersBlock = (props) => {
    const labelMockSort = [
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
        }
    ];

    const labelMockTransfersFilter = [
        {
            className: 'styles.filtersBlock__transferFilterCheckbox',
            type: "checkbox",
            name: "checkbox1",
            value: "notransfer",
            title: " - Без пересадок"
        },
        {
            className: 'styles.filtersBlock__transferFilterCheckbox',
            type: "checkbox",
            name: "checkbox2",
            value: "onetransfer",
            title: " - 1 пересадка"
        },
        {
            className: 'styles.filtersBlock__transferFilterCheckbox',
            type: "checkbox",
            name: "checkbox3",
            value: "twotransfer",
            title: " - 2 пересадки"
        }
    ];

    const sortLabels = labelMockSort.map(({className, type, name, value, title}) =>
        <label
            className={className}>
            <input
                type={type}
                name={name}
                value={value}/>
            {title}
        </label>
    );

    let transferFiltersCheckboxArray = [];
    for (let i = 0; i < props.transfersCount; i++) {
        transferFiltersCheckboxArray.push(labelMockTransfersFilter[i]);
    }

    const displayedTransferFiltersCheckboxArray = transferFiltersCheckboxArray.map(({className, type, name, value, title}) =>
        <label className={className}>
            <input type={type}
                   id={value}
                   onClick={(e) => console.dir(e)}/>
            {title}
        </label>
    );

    return (
        <div className={styles.filtersBlock}>
            <form className={styles.filtersBlock__form}>
                <p>Сортировать</p>
                <div className={styles.filtersBlock__filterOptions} onChange={(e) => {
                    props.filterArray(e.target.value);
                }}>
                    {sortLabels}
                </div>
                <p>Фильтровать</p>
                <div className={styles.filtersBlock__filterOptions}>
                    {displayedTransferFiltersCheckboxArray}
                </div>


            </form>
        </div>
    )
}

export default FiltersBlock;
