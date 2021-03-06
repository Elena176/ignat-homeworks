import React from 'react'
import AlternativeMessage from './AlternativeMessage';
import Message from './Message';

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Z7Rxu3yANPiLxX9UIakADLoczgP8zvzSKQ&usqp=CAU',
    name: 'Elena',
    message: 'Hello!',
    time: '22:00',
}

const alternativeMessageData = {
    avatar: '',
    name: 'My friend',
    message: 'Hy! How are you?',
    time: '22:10',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/
            }

            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
