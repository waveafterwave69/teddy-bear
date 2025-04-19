import styles from './PromoSearch.module.scss'

import searchInput from '../../img/search.svg'

export default function PromoSearch() {
    return (
        <>
            <div className={styles.input__container}>
                <input
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
        </>
    )
}
