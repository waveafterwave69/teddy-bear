import { useEffect, useState } from 'react'
import styles from './ToyPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { json } from '../../api/data'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { removePersonToFav, setPersonToFav } from '../../store/actions'
import { useParams } from 'react-router'

export default function ToyPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    let storeData = useSelector((state) => state.favReducer)

    const [toys, setToys] = useState([])

    const getToys = () => {
        const json2 = JSON.parse(json)
        const data = json2.catalogs[id - 1]
        setToys(data)
    }

    useEffect(() => {
        getToys()
        window.location.hash = '#top'
    }, [])

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })

    function addToy() {
        dispatch(
            setPersonToFav({
                [toys.id]: {
                    name: toys.name,
                    price: toys.price,
                    count: toys.count,
                    img: toys.img,
                },
            })
        )
    }

    function addOneToy() {
        dispatch(
            setPersonToFav({
                [toys.id]: {
                    name: toys.name,
                    price: Number(storeData[id].price) + Number(toys.price),
                    count: Number(storeData[id].count) + 1,
                    img: toys.img,
                },
            })
        )
    }

    function minusOneToy() {
        if (storeData[id].count == 1) {
            dispatch(removePersonToFav(id))
        } else {
            dispatch(
                setPersonToFav({
                    [toys.id]: {
                        name: toys.name,
                        price: Number(storeData[id].price) - Number(toys.price),
                        count: Number(storeData[id].count) - 1,
                        img: toys.img,
                    },
                })
            )
        }
    }

    return (
        <>
            <div className={styles.item}>
                <button
                    data-aos="fade-down"
                    className={styles.item__prevButton}
                    onClick={() => navigate(-2)}
                >
                    Назад
                </button>
                <div className={styles.item__row}>
                    <Cart />

                    <div className={styles.item__content} data-aos="fade-left">
                        <div className={styles.relative}>
                            <img
                                src={toys.img}
                                alt=""
                                className={styles.item__content__img}
                            />
                            {storeData[id] && (
                                <div className={styles.count}>
                                    {storeData[id].count}
                                </div>
                            )}
                        </div>
                        <div style={styles.item__content__text}>
                            <h1 className={styles.item__content__title}>
                                <p>Мягкая игрушка </p>
                                <p>{toys.name}.</p>
                            </h1>
                            <p className={styles.item__content__price}>
                                {toys.price}₽
                            </p>
                            <div className={styles.item__content__params}>
                                <p>Высота: {toys.height}</p>
                                <p>Ширина: {toys.width}</p>
                            </div>
                            {!storeData[id] ? (
                                <button
                                    className={styles.item__button}
                                    onClick={addToy}
                                >
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
                                        {storeData[id].count}
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
                    </div>
                </div>
            </div>
        </>
    )
}
