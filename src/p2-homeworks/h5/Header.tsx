import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to={'/pre-junior'}>PreJunior</NavLink>
            <NavLink to={'/junior'}>Junior</NavLink>
            <NavLink to={'/juniorPlus'}>JuniorPlus</NavLink>
            {/*// add NavLinks*/}
        </div>
    )
}

export default Header
