import styled, { css } from 'styled-components'
export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0;
`
export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const WrapperSearch = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 30px;
  input {
    border-bottom: 1px solid #ccc;
  }
  svg{
    ${({ theme }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
    position: absolute;
    right: 5px;
      transform: translateY(70%);
      cursor: pointer;
      `}
  }
  @media (min-width: 850px) {
    width: 100%;
    box-shadow: 0px -2px 1px 4px lightgrey;
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
export const BusinessContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  position: relative;
  z-index: 1;
  @media(min-width: 850px){
    flex-direction: row;
    height: 100vh;
  }
`
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  min-height: 70vh;
  overflow: auto;
  box-shadow: 0 -2px 4px 0 rgb(0 0 0 / 12%);
  @media(min-width: 850px){
    width: 40vw;
  }
`
export const MapWrapper = styled.div`
  position: relative;
  /* height: 100vh; */
`
export const BusinessFilter = styled.div`
  display: flex;  
  padding-left: 20px;
  ${props => props.theme?.rtl && css`
    padding-right: 20px;
  `}
`

export const AddressInput = styled.div`
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin: 20px;
  margin-bottom: 0;
  border-radius: 7.6px;
  cursor: pointer;
  p{
    margin: 0;
    margin-left: 35px
  }

  svg {
    position: absolute;
    width: 24px;
    height: 24px;
  }
`
