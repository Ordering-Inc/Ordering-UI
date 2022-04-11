import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: hidden;
  min-height: auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  > h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 7px;
    margin-top: 0px;
    text-transform: capitalize;
  }

  @media (min-width: 769px) {
    padding: 40px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 993px) {
    min-height: calc(100vh - 382px);
  }
`

export const Divider = styled.div`
  margin-top: 25px;
  background: #F8F9FA;
  height: 8px;
  width: 100%;
`

export const OrderGroupFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15px;

  button {
    margin-top: 10px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin-right: 10px;
    ${props => props.theme.rtl && css`
      margin-right: 0;
      margin-left: 10px;
    `}
    > svg {
      margin-left: 5px;
      ${props => props.theme.rtl && css`
        margin-right: 5px;
        margin-left: 0;
      `}
    }
  }
`

export const NoOrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  position: absolute;
  box-sizing: border-box;
  height: calc(100% - 120px);
  width: 100%;

  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  button {
    height: 44px;
  }
`
