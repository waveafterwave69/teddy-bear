import styles from './Header.module.scss'
import { useSelector } from 'react-redux'
import headerLogo from '../../img/header-logo.svg'
import cartImg from '../../img/cart.svg'

import { NavLink } from 'react-router-dom'

export default function Header() {
    const storeData = useSelector((state) => state.store)
    const totalCountArray = storeData.store.catalogs.filter(
        (el) => el.count > 0
    )

    const totalCount = totalCountArray.reduce((acc, el) => {
        return acc + el.count
    }, 0)

    return (
        <>
            <a id="top"></a>
            <header className={styles.header} data-aos="fade-down">
                <div className="container">
                    <div className={styles.header__row}>
                        <NavLink to="/">
                            <img
                                src={headerLogo}
                                className={styles.header__logo}
                                alt="Логотип"
                            />
                        </NavLink>
                        <NavLink to="/cart" className={styles.header__relative}>
                            <img
                                src={cartImg}
                                className={styles.header__cart}
                                alt="Корзина"
                            />
                            {totalCountArray.length > 0 && (
                                <div className={styles.header__relative__count}>
                                    {totalCount}
                                </div>
                            )}
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}
