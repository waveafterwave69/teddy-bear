import styles from './CartPageEl.module.scss'

import cartImg from '../../img/cart2.svg'
import deleteImg from '../../img/delete.svg'

import { removeItem } from '../../store/slices/storeSlice'
import { useSelector, useDispatch } from 'react-redux'
export default function CartPageEl() {
    const dispatch = useDispatch()
    const storeData = useSelector((state) => state.store)

    function removeItemFunc(elId) {
        dispatch(removeItem(elId))
    }

    let totalPrice = 0

    storeData.store.catalogs.forEach((element) => {
        totalPrice += Number(element.startPrice)
    })

    return (
        <>
            <div className={styles.da} data-aos="fade-up">
                <div className={styles.card}>
                    <h2 className={styles.card__title}>
                        <p>Корзина</p>
                        <img src={cartImg} alt="" />
                    </h2>
                    <div className={styles.card__content}>
                        <ul className={styles.cart__list}>
                            {storeData.store.catalogs.map((el) => (
                                <>
                                    {el.count > 0 && (
                                        <li
                                            className={styles.cart__item}
                                            key={el.id}
                                        >
                                            <div
                                                className={
                                                    styles.cart__item__anotherrow
                                                }
                                            >
                                                <img
                                                    src={el.img}
                                                    alt=""
                                                    style={{ width: '75px' }}
                                                    className={
                                                        styles.cart__item__img
                                                    }
                                                />
                                                <div
                                                    className={
                                                        styles.cart__item__row
                                                    }
                                                >
                                                    <p
                                                        className={
                                                            styles.cart__item__name
                                                        }
                                                    >
                                                        {el.name}
                                                    </p>
                                                    <p
                                                        className={
                                                            styles.cart__item__price
                                                        }
                                                    >
                                                        {el.startPrice} ₽ (
                                                        {el.count} шт.)
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    removeItemFunc(el.id)
                                                }
                                            >
                                                <img
                                                    src={deleteImg}
                                                    alt="delete"
                                                />
                                            </button>
                                        </li>
                                    )}
                                </>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cart__total}>
                        {storeData.store.catalogs.length > 0 && (
                            <p className={styles.cart__total__text}>
                                Итого: {totalPrice} ₽
                            </p>
                        )}
                        {storeData.store.catalogs.length > 0 && (
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
