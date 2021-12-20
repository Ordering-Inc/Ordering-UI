import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: hidden;
  min-height: auto;
  width: 100%;
  box-sizing: border-box;

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
