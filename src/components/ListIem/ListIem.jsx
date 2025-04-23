import { useState } from 'react'
import styles from './ListIem.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { removePersonToFav, setPersonToFav } from '../../store/actions'

export default function ListIem(props) {
    const dispatch = useDispatch()
    const storeData = useSelector((state) => state.favReducer)

    const [show, setShow] = useState(false)
    const [count, setCount] = useState(Number(props.count))
    const [price, setPrice] = useState(Number(props.startPrice))

    function addToy() {
        setCount((prev) => prev + 1)
        setPrice((prev) => prev + Number(props.price))
        setShow(true)

        dispatch(
            setPersonToFav({
                [props.id]: {
                    name: props.name,
                    price: price + Number(props.price),
                    count: count + 1,
                },
            })
        )
    }

    function addOneToy() {
        setCount((prev) => prev + 1)
        setPrice((prev) => prev + Number(props.price))
        dispatch(
            setPersonToFav({
                [props.id]: {
                    name: props.name,
                    price: price + Number(props.price),
                    count: count + 1,
                },
            })
        )
        setShow(true)
        console.log(storeData)
    }

    function minusOneToy() {
        setCount((prev) => prev - 1)
        setPrice((prev) => prev - Number(props.price))
        dispatch(
            setPersonToFav({
                [props.id]: {
                    name: props.name,
                    price: price - Number(props.price),
                    count: count - 1,
                },
            })
        )
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
                <p className={styles.item__price}>{props.price} ₽</p>
                {!show ? (
                    <button className={styles.item__button} onClick={addToy}>
                        В корзину
                    </button>
                ) : (
                    <div className={styles.item__plusminus}>
                        <button
                            onClick={minusOneToy}
                            className={styles.item__plusminus__text}
                        >
                            -
                        </button>
                        <p style={{ fontWeight: '600' }}>{count}</p>
                        <button
                            onClick={addOneToy}
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
