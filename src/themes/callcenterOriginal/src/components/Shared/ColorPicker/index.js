import React, { useEffect, useState } from 'react'
import { CaretDownFill } from 'react-bootstrap-icons'
import { SketchPicker } from 'react-color'
import {
  Container,
  ColorWrapper,
  ColorBox,
  ColorPickerWrapper
} from './styles'

export const ColorPicker = (props) => {
  const {
    defaultColor,
    onChangeColor
  } = props

  const [sketchPickerColor, setSketchPickerColor] = useState('#F5F9FF')
  const [open, setOpen] = useState(false)

  const handleChangePickerColor = (picker) => {
    setSketchPickerColor(picker.hex)
    onChangeColor && onChangeColor(picker.hex)
  }

  useEffect(() => {
    if (defaultColor) {
      setSketchPickerColor(defaultColor)
    }
  }, [defaultColor])

  const closePicker = (e) => {
    if (!open) return
    const outSideClick = !e.target.closest('.ordering-color-picker')
    if (outSideClick) setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', closePicker)
    return () => document.removeEventListener('click', closePicker)
  }, [open])

  return (
    <Container>
      <ColorWrapper onClick={() => setOpen(true)}>
        <ColorBox bgColor={sketchPickerColor} />
        <CaretDownFill />
      </ColorWrapper>
      {open && (
        <ColorPickerWrapper className='ordering-color-picker'>
          <SketchPicker
            onChange={handleChangePickerColor}
            color={sketchPickerColor}
            disableAlpha
          />
        </ColorPickerWrapper>
      )}
    </Container>
  )
}
