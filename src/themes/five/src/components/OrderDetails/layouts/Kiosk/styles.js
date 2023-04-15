import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`

export const WrapperContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  min-height: auto;
  position: relative;

  @media (min-width: 993px) {
    min-height: calc(100vh - 337px);
    box-sizing: border-box;
  }
`

export const HeaderInfo = styled.div`
  width: 100%;
  text-align: center;

  h1, p {
    margin: 0;
    color: ${props => props.theme.colors.darkTextColor};
  }

  h1 {
    margin-bottom: 22px;
    font-size: 32px;
  }

  p.behalf {
    font-size: 18px;
  }
`

export const OrderBusiness = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 7.6px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px 0px #0000001F;
`

export const BusinessWrapper = styled.div`
  display: flex;
  width: ${props => props.w ?? '100%'};
  display: flex;
  align-items: center;
  ${props => props.borderBottom && css`
    padding-bottom: 15px;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  `}
  ${props => props.borderTop && css`
    margin-top: 15px;
    border-top: 1px solid ${props => props.theme.colors.lightGray};
  `}
  img {
    width: 100px;
    height: 100px;
    border-radius: 7.6px;
    margin-right: 40px;
  }
`

export const BusinessInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-right: 15px;
  h1,
  p {
    margin: 0;
    color: ${props => props.theme.colors.darkTextColor};
    overflow-wrap: break-word;
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
    margin: 0px 0px 5px 0px;
  }
  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
`

export const OrderInfo = styled.div`
  width: 100%;
  margin: 0px 0px 35px;
  position: relative;
  h1, p {
    margin: 0px;
    color: ${props => props.theme.colors.darkTextColor};
  }
  h1 {
    margin-bottom: 5px;
    font-weight: 600;
    /* font-size: 32px; */
  }
  p {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .date {
    margin-bottom: 6px;
  }

  .types {
    margin-bottom: 6px;
    font-size: 16px;
  }

  .order-status {
    font-weight: 600;
    font-size: 16px;
  }
`

const StatusBarStyled = styled.div`
  height: 12px;
  margin: 18px 0px 8px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%);
  `}
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled {...props}>
      {props.children}
    </StatusBarStyled>
  )
}

export const OrderCustomer = styled(BusinessInfo)`
  display: flex;
  flex-direction: column;
  border-radius: 7.6px;
  padding: 20px;
  box-shadow: 0px 4px 10px 0px #0000001F;
  margin-bottom: 30px;
`

export const PhotoBlock = styled.img`
  border-radius: 7.6px;
  width: 100px;
  height: 100px;
  margin-right: 40px;
`

export const OrderDriver = styled(OrderCustomer)``

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 48px;
      height: 48px;
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }
`

export const OrderProducts = styled(OrderCustomer)`
  flex-direction: column;
`

export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
`

export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const WrapperRightContainer = styled(WrapperLeftContainer)``

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  button {
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: space-around;
    min-width: 200px;
    max-height: 53px;
  }
`

export const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0px 5px 0px;
  }
`

export const HeaderTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h1{
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`

export const WrapperActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  button.close {
    width: 100%;
    padding: 5px;
  }
`

export const WrapperActionsInput = styled.div`
  display: flex;
  background-color: #FFF;
  /* margin-bottom: 30px; */
  justify-content: flex-start;

  button {
    margin-left: 5px;
    width: 75px;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0px;
    `}
    &:disabled {
      opacity: 0.5;
    }
  }

  input {
    width: calc(100% - 80px);
    border-radius: 7.6px;
  }
`

export const WrapperActionsInputText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 10px;

  p {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;

    &.txt {
      margin-left: 10px;
    }
  }
`

export const SentReceipt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ValidationText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-top: 5px;
  color: ${props => props.theme.colors.danger500};
`
