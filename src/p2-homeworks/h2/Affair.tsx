import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const setColorPriority = s.priority + ' ' + s[props.affair.priority]
    return (
        <div className={s.list}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={setColorPriority}>[{props.affair.priority}]</div>
            <button className={s.delete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
