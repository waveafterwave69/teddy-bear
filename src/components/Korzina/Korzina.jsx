import styles from './Korzina.module.scss'

import cartImg from '../../img/cart2.svg'

export default function Korzina(props) {
    return (
        <>
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
