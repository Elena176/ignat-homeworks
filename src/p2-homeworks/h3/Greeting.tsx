import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,  onKeyPressAddUser} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input // need to fix with (?:)
const disabledButton = !!error
    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddUser}
                   className={inputClass}/>
            <button className={s.button}
                onClick={addUser}
disabled={disabledButton}
            >add</button>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
