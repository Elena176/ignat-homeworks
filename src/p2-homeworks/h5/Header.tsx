import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import s from './Header.module.css';

function Header() {
    const [selected, setSelected] = useState(true)

    return (
        <div className={s.container}>

            {!selected &&
            <div onMouseLeave={() => setSelected(true)} className={s.nav}>
                <NavLink to={PATH.PRE_JUNIOR} >PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} >Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} >JuniorPlus</NavLink>
            </div>
            }
            <span className={s.nav}>
                <button onMouseOver={() => setSelected(false)} > nav </button>
            </span>

            {/*// add NavLinks*/}
        </div>
    )
}

export default Header;
