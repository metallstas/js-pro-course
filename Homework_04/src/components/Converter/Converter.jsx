import React, { useState } from 'react'
import cls from './Converter.module.css'

const Converter = () => {
  const [usdValue, setUsdValue] = useState('')
  const [blrValue, setBlrValue] = useState('')

  const converterBlr = (e) => {
    if (Number.isNaN(+e.target.value)) {
      return
    }
    setBlrValue(() => +e.target.value)
    const currUsd = (+e.target.value / 2.56).toFixed(2)
    setUsdValue(currUsd)
  }

  const converterUsd = (e) => {
    if (Number.isNaN(+e.target.value)) {
      return
    }
    setUsdValue(() => +e.target.value)
    const currBlr = (+e.target.value * 2.56).toFixed(2)
    setBlrValue(currBlr)
  }

  return (
    <div>
      <h1>Live currency converter</h1>
      <div className={cls.converter}>
        <p>Enter currency in $, USD</p>
        <input value={usdValue} onChange={converterUsd} placeholder='0' />
      </div>
      <div className={cls.converter}>
        <p>Enter currency in BYN</p>
        <input value={blrValue} onChange={converterBlr} placeholder='0' />
      </div>
    </div>
  )
}

export default Converter
