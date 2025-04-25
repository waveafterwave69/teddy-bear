import styles from './CartPagee.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removePersonToFav } from '../../store/actions'
import cartImg from '../../img/cart2.svg'
import { useEffect, useState } from 'react'

import deleteImg from '../../img/delete.svg'

export default function CartPagee() {
    const [els, setEls] = useState([])
    const dispatch = useDispatch()
    const storeData = useSelector((state) => state.favReducer)

    useEffect(() => {
        setEls(storeData)
    })

    const arr = Object.entries(els)

    let total = 0

    arr.forEach((el) => {
        total += Number(el[1].price)
    })

    return (
        <>
            <div className={styles.da}>
                <div className={styles.card}>
                    <h2 className={styles.card__title}>
                        <p>Корзина</p>
                        <img src={cartImg} alt="" />
                    </h2>
                    <div className={styles.card__content}>
                        <ul className={styles.cart__list}>
                            {arr.map((el) => (
                                <li key={el[0]} className={styles.cart__item}>
                                    <div
                                        className={
                                            styles.cart__item__anotherrow
                                        }
                                    >
                                        <img
                                            src={el[1].img}
                                            alt="toy"
                                            className={styles.cart__item__img}
                                        />
                                        <div className={styles.cart__item__row}>
                                            <p
                                                className={
                                                    styles.cart__item__name
                                                }
                                            >
                                                {el[1].name}
                                            </p>
                                            <p
                                                className={
                                                    styles.cart__item__price
                                                }
                                            >
                                                {el[1].price} ₽ ({el[1].count}{' '}
                                                шт.)
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            dispatch(removePersonToFav([el[0]]))
                                        }}
                                    >
                                        <img src={deleteImg} alt="delete" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cart__total}>
                        {arr.length > 0 && (
                            <p className={styles.cart__total__text}>
                                Итого: {total} ₽
                            </p>
                        )}
                        {arr.length > 0 && (
                            <button className={styles.cart__total__button}>
                                Оплатить
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
