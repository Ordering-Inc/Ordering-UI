import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import IosArrowForward from '@meronex/icons/ios/IosArrowForward'
import IosArrowBack from '@meronex/icons/ios/IosArrowBack'
import { AutoscrollContainer } from './styles'

import { useTheme } from '../../contexts/ThemeContext'

export const AutoScroll = ({ children, modal, special }) => {
  const { width } = useWindowSize()
  const [parentElement, setParentElement] = useState([])
  const [containerElement, setContainerElement] = useState([])
  const [theme] = useTheme()

  useLayoutEffect(() => {
    const element = document?.getElementById('autoscroll')?.parentNode
    const containerElementListener = element?.parentNode
      ?.addEventListener('scroll', handleScroll)
    const containerElement = element?.parentNode
    setParentElement(element)
    setContainerElement(containerElement)

    return () => {
      document.removeEventListener(containerElementListener)
    }
  })

  useEffect(() => {
    handleScroll()
  })

  const handleScroll = () => {
    const botonRight = document.getElementById('right-autoscroll')
    const botonLeft = document.getElementById('left-autoscroll')
    if (botonLeft || botonRight) {
      if (theme?.rtl) {
        if ((containerElement?.scrollLeft * -1) < 40) {
          botonRight && botonRight.classList.add('hidden')
        } else {
          botonRight && botonRight.classList.remove('hidden')
        }
        if ((containerElement?.scrollLeft * -1) > parentElement?.scrollWidth - containerElement?.offsetWidth - 20) {
          botonLeft && botonLeft.classList.add('hidden')
        } else {
          botonLeft && botonLeft.classList.remove('hidden')
        }
      } else {
        if (containerElement?.scrollLeft < 40) {
          botonLeft && botonLeft.classList.add('hidden')
        } else {
          botonLeft && botonLeft.classList.remove('hidden')
        }
        if (containerElement?.scrollLeft > parentElement?.scrollWidth - containerElement?.offsetWidth - 20) {
          botonRight && botonRight.classList.add('hidden')
        } else {
          botonRight && botonRight.classList.remove('hidden')
        }
      }
    }
  }

  const scrolling = (left) => {
    if (left) {
      containerElement.scrollBy({
        top: 0,
        left: (((-parentElement.offsetWidth / 10) > -200) ? -200 : -parentElement.offsetWidth / 10),
        behavior: 'smooth'
      })
    } else {
      containerElement.scrollBy({
        top: 0,
        left: (((+parentElement.offsetWidth / 10) < 200) ? 200 : +parentElement.offsetWidth / 10),
        behavior: 'smooth'
      })
    }
  }

  return (
    <AutoscrollContainer modal={modal} id='autoscroll'>
      {
        (!special ? width < parentElement?.offsetWidth + 50 : width < parentElement?.offsetWidth) ? <IosArrowBack id='left-autoscroll' onMouseDown={() => scrolling(true)} /> : ''
      }
      {children}
      {
        (!special ? width < parentElement?.offsetWidth + 50 : width < parentElement?.offsetWidth) ? <IosArrowForward id='right-autoscroll' onMouseDown={() => scrolling()} /> : ''
      }
    </AutoscrollContainer>

  )
}
