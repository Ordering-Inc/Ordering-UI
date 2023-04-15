import styled, { css } from 'styled-components'

export const Container = styled.div``

export const ImageCropWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 8px;
  position: relative;

  > div {
    border-radius: 8px;
    overflow: hidden;
  }

  img {
    display: block;
    /* This rule is very important, please don't ignore this */
    max-width: 100%;
  }
`

export const ImageCropActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  flex-direction: column;
  
  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    font-size: 14px;
    white-space: nowrap;
    &.title {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-right: 0px;
        margin-left: 5px;
      `}
    }
    &.percent {
      margin-left: 5px;
      ${props => props.theme?.rtl && css`
        margin-right: 5px;
        margin-left: 0px;
      `}
    }
  }

  input[type='range'] {
    height: 8px;
    border: 0px;
    outline: none !important;
    flex: 1;
    border-radius: 10px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 10;
    position: relative;
  }

  input[type='range'],
  input[type='range']::-webkit-slider-runnable-track,
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type='range']::-webkit-slider-thumb {
    position: relative;
    height: 20px;
    width: 20px;
    background: #FFFFFF;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border: 5px solid ${props => props.theme.colors.primary};
  }

  @media (min-width: 576px) {
    width: auto;
    flex: 1;
  }
`

export const ActionContentWrapper = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin-left: 15px;
    font-size: 14px;
    ${props => props.theme.rtl && css`
      margin-right: 15px;
      margin-left: 0;
    `}

    svg {
      width: 16px;
      height: 16px;
      margin-left: 5px;
      ${props => props.theme.rtl && css`
        margin-right: 5px;
        margin-left: 0;
      `}
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: 20px;
    height: 44px;
  }
`
