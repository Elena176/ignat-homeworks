import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from './Routes';

function Header() {
    return (
        <div className={s.container}>
            <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            {/*// add NavLinks*/}
        </div>
    )
}

export default Header
