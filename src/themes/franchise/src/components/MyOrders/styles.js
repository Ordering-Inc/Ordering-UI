import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: hidden;
  min-height: auto;

  @media (min-width: 769px) {
    padding: 40px;
  }

  @media (min-width: 993px) {
    min-height: calc(100vh - 382px);
    box-sizing: border-box;
  }
`

export const Divider = styled.div`
  margin-top: 25px;
  background: #F8F9FA;
  height: 8px;
  width: 100%;
  width: calc(100% + 40px);
  margin-left: -20px;

  @media (min-width: 769px) {
    width: calc(100% + 80px);
    margin-left: -40px;
  }
`

export const OrderGroupFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

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
