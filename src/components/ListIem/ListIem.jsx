import { useState } from 'react'
import styles from './ListIem.module.scss'
import Korzina from '../Korzina/Korzina'

export default function ListIem(props) {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(0)

    function addToy() {
        setCount((prev) => prev + 1)
        setShow(true)
    }

    function minusToy() {
        setCount((prev) => prev - 1)
        if (count == 1) {
            setShow(false)
        }
    }

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
                    {show && <div className={styles.count}>{count}</div>}
                </a>
                <h3 className={styles.item__title}>{props.name}</h3>
                <p className={styles.item__price}>{props.price}</p>
                {!show ? (
                    <button className={styles.item__button} onClick={addToy}>
                        В корзину
                    </button>
                ) : (
                    <div className={styles.item__plusminus}>
                        <button
                            onClick={minusToy}
                            className={styles.item__plusminus__text}
                        >
                            -
                        </button>
                        <p style={{ fontWeight: '600' }}>{count}</p>
                        <button
                            onClick={addToy}
                            className={styles.item__plusminus__text}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
