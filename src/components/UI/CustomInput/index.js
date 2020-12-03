import React, { useRef, useEffect, forwardRef } from 'react'
import { Input } from '../../../styles/Inputs'

export const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      if (inputRef.current.attributes.autocomplete &&
        inputRef.current.attributes.autocomplete.value === 'new-field'
      ) clearInterval(interval)
      inputRef.current.setAttribute('autocomplete', 'new-field')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <Input
      ref={(e) => {
        inputRef.current = e
        ref && ref(e)
      }}
      {...props}
    />
  )
})
