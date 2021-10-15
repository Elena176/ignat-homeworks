import React from 'react'
import s from './Message.module.css';

type AlternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div className={s.message}>
            <img className={s.img}
                 src={props.avatar} alt={''}/>
            <div className={s.angle}></div>
            <div className={s.item}>
                <div className={s.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
