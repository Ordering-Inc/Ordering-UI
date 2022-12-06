import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'
import { XLg } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import {
  BarContainer
} from './styles'

export const SideBar = (props) => {
  const {
    open,
    defaultSideBarWidth,
    moveDistance,
    isBorderShow,
    noAnimation,
    handleCloseWizard,
    IconTop
  } = props

  const sideBarRef = useRef(null)
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sideBarWidth = defaultSideBarWidth || 500

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 768 || width <= sideBarWidth) {
        sideBarRef.current.style.width = '100vw'
      } else {
        sideBarRef.current.style.width = `${sideBarWidth}px`
      }
    }
  }, [width, sideBarWidth, isMenuOpen])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open, defaultSideBarWidth])

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape') {
      props.onClose && props.onClose()
      handleCloseWizard && handleCloseWizard()
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  return (
    <>
      <BarContainer
        ref={sideBarRef}
        isBorderShow={isBorderShow}
        moveDistance={moveDistance}
        noAnimation={noAnimation}
        IconTop={IconTop}
      >
        <IconButton
          color='black'
          onClick={() => props.onClose()}
        >
          <XLg />
        </IconButton>
        {props.children}
      </BarContainer>
    </>
  )
}
