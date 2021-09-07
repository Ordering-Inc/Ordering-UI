import React, { useRef, useState, useEffect } from 'react'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  ScrollBox,
  ScrollBoxWrapper,
  ScrollBoxContainer,
  ArrowButton
} from './styles'

export const AutoScroll = ({ children }) => {
  const { width } = useWindowSize()

  const scrollWrapperRef = useRef()
  const scrollContainerRef = useRef()

  const [wrapperScrollLeft, setWrapperScrollLeft] = useState(null)
  const [wrapperWidth, setWrapperWidth] = useState(null)
  const [containerWidth, setContainerWidth] = useState(null)

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
    setWrapperScrollLeft(scrollWrapperRef.current.scrollLeft)
    setWrapperWidth(scrollWrapperRef?.current?.offsetWidth)
    setContainerWidth(scrollContainerRef?.current?.offsetWidth)
  }, [scrollWrapperRef, scrollContainerRef, width, children])

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
