import React, { useEffect, useState, useRef } from 'react'
import Cropper from 'cropperjs'
import { useLanguage } from 'ordering-components'
import { Button, IconButton } from '../../../styles'
import { ArrowClockwise } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import 'cropperjs/dist/cropper.css'
import {
  Container,
  ImageCropWrapper,
  ImageCropActionWrapper,
  RangeWrapper,
  ActionContentWrapper,
  ButtonWrapper
} from './styles'

export const ImageCrop = (props) => {
  const {
    photo,
    handleChangePhoto,
    onClose
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [cropper, setCropper] = useState()
  const [zoomValue, setZoomValue] = useState(50)
  const cropperRef = useRef(null)

  const handleChangeZoom = (evt) => {
    const value = evt.target.value
    cropper.scale(value / 50)
    setZoomValue(value)
  }

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      handleChangePhoto(cropper.getCroppedCanvas({ imageSmoothingQuality: 'high' }).toDataURL())
      onClose && onClose()
    }
  }

  const handleChangeRotate = () => {
    if (!photo) return
    cropper.rotate(45)
  }

  useEffect(() => {
    if (!cropperRef.current || !photo) return

    const _cropper = new Cropper(cropperRef.current, {
      // aspectRatio: 16 / 9,
      dragMode: 'move',
      zoomable: false,
      toggleDragModeOnDblclick: false
    })
    setCropper(_cropper)
  }, [photo])

  return (
    <Container>
      <ImageCropWrapper>
        <img ref={cropperRef} src={photo} />
      </ImageCropWrapper>
      <ImageCropActionWrapper>
        <RangeWrapper>
          <span className='title'>{t('RESIZE_IMAGE', 'Resize image')}</span>
          <input
            min='0'
            type='range'
            step='0.01'
            value={zoomValue}
            onChange={handleChangeZoom}
            style={{ backgroundImage: `-webkit-gradient(linear, 0% 0%, ${zoomValue}% 0%, color-stop(100%, ${theme.colors.primary}), color-stop(100%, #F6F6FA))` }}
          />
          <span className='percent'>{parseInt(zoomValue * 2)} %</span>
        </RangeWrapper>
        <ActionContentWrapper>
          <IconButton onClick={handleChangeRotate}>
            <span>{t('ROTATE', 'Rotate')}</span>
            <ArrowClockwise />
          </IconButton>
        </ActionContentWrapper>
      </ImageCropActionWrapper>
      <ButtonWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          onClick={getCropData}
        >
          {t('CROP', 'Crop')}
        </Button>
      </ButtonWrapper>
    </Container>
  )
}
