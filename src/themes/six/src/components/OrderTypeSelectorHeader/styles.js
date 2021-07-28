import styled, { css } from 'styled-components'
export const Option = styled.div`
  display: flex;
  align-items: center;
  svg {
    min-width: 14px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }  
`
export const OrderTypeWrapper = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const SelectedOption = styled.p`  
  margin: 0;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 380px) {
      max-width: initial;
  }
`
export const ContentOption = styled(SelectedOption)`
  max-width: 80px;
`
export const OrderTypeBoxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 1200px) {
    max-width: 1230px;
  }
  @media (min-width: 1405px) {
    max-width: 1420px;
  }
`
export const OrderItem = styled.div`
  display:flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  cursor: pointer;

  @media (min-width: 576px) {
    width: 50%;
  }
  @media (min-width: 850px) {
    width: 20%;
    padding: 10px;
  }
`
export const OrderItemWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 1px 4px 10px rgb(0 0 0 / 12%);
  border-radius: 20px;
  padding: 35px 25px;
  @media (min-width: 850px) {
    padding: 25px 15px;
  }
  @media (min-width: 1420px) {
    padding: 35px 20px;
  }
`
export const OrderType = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  svg {
    min-width: 14px;
    font-size: 25px;
  }
  svg path{    
    fill: ${props => props.theme.colors.primary};
  }
`
export const ItemContent = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin: 0 15px;
  @media (min-width: 1024px) {
    font-size: 18px;   
    margin: 0 7px;
  }
  @media (min-width: 1450px) {
    font-size: 25px;    
  }
`
export const OrderDescription = styled.div`
  font-size: 12px;
  @media (min-width: 1405px) {
    font-size: 14px;
  }
`
