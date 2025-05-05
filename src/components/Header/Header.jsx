import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import headerLogo from '../../img/header-logo.svg'
import cartImg from '../../img/cart.svg'

import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
    const storeData = useSelector((state) => state.store)
    // const [totalCount, setTotalCount] = useState(0)
    // const arr = Object.entries(storeData)
    // let total = 0
    // useEffect(() => {
    //     arr.forEach((el) => {
    //         total += Number(el[1].count)
    //     })

    //     setTotalCount(total)
    // })

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
                            {/* {totalCount > 0 && (
                                <div className={styles.header__relative__count}>
                                    {totalCount}
                                </div>
                            )} */}
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}
