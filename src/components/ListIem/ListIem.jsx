import styles from './ListIem.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { removePersonToFav, setPersonToFav } from '../../store/actions'
import { Link } from 'react-router-dom'

export default function ListIem(props) {
    const dispatch = useDispatch()
    const storeData = useSelector((state) => state.favReducer)

    function addToy() {
        dispatch(
            setPersonToFav({
                [props.id]: {
                    name: props.name,
                    price: props.price,
                    count: props.count,
                    img: props.img,
                },
            })
        )
    }

    function addOneToy() {
        dispatch(
            setPersonToFav({
                [props.id]: {
                    name: props.name,
                    price:
                        Number(storeData[props.id].price) + Number(props.price),
                    count: Number(storeData[props.id].count) + 1,
                    img: props.img,
                },
            })
        )
    }

    function minusOneToy() {
        if (storeData[props.id].count == 1) {
            dispatch(removePersonToFav(props.id))
        } else {
            dispatch(
                setPersonToFav({
                    [props.id]: {
                        name: props.name,
                        price:
                            Number(storeData[props.id].price) -
                            Number(props.price),
                        count: Number(storeData[props.id].count) - 1,
                        img: props.img,
                    },
                })
            )
        }
    }

    return (
        <>
            <div className={styles.card}>
                <Link to={`/${props.id}`} className={styles.list__link}>
                    <img src={props.img} alt="" className={styles.item__img} />
                    {storeData[props.id] && (
                        <div className={styles.count}>
                            {storeData[props.id].count}
                        </div>
                    )}
                </Link>
                <h3 className={styles.item__title}>{props.name}</h3>
                <p className={styles.item__price}>{props.price} ₽</p>

                {!storeData[props.id] ? (
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
                        <p style={{ fontWeight: '600' }}>
                            {storeData[props.id].count}
                        </p>
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
