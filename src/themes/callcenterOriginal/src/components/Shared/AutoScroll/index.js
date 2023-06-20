import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'
import { AutoscrollContainer } from './styles'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'
import { useTheme } from '../../../../../../contexts/ThemeContext'

export const AutoScroll = ({ children, modal, special, innerScroll, scrollId }) => {
  const { width } = useWindowSize()
  const [parentElement, setParentElement] = useState([])
  const [containerElement, setContainerElement] = useState([])
  const [theme] = useTheme()

  const autoScrollId = scrollId || 'autoscroll'
  const [parentWidth, setParentWidth] = useState(null)

  useLayoutEffect(() => {
    const element = document?.getElementById(`${autoScrollId}`)?.parentNode
    element && element.parentNode.addEventListener('scroll', handleScroll)
    const containerElement = element?.parentNode
    setParentWidth(element?.offsetWidth)
    setParentElement(element)
    setContainerElement(containerElement)

    return () => {
      if (containerElement?.length) {
        containerElement.removeEventListener('scroll', handleScroll)
      }
    }
  })

  useEffect(() => {
    handleScroll()
  })

  const handleScroll = () => {
    const autoScrollContainer = document?.getElementById(`${autoScrollId}`)
    const botonRight = autoScrollContainer?.querySelector('.right-autoscroll')
    const botonLeft = autoScrollContainer?.querySelector('.left-autoscroll')
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
        if (containerElement?.scrollLeft > parentElement?.scrollWidth - containerElement?.offsetWidth - 40) {
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

  useEffect(() => {
    if (!scrollId) return
    const element = document?.getElementById(`${autoScrollId}`)?.parentNode
    if (!element) return
    setParentWidth(element.width)
    setParentElement(element)
  }, [scrollId])

  return (
    <AutoscrollContainer modal={modal} id={`${autoScrollId}`}>
      {
        ((!special ? width < parentWidth + 50 : width < parentWidth) || (!special && innerScroll ? containerElement?.offsetWidth < parentWidth + 50 : containerElement?.offsetWidth < parentWidth)) ? <MdKeyboardArrowLeft className='left-autoscroll' onMouseDown={() => scrolling(true)} /> : ''
      }
      {children}
      {
        ((!special ? width < parentWidth + 50 : width < parentWidth) || (!special && innerScroll ? containerElement?.offsetWidth < parentWidth + 50 : containerElement?.offsetWidth < parentWidth)) ? <MdKeyboardArrowRight className='right-autoscroll' onMouseDown={() => scrolling()} /> : ''
      }
    </AutoscrollContainer>

  )
}
