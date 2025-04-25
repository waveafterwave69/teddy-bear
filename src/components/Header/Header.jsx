import styles from './Header.module.scss'

import headerLogo from '../../img/header-logo.svg'
import cartImg from '../../img/cart.svg'

import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__row}>
                        <NavLink to="/">
                            <img
                                src={headerLogo}
                                className={styles.header__logo}
                                alt="Логотип"
                            />
                        </NavLink>
                        <NavLink to="/cart">
                            <img
                                src={cartImg}
                                className={styles.header__cart}
                                alt="Корзина"
                            />
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}
