import styles from './Korzina.module.scss'
import { useSelector } from 'react-redux'
import cartImg from '../../img/cart2.svg'
import { useEffect, useState } from 'react'

export default function Korzina() {
    const [els, setEls] = useState([])

    const storeData = useSelector((state) => state.favReducer)

    useEffect(() => {
        setEls(storeData)
    })

    const arr = Object.entries(els)

    return (
        <>
            {arr.map((el) => (
                <li key={el[0]}>
                    <p>{el[1].name}</p>
                    <p>{el[1].price} ₽</p>
                    <p>{el[1].count} шт.</p>
                </li>
            ))}
            <div className={styles.card}>
                <h2 className={styles.card__title}>
                    Корзина <img src={cartImg} alt="" />
                </h2>
                <div className={styles.card__content}>
                    <ul className={styles.car__list}></ul>
                </div>
            </div>
        </>
    )
}
