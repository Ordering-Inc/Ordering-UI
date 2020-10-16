import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { DivContainer } from './styles'

export const handleScroll = (container, categories) => {
  const contain = document.getElementById(container)
  const categoriesElement = document.getElementById(categories)
  const botonRight = document.getElementsByClassName('right')[0]
  const botonLeft = document.getElementsByClassName('left')[0]
  if (botonLeft || botonRight) {
    if (contain.scrollLeft < 60) {
      botonLeft.classList.add('hidden')
    } else {
      botonLeft.classList.remove('hidden')
    }
    if (contain.scrollLeft > categoriesElement?.scrollWidth - contain.offsetWidth - 30) {
      botonRight.classList.add('hidden')
    } else {
      botonRight.classList.remove('hidden')
    }
  }
}

export const AutoScroll = ({ children, categories, container, length }) => {
  const { width } = useWindowSize()
  const [categoriesElement, setCategoriesElement] = useState([])
  useEffect(() => {
    const element = document.getElementById(categories)
    setCategoriesElement(element)
    handleScroll(container, categoriesElement)
  }, [categoriesElement])

  const scrolling = (left) => {
    const element = document.getElementById(categories)
    if (left) {
      console.log(element.children[0].children)
      element.children[0].children[1].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    } else {
      element.children[0].children[length].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  return (
    <DivContainer>
      {
        width < categoriesElement.offsetWidth + 50 ? <BsArrowLeft className='left' onClick={() => scrolling('left')} /> : ''
      }
      {children}
      {
        width < categoriesElement.offsetWidth + 50 ? <BsArrowRight className='right' onClick={() => scrolling()} /> : ''
      }
    </DivContainer>
  )
}
