import { useEffect, useState } from 'react'
import styles from './PromoList.module.scss'

import { json } from '../../api/data'
import ListIem from '../ListIem/ListIem'

let firstEl = 0
let lastEl = 12

//

export default function PromoList() {
    const [toys, setToys] = useState([])

    const getToys = () => {
        const json2 = JSON.parse(json)
        const data = json2.catalogs.slice(firstEl, lastEl)
        setToys(data)
    }

    const addToys = () => {
        lastEl += 12
        getToys()
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
                <button onClick={addToys}>Ещё</button>
            </ul>
        </>
    )
}
