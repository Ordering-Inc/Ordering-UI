import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`
export const BackHeader = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    ${props => props.theme?.rtl && css`
      left: unset;
      right: 0;
    `}
  }
`
export const Logo = styled.div`
  margin: 0px 5px;
`

export const HeaderText = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin: 0 5px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;  
`

export const OrderReview = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin: 11px 0 0;
`

export const PreTime = styled.p`
  line-height: 19px;
  margin: 11px 0;
`

export const SubTitle = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #ADB5BD;
`
export const PickStore = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 7px;
  border-bottom: 1px solid #fff;
  margin-bottom:2.5vw;
  cursor: pointer;
`
export const DeliveryItems = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  
`
export const Item = styled.div`
  min-width: 57px;  
  height: 20px;
  padding: 4px 10px;
  background: #ADB5BD;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  cursor: pointer;

  ${props => props.theme?.rtl && css`
    margin-right: 0;
    margin-left: 10px;
  `}

  &:hover {
    background: ${props => darken(0.02, props.theme.colors.primary)};
  }

  &.active {
    background-color: ${props => props.theme.colors.primary};
  }
`
