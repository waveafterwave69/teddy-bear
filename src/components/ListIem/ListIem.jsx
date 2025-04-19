import { useState } from 'react'
import styles from './ListIem.module.scss'

export default function ListIem(props) {
    const [count, setCount] = useState()

    return (
        <>
            <div className={styles.card}>
                <a href="#" className={styles.list__link}>
                    <img
                        src={props.img}
                        alt=""
                        className={styles.item__img}
                        style={{ width: '175px' }}
                    />
                    {props.count > 0 && (
                        <div className={styles.count}>{props.count}</div>
                    )}
                </a>
                <h3 className={styles.item__title}>{props.name}</h3>
                <p className={styles.item__price}>{props.price}</p>
                <button className={styles.item__button}>В корзину</button>
            </div>
        </>
    )
}
