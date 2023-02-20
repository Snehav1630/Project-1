import React, { useContext } from 'react'
import { AllMenuContext } from './Menu'
export default function Test() {
    const allMenus=useContext(AllMenuContext)
  return (
    <div>
      <h1>This is test</h1>
    </div>
  )
}
