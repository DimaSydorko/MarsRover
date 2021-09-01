import { Select } from "antd"
import React from "react"
import { SelectsT } from "../../types"
const {Option} = Select
type propsSelectorT = {
  selects: SelectsT
  setSelected: (value: string) => void
}

export const Selector:React.FC<propsSelectorT> = ({selects, setSelected}) => {
  return <>
    <Select 
      defaultValue={selects[0].label}
      onChange={value => {setSelected(value)}}
    >
      {selects.map((op, i) => (<Option value={op.value} key={i}>{op.label}</Option>))}
    </Select>
  </>
}