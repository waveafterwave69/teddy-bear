import styles from './Header.module.scss'

import headerLogo from '../../img/header-logo.svg'
import cartImg from '../../img/cart.svg'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__row}>
                        <a href="#">
                            <img
                                src={headerLogo}
                                className={styles.header__logo}
                                alt="Логотип"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={cartImg}
                                className={styles.header__cart}
                                alt="Корзина"
                            />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
