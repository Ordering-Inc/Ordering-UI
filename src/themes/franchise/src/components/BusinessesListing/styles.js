import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`

export const BusinessListWrapper = styled.div`
  width: 100%;
  padding: 20px 15px;
  overflow: auto;
  box-sizing: border-box;

  @media (min-width: 850px) {
    width: 50%;
    height: 90vh;
    padding: 40px 25px 20px 70px;
    ${props => props.theme?.rtl && css`
      padding: 40px 70px 20px 25px;
    `}
  }
`

export const BusinessMapWrapper = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  
  @media (min-width: 850px) {
    width: 50%;
    height: 90vh;
  }

  > div {
    height: 100% !important;
    width: 100% !important;
  }
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const WrapperSearch = styled.div`
  margin-bottom: 43px;
  input {
    width: 100%!important;
  }

  ${({ isCustomLayout }) => isCustomLayout && css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%; 
    padding: 0 20px;

    svg {
      font-size: 26px;
      color: ${props => props.theme?.colors?.primary};
      margin-left: 10px;
      cursor: pointer;
    }
    
    @media(min-width: 681px){
      width: 75%;
      padding: 0;
    }

    @media(min-width: 1201px){
      width: 50%;
    }
  `}
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const PreviousOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 0px;
`

export const BusinessesTitle = styled.h1`
  font-size: 18px;
  margin: 0px 20px;
`

export const PreviousButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  button{
    width: 100%;
  }

  @media(min-width: 681px){
      button{
      width: 80%;
    }
  }
`
