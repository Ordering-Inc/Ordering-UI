import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 35px;
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  margin: 0px 15px;
  color: ${props => props.theme.colors.danger500};
  font-weight: bold;
`

export const BusinessListWrapper = styled.div`
  width: 100%;
  position: relative;

  .swiper-businesses {
    padding: 5px 0px;
    .swiper-slide {
      height: auto;
      > div {
        width: 100% !important;
        margin: 0px !important;
        height: 100%;
        min-width: 100%;
      }
    }
  }
`

export const ArrowButtonWrapper = styled.div`
  position: absolute;
  transition: all 0.3s ease-out;

  &::after {
    display: none;
  }
  > svg {
    background: ${props => props.theme.colors?.gray200};
    display: inline-block;
    border-radius: 50%;
    width: 25px;
    min-width: 25px;
    height: 25px;
    align-self: center;
    color: ${props => props.theme.colors.secundaryContrast};
    opacity: 0.8;
  }
  &.swiper-button-next {
    right: 10px;
    ${props => props.theme.rtl && css`
      left: 10px;
      right: initial;
    `}
  }
  &.swiper-button-prev {
    left: 10px;
    ${props => props.theme.rtl && css`
      right: 10px;
      left: initial;
    `}
  }
  &.swiper-button-disabled {
    display: none;
  }
  &:hover {
    transform: scale(1.07);
  }
  ${({ isLoading }) => isLoading && css`
    svg {
      display: none;
    }
  `}
`

export const LoadMoreCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  button {
    height: 44px;
  }
`
