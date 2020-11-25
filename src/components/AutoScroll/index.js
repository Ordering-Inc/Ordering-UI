import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import IosArrowForward from '@meronex/icons/ios/IosArrowForward'
import IosArrowBack from '@meronex/icons/ios/IosArrowBack'
import { DivContainer } from './styles'

import { useTheme } from '../../contexts/ThemeContext'

export const AutoScroll = ({ children, categories, container, modal }) => {
  const { width } = useWindowSize()
  const [categoriesElement, setCategoriesElement] = useState([])
  const [containerElement, setContainerElement] = useState([])
  const [theme] = useTheme()

  useLayoutEffect(() => {
    const containerElementListener = document?.getElementById(container)
      ?.addEventListener('scroll', handleScroll)
    const containerElement = document?.getElementById(container)
    const element = document?.getElementById(categories)
    setCategoriesElement(element)
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
          botonRight.classList.add('hidden')
        } else {
          botonRight.classList.remove('hidden')
        }
        if ((containerElement?.scrollLeft * -1) > categoriesElement?.scrollWidth - containerElement?.offsetWidth - 20) {
          botonLeft.classList.add('hidden')
        } else {
          botonLeft.classList.remove('hidden')
        }
      } else {
        if (containerElement?.scrollLeft < 40) {
          botonLeft.classList.add('hidden')
        } else {
          botonLeft.classList.remove('hidden')
        }
        if (containerElement?.scrollLeft > categoriesElement?.scrollWidth - containerElement?.offsetWidth - 20) {
          botonRight.classList.add('hidden')
        } else {
          botonRight.classList.remove('hidden')
        }
      }
    }
  }

  const scrolling = (left) => {
    if (left) {
      containerElement.scrollBy({
        top: 0,
        left: (((-categoriesElement.offsetWidth / 12) > -200) ? -200 : -categoriesElement.offsetWidth / 12),
        behavior: 'smooth'
      })
    } else {
      containerElement.scrollBy({
        top: 0,
        left: (((+categoriesElement.offsetWidth / 12) < 200) ? 200 : +categoriesElement.offsetWidth / 12),
        behavior: 'smooth'
      })
    }
  }

  return (
    <DivContainer modal={modal}>
      {
        width < categoriesElement.offsetWidth + 50 ? <IosArrowBack id='left-autoscroll' onMouseDown={() => scrolling(true)} /> : ''
      }
      {children}
      {
        width < categoriesElement.offsetWidth + 50 ? <IosArrowForward id='right-autoscroll' onMouseDown={() => scrolling()} /> : ''
      }
    </DivContainer>
  )
}
