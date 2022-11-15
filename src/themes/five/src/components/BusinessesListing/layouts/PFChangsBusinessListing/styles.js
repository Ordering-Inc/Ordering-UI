import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${({ alignCenter }) => alignCenter ? 'center' : 'stretch'};
  
  .search-area{
    display: none;
  }
  @media (min-width: 768px){
    .search-area{
      display: block;
      position: absolute;
      right: 0;
      z-index: 100;
      margin-right: 10px;
      top: 0;
      margin-top: 10px;
    }
  }
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

export const SingleBusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(230, 230, 230);
  background: ${({ theme }) => theme.colors.secundaryContrast};
  margin: 0 0 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 220px;
  justify-content: space-between;
  ${({ isSelected, theme }) => isSelected && css`
    border: 1px solid ${theme?.colors?.gold};
  `}
  @media(min-width: 768px){
    align-items: flex-start;
    flex-direction: row;
    justify-content: stretch;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  color: #fff;
  padding-right: 10px;
  overflow: hidden;
  text-align: center;
  align-items: center;
  a{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
  p {
    margin: 0;
    overflow: hidden;
  }
  h2{
    margin: 0 0 10px 0;
    overflow: hidden;
    font-size: 18px;
    font-family: ${({ theme }) => theme?.fonts?.special?.name};
  }
  @media (min-width: 768px){
    width: 70%;
    text-align: start;
    align-items: flex-start;
  }
`

export const RightContainer = styled.div`
  button {
    height: 40px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 14px;
    padding: 0;
    height: 44px;
  }
  width: 100%;
  @media (min-width: 768px){
    width: initial;
    button{
      width: 70px;
      height: 50px;
    }
  }
  @media (min-width: 920px){
    width: 30%;
  }
`

export const CityContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  height: 70px;
  margin: 0;
  box-sizing: border-box;
  h3, svg {
    color: #fff;
  }
  h3{
    font-size: 16px;
  }
  ${({ isSelected }) => isSelected && css`
      
  `}
`

export const LocationSelect = styled.select`
  background-color: #fff;
  border: 1px solid rgb(230,230,230);
  color: #000;
`

export const LoadMoreButtonWrap = styled.div`
  position: sticky;
  bottom: 0;
  button {
    width: 100%;
  }
`

export const NotFoundSourceWrapper = styled.span`
  > div{
    margin: 0 auto;
  }
  h1{
    color: #fff;
  }
`

export const DeliveryTextWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  p {
    color: #fff;
  }
`

export const LoadMoreButtonCityWrap = styled.div`
  margin-top: 10px;
  button {
    width: 100%;
  }
`

export const BusinessAddress = styled.a`
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
