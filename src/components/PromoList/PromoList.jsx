import { useEffect, useState } from 'react'
import styles from './PromoList.module.scss'

import { json } from '../../api/data'
import ListIem from '../ListIem/ListIem'

export default function PromoList() {
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
            <ul className={styles.promo__list}>
                {toys.map((toy, index) => (
                    <li key={index} className={styles.list__item}>
                        <ListIem {...toy} />
                    </li>
                ))}
            </ul>
        </>
    )
}
