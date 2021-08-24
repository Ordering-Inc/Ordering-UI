import styled, { css } from 'styled-components'

export const StatusFloting = styled.div`
  position: fixed;
  bottom: -1px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;  
  padding: 12px 0 14px;
  color: #fff;
  background-color: ${props => props.theme.colors.primaryDarkBackground};
  box-sizing: border-box;
  z-index: 50;
`

export const BusinessPicker = styled.div`

`
export const PickerTitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  color: #cecece;
`

export const SelectStore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px solid #fff;
  min-width: 240px;
  width: 60vw;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 333px;
  } 
`

export const CartStates = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 1.5rem;
  }  
`

export const CartCount = styled.span`
  position: absolute;
  line-height: 16px;
  font-size: 16px;
  top: 12px;
`

export const NotifyTost = styled.div`
  position: absolute;
  top: -49px;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #495057;
  color: #fff;
  
`

export const NotifyContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: flex-start;
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: 93%;
  margin: 0 auto;
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    ${props => props.theme?.rtl && css`
      right: unset;
      left: 10px;
    `}
  }
`
export const CounterWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 10;
`

export const Counter = styled.span`
  position: relative;
  width: 50px;
  height: 65px;
  display: flex;
  box-sizing: border-box;
`
export const OutsideShape = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 100%;
  margin-bottom: 16px;
  right: 0;
  top: 0;
`
export const RotateShape = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  background-color: #fff;
  box-shadow: 0 0 3px 0 #000;
  opacity: 1;
`
export const Shape = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`

export const BaseShape = styled.div`
  border-radius: 50%;
  height: 40px !important;
  width: 40px;
  transform: rotate(45deg) translate(7px);
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.primary};
  ${props => props.theme?.rtl && css`
    transform: rotate(45deg) translate(0px, 7px);
  `}
  img {
    width: 100%;
    opacity: 1;
    transition: opacity .15s ease-in;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
`
