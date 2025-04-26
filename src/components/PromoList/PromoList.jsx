import { useEffect, useRef, useState } from 'react'
import styles from './PromoList.module.scss'
import searchInput from '../../img/search.svg'
import { json } from '../../api/data'
import ListIem from '../ListIem/ListIem'

let firstEl = 0
let lastEl = 12

export default function PromoList() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState('')
    const [toys, setToys] = useState([])

    const getToys = () => {
        const json2 = JSON.parse(json)
        const data = json2.catalogs
        // const data = json2.catalogs.slice(firstEl, lastEl)
        setToys(data)
    }

    const addToys = () => {
        lastEl += 12
        getToys()
    }

    useEffect(() => {
        getToys()
    }, [])

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase()
        setSearchTerm(term)

        const filteredResults = toys.filter((name) =>
            name.name.toLowerCase().includes(term)
        )

        setSearchResults(filteredResults)
    }

    return (
        <>
            <div className={styles.promo__list__margin}>
                <div className={styles.input__container}>
                    <input
                        value={searchTerm}
                        onChange={handleSearch}
                        type="text"
                        className={styles.input}
                        placeholder="Введите текст..."
                    />
                    <button>
                        <img
                            src={searchInput}
                            className={styles.input__img}
                            alt="Поиск"
                        />
                    </button>
                </div>

                <ul className={styles.promo__list}>
                    {searchTerm.length === 0 &&
                        toys.map((toy, index) => (
                            <li key={index} className={styles.list__item}>
                                <ListIem {...toy} />
                            </li>
                        ))}
                    {searchResults.length > 0 &&
                        searchResults.map((toy, index) => (
                            <li key={index} className={styles.list__item}>
                                <ListIem {...toy} />
                            </li>
                        ))}
                    {(searchResults.length == 0) & (searchTerm.length !== 0) ? (
                        <p>Ничего не найдено</p>
                    ) : null}
                    {/* <button onClick={addToys}>Ещё</button> */}
                </ul>
            </div>
        </>
    )
}
