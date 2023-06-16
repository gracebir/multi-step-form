import React, { useState } from 'react'
import check from '../assets/icon-checkmark.svg'

function CheckBox() {
    const [isChecked, setIsChecked] = useState(false)
    const toggle = () => setIsChecked(!isChecked)
  return (
    <div onClick={toggle} className={`border border-cool-gray w-5 h-5 cursor-pointer rounded-md ${isChecked && "bg-purplish-blue"} flex items-center justify-center`}>
      {isChecked && <img src={check} alt=""/>}
    </div>
  )
}

export default CheckBox
