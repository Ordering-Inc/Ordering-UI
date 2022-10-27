import React, { useEffect, useState } from 'react'

import {
  ToggleSwitchContainer,
  Slider
} from './styles'

export const Switch = (props) => {
  const {
    defaultChecked,
    disabled,
    onChange,
    className,
    notAsync
  } = props
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(defaultChecked)
  }, [defaultChecked])

  const handleCheckBoxChange = (evt) => {
    if (!notAsync) {
      setChecked(evt.target.checked)
    }
    onChange && onChange(evt.target.checked)
  }

  return (
    <ToggleSwitchContainer className={className} disabled={disabled}>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleCheckBoxChange}
      />
      <Slider />
    </ToggleSwitchContainer>
  )
}
