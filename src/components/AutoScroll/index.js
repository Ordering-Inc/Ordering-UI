import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { DivContainer } from './styles'

export const AutoScroll = ({ children, categories, container }) => {
  const { width } = useWindowSize()
  const [categoriesElement, setCategoriesElement] = useState([])

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
        width < categoriesElement.offsetWidth + 50 ? <IoIosArrowBack className='left' onClick={() => scrolling('left')} /> : ''
      }
      {children}
      {
        width < categoriesElement.offsetWidth + 50 ? <IoIosArrowForward className='right' onClick={() => scrolling()} /> : ''
      }
    </DivContainer>
  )
}
