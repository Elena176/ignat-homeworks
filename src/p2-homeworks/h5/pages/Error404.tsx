import React from 'react'
import s from './Error404.module.css';

function Error404() {
    return (
        <div className={s.topBar}>
            <div className={s.errorBlock}></div>
            <div className={s.errorBlockText}>
                <div className={s.errorText}>
                    Oops, This page does not exist
                </div>
            </div>
            {/*<div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    )
}

export default Error404
