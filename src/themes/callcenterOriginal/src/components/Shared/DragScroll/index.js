import React, { useRef, useState, useEffect } from 'react'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

import {
  ScrollBox,
  ScrollBoxWrapper,
  ScrollBoxContainer,
  ArrowButton
} from './styles'

export const DragScroll = ({ children }) => {
  const { width } = useWindowSize()

  const scrollWrapperRef = useRef()
  const scrollContainerRef = useRef()
  const scrollWrapperCurrent = scrollWrapperRef.current
  const [clickStartX, setClickStartX] = useState()
  const [scrollStartX, setScrollStartX] = useState()

  const [wrapperScrollLeft, setWrapperScrollLeft] = useState(null)
  const [wrapperWidth, setWrapperWidth] = useState(null)
  const [containerWidth, setContainerWidth] = useState(null)

  useEffect(() => {
    if (scrollWrapperRef.current) {
      const handleDragStart = (e) => {
        setClickStartX(e.screenX)
        setScrollStartX(scrollWrapperRef.current.scrollLeft)
      }
      const handleDragMove = (e) => {
        if (clickStartX !== undefined && scrollStartX !== undefined) {
          const touchDelta = clickStartX - e.screenX
          scrollWrapperRef.current.scrollLeft = scrollStartX + touchDelta
          setWrapperScrollLeft(scrollWrapperRef.current.scrollLeft)
        }
      }
      const handleDragEnd = () => {
        if (clickStartX !== undefined) {
          setClickStartX(undefined)
          setScrollStartX(undefined)
        }
      }

      if (scrollWrapperRef.current.ontouchstart === undefined) {
        scrollWrapperRef.current.onmousedown = handleDragStart
        scrollWrapperRef.current.onmousemove = handleDragMove
        scrollWrapperRef.current.onmouseup = handleDragEnd
        scrollWrapperRef.current.onmouseleave = handleDragEnd
      }
    }
  }, [scrollWrapperCurrent, clickStartX, scrollStartX])

  const handleScrolling = (left) => {
    if (left) {
      const left = (((-scrollContainerRef.current.offsetWidth / 10) > -200) ? -200 : -scrollContainerRef.current.offsetWidth / 10)
      scrollWrapperRef.current.scrollBy({
        top: 0,
        left: left,
        behavior: 'smooth'
      })
      setWrapperScrollLeft(scrollWrapperRef.current.scrollLeft + left)
    } else {
      const left = (((+scrollContainerRef.current.offsetWidth / 10) < 200) ? 200 : +scrollContainerRef.current.offsetWidth / 10)
      scrollWrapperRef.current.scrollBy({
        top: 0,
        left: left,
        behavior: 'smooth'
      })
      setWrapperScrollLeft(scrollWrapperRef.current.scrollLeft + left)
    }
  }

  useEffect(() => {
    setWrapperScrollLeft(scrollWrapperRef?.current?.scrollLeft)
    setWrapperWidth(scrollWrapperRef?.current?.offsetWidth)
    setContainerWidth(scrollContainerRef?.current?.offsetWidth)
  }, [scrollWrapperRef, scrollContainerRef, width, children])

  useEffect(() => {
    setTimeout(() => {
      setWrapperScrollLeft(scrollWrapperRef.current?.scrollLeft)
      setWrapperWidth(scrollWrapperRef?.current?.offsetWidth)
      setContainerWidth(scrollContainerRef?.current?.offsetWidth)
    }, 300)
  }, [])

  return (
    <ScrollBox className='scroll-box'>
      <ScrollBoxWrapper className='scroll-box__wrapper' ref={scrollWrapperRef}>
        {wrapperScrollLeft > 10 && (
          <ArrowButton
            onMouseDown={() => handleScrolling(true)}
            className='left-autoscroll'
          >
            <MdKeyboardArrowLeft />
          </ArrowButton>
        )}
        <ScrollBoxContainer className='scroll-box__container' role='list' ref={scrollContainerRef}>
          {children}
        </ScrollBoxContainer>
        {wrapperScrollLeft + wrapperWidth + 10 < containerWidth && (
          <ArrowButton
            isRight
            onMouseDown={() => handleScrolling()}
            className='right-autoscroll'
          >
            <MdKeyboardArrowRight />
          </ArrowButton>
        )}
      </ScrollBoxWrapper>
    </ScrollBox>
  )
}
