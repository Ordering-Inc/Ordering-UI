import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  max-height: 100vh;
  position: relative;
  @media (min-width: 1200px) {
    max-height: calc(70vh - 20px);
  }
`

export const ImageWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  position: relative;
`

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;

  .mySwiper2 {
    height: 250px;
    width: 100%;

    .swiper-slide-active {
      border-radius: 0px;
      img {
        border-radius: 0px;
      }
    }

    @media (min-width: 576px) {
      height: 320px;
    }
  }

  .swiper {
    width: 100%;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ArrowButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(50% - 12px);
  > svg {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.backgroundPage};
  }
  &.button-prev {
    left: 30px;
  }
  &.button-next {
    right: 30px;
  }
  &.swiper-button-disabled {
    display: none;
  }
`

export const HeaderInfoWrapper = styled.div`
  padding: 28px 20px 16px 20px;
  h2 {
    margin-top: 0px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    margin: 0px;
    color: ${props => props.theme.colors.darkGray};
    white-space: pre-wrap;
  }
`

export const PriceAndDuration = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    &.dot {
      margin: 0px 5px;
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.colors.grayDividerColor};
`

export const ProfessionalInfoWrapper = styled.div`
  margin-top: 18px;
  padding: 0px 20px;
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin: 0px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.danger500};
  }
`

export const ScheduleWrapper = styled.div`
  padding: 0px 20px;
  margin-top: 35px;
  > div:last-child {
    padding: 0px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background: ${props => props.theme.colors.backgroundPage};
  padding: 11px 20px 30px 20px;
  border-top: ${props => props.theme.colors.gray200};
  bottom: 0px;
  z-index: 11;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  button {
    height: 44px;
    width: 100%;
    max-width: 300px;
    &.soldout {
      pointer-events: none;
      background-color: hsl(0, 0%, 72%);
    }
  }
`

export const ProfessionalSelectWrapper = styled.div`
  position: relative;
`

export const DropDownWrapper = styled.div`
  position: absolute;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  top: 100%;
  margin-top: 5px;
  border: 1px solid ${props => props.theme.colors.gray200};
  background-color: ${props => props.theme.colors.backgroundPage};
  padding: 18px 16px;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
`

export const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  justify-content: space-between;

  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: 7.6px;
  cursor: pointer;
  transition: all 0.3s linear;

  ${({ isDropDown }) => isDropDown && css`
    border: none;
    padding: 12px 0px;
    border-top: 1px solid ${props => props.theme.colors.gray200};
    border-radius: 0px;
    &:hover {
      background-color: ${props => props.theme.colors.grayDividerColor};
    }
  `}

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.gray200};
  `}
`

export const DropDownTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  svg {
    width: 42px;
    height: 42px;
  }
`

const ProfessionalPhotoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 42px;
  width: 42px;
  min-width: 42px;
  border-radius: 7.6px;
`
export const ProfessionalPhoto = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <ProfessionalPhotoStyled {...props} style={style}>
      {props.children}
    </ProfessionalPhotoStyled>
  )
}

export const NameWrapper = styled.div`
  margin-left: 25px;
  flex: 1;
  ${props => props.theme.rtl && css`
    margin-right: 25px;
    margin-left: 0px;
  `}
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
  }
`

export const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    &.status {
      color: ${props => props.theme.colors.danger500};
    }
  }

  ${({ available }) => available && css`
    span.status {
      color: ${props => props.theme.colors.success500};
    }
  `}
`
