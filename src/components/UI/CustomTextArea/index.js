import React, { useRef, useEffect, forwardRef } from 'react'
import { TextArea } from '../../../styles/Inputs'

export const CustomTextArea = forwardRef((props, ref) => {
  const textAreaRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      if (textAreaRef.current.attributes.autocomplete &&
        textAreaRef.current.attributes.autocomplete.value === 'new-field'
      ) clearInterval(interval)
      textAreaRef.current.setAttribute('autocomplete', 'new-field')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <TextArea
      ref={(e) => {
        textAreaRef.current = e
        ref && ref(e)
      }}
      {...props}
    />
  )
})
