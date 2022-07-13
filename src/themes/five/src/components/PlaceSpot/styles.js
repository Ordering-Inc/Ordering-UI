import styled, { css } from 'styled-components'

export const PlaceSpotContainer = styled.div`
  min-height: 80px;
  position: relative;
  #select-input, #list {
    width: 100%;
    color: #333 !important;
    background-color: #F8F9FA;
    border-radius: 7.6px;
    border: 0px;
  }
  #item {
    background-color: #F8F9FA;
    font-size: 14px;
  }
  #item:hover {
    background-color: #ccc;
  }
  .title {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  img{
    ${({ isCheckout }) => isCheckout && css`
      width: 170px;
      height: 150px;
    `}
  }
  #not-found-source {
    h1{
      font-size: 16px;
    }
  }
`

export const PlaceGroupContainer = styled.div`
  margin-top: 20px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  button{
    width: 100%;
  }
`

export const WrapperInput = styled.div`
  input {
    width: 100%;
    box-sizing: border-box;
  }

  button {
    margin-top: 16px;
  }
`

export const WrapperOption = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperOptionList = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`
