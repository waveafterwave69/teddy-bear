import styles from './Promo.module.scss'

import PromoSearch from '../PromoSearch/PromoSearch'
import Korzina from '../Korzina/Korzina'
import PromoList from '../PromoList/PromoList'

export default function Promo() {
    // :(
    return (
        <>
            <div className={styles.promo}>
                <div className="container">
                    <PromoSearch />
                    <div className={styles.promo__content}>
                        <div className={styles.promo__row}>
                            <Korzina />
                            <PromoList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
