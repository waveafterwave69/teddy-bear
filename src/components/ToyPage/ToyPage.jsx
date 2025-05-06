import { useEffect } from 'react'
import styles from './ToyPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { json } from '../../api/data'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { removePersonToFav, setPersonToFav } from '../../store/actions'
import { useParams } from 'react-router'
import { addItem, minusItem } from '../../store/slices/storeSlice'

export default function ToyPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.location.hash = '#top'
    }, [])

    const dispatch = useDispatch()
    const storeData = useSelector((state) => state.store)

    function addToy() {
        dispatch(addItem(id))
    }

    function minusToy() {
        dispatch(minusItem(id))
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
                                src={storeData.store.catalogs[id - 1].img}
                                alt=""
                                className={styles.item__content__img}
                            />
                            {storeData.store.catalogs[id - 1].count > 0 && (
                                <div className={styles.count}>
                                    {storeData.store.catalogs[id - 1].count}
                                </div>
                            )}
                        </div>
                        <div style={styles.item__content__text}>
                            <h1 className={styles.item__content__title}>
                                <p>Мягкая игрушка </p>
                                <p>{storeData.store.catalogs[id - 1].name}.</p>
                            </h1>
                            <p className={styles.item__content__price}>
                                {storeData.store.catalogs[id - 1].price}₽
                            </p>
                            <div className={styles.item__content__params}>
                                <p>
                                    Высота:{' '}
                                    {storeData.store.catalogs[id - 1].height}
                                </p>
                                <p>
                                    Ширина:{' '}
                                    {storeData.store.catalogs[id - 1].width}
                                </p>
                            </div>
                            {storeData.store.catalogs[id - 1].count === 0 ? (
                                <button
                                    className={styles.item__button}
                                    onClick={addToy}
                                >
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
                                        {storeData.store.catalogs[id - 1].count}
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
                    </div>
                </div>
            </div>
        </>
    )
}
