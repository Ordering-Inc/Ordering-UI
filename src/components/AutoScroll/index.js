import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import IosArrowForward from '@meronex/icons/ios/IosArrowForward'
import IosArrowBack from '@meronex/icons/ios/IosArrowBack'
import { DivContainer } from './styles'

import { useTheme } from '../../contexts/ThemeContext'

export const AutoScroll = ({ children, categories, container }) => {
  const { width } = useWindowSize()
  const [categoriesElement, setCategoriesElement] = useState([])
  const [theme] = useTheme()
  useEffect(() => {
    const containerElement = document.getElementById(container)
      .addEventListener('scroll', handleScroll)

    return () => {
      removeEventListener(containerElement)
    }
  })

  useEffect(() => {
    const element = document.getElementById(categories)
    setCategoriesElement(element)
    handleScroll()
  }, [categoriesElement, width])

  const handleScroll = () => {
    const containerElement = document.getElementById(container)
    const categoriesElement = document.getElementById(categories)
    const botonRight = document.getElementsByClassName('right')[0]
    const botonLeft = document.getElementsByClassName('left')[0]
    if (botonLeft || botonRight) {
      if (theme?.rtl) {
        if ((containerElement.scrollLeft * -1) < 40) {
          botonRight.classList.add('hidden')
        } else {
          botonRight.classList.remove('hidden')
        }
        if ((containerElement.scrollLeft * -1) > categoriesElement?.scrollWidth - containerElement.offsetWidth - 10) {
          botonLeft.classList.add('hidden')
        } else {
          botonLeft.classList.remove('hidden')
        }
      } else {
        if (containerElement.scrollLeft < 40) {
          botonLeft.classList.add('hidden')
        } else {
          botonLeft.classList.remove('hidden')
        }
        if (containerElement.scrollLeft > categoriesElement?.scrollWidth - containerElement.offsetWidth - 10) {
          botonRight.classList.add('hidden')
        } else {
          botonRight.classList.remove('hidden')
        }
      }
    }
  }

  const scrolling = (left) => {
    const elementContainer = document.getElementById(container)
    if (left) {
      elementContainer.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
      })
    } else {
      elementContainer.scrollBy({
        top: 0,
        left: +200,
        behavior: 'smooth'
      })
    }
  }

  return (
    <DivContainer>
      {
        width < categoriesElement.offsetWidth + 50 ? <IosArrowBack className='left' onClick={() => scrolling('left')} /> : ''
      }
      {children}
      {
        width < categoriesElement.offsetWidth + 50 ? <IosArrowForward className='right' onClick={() => scrolling()} /> : ''
      }
    </DivContainer>
  )
}
