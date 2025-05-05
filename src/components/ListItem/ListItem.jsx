import styles from './ListItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, minusItem } from '../../store/slices/storeSlice'

export default function ListItem(props) {
    const dispatch = useDispatch()
    const storeData = useSelector((state) => state.store)

    function addToy() {
        dispatch(addItem(props.id))
    }

    function minusToy() {
        dispatch(minusItem(props.id))
    }

    return (
        <>
            <div className={styles.card}>
                <Link to={`/${props.id}`} className={styles.list__link}>
                    <img src={props.img} alt="" className={styles.item__img} />
                    {storeData.store.catalogs[props.id - 1].count > 0 && (
                        <div className={styles.count}>
                            {storeData.store.catalogs[props.id - 1].count}
                        </div>
                    )}
                </Link>
                <h3 className={styles.item__title}>{props.name}</h3>
                <p className={styles.item__price}>{props.price} ₽</p>

                {storeData.store.catalogs[props.id - 1].count === 0 ? (
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
                        <p style={{ fontWeight: '600' }}>
                            {storeData.store.catalogs[props.id - 1].count}
                        </p>
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
