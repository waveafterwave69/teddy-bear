import styles from './Promo.module.scss'

import PromoSearch from '../PromoSearch/PromoSearch'
import Cart from '../Cart/Cart'
import PromoList from '../PromoList/PromoList'
import { useEffect, useState } from 'react'
import { json } from '../../api/data'

export default function Promo() {
    const [toys, setToys] = useState([])

    const getToys = () => {
        const json2 = JSON.parse(json)
        const data = json2.catalogs
        setToys(data)
    }

    useEffect(() => {
        getToys()
    }, [])

    return (
        <>
            <div className={styles.promo}>
                <div className="container">
                    <PromoSearch />
                    <div className={styles.promo__content}>
                        <div className={styles.promo__row}>
                            <Cart {...toys} />
                            <PromoList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
