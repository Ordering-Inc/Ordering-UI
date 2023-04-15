import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const ItemListing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 0;
`

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;

  .search-bar {
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    input {
      width: 100%;
      background-size: 20px 18px;
    }
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }
`
