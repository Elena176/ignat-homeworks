import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from '../c5-SuperSelect/SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: string[]
  onChangeOption: (option: string) => void
  value: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    value,
    ...restProps
  }
) => {
  const mappedOptions: JSX.Element[] = options.map((o, index) => (
    <option key={index} value={o}>{o}</option>
  )); // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption(e.target.value)
    // onChange, onChangeOption
  }

  return (
    <select className={s.selectCss} value={value} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
