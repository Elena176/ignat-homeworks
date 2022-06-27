import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options: string[]
  onChangeOption: (option: string) => void
  name: string
  value: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
    // onChange, onChangeOption
  }


  const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
    <label key={name + '-' + i}>
      <input
        className={s.inputRadio}
        type={'radio'}
        name={name}
        value={o}
        onChange={onChangeCallback}
        checked={o === value}
        {...restProps}
      />
      <span className={s.option}>{o}</span>
    </label>
  )) : []

  return (
    <div className={s.container}>
      {mappedOptions}
    </div>
  )
}

export default SuperRadio;
