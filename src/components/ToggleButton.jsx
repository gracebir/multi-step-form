import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context'

function ToggleButton() {
    const [isChecked, setIschecked] = useState(false)
    const {isMonth, setIsMonth} = useContext(AppContext)
    const toggle = () => {
      setIschecked(!isChecked)
      setIsMonth(!isMonth)
    }
  return (
    <div onClick={toggle} className="w-10 h-6 rounded-full bg-marine-blue relative cursor-pointer">
      <div className={`w-4 absolute left-1 rounded-full top-1 right-1 h-4 bg-white transition ${isChecked ? 'translate-x-full':''}`}>
      </div>
    </div>
  )
}

export default ToggleButton
