import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import s from './Header.module.css';

function Header() {

    return (
        <div className={s.container}>
            <div className={s.slideRight}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.nav} activeClassName={s.navActive}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.nav} activeClassName={s.navActive}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.nav} activeClassName={s.navActive}>JuniorPlus</NavLink>
            </div>

            {/*// add NavLinks*/}
        </div>
    )
}

export default Header;
