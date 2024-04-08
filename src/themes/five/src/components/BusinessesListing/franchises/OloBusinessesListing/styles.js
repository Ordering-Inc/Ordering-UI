import styled, { css } from 'styled-components'
import React from 'react'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const BusinessSearch = styled.div`
    display: flex;
    background-color: #f8f9fa;
    align-items: center;
    padding: 7px;
    border-radius: 7px;
    font-size: 11px;
    svg {
      font-size: 15px;
    }
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const HightestRatedWrapper = styled.div`
  padding: 50px 0 30px 0;
`

export const Divider = styled.div`
  background: rgb(230, 234, 233);
  height: 8px;
  width: 100%;
`

export const HeaderSearchMode = styled.div`
  position: absolute;
  width: 200px;
`

export const AddressFormWrapper = styled.div`
  @media (min-width: 450px) {
    margin-top: 20px;
  }
`

export const IconTypeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: ${({ activated, theme }) => activated ? theme?.colors?.white : '#F3F9FF'};
  border-radius: 44px;
`

export const TypesContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

export const AdditionalTypesContainer = styled.div`
  width: 60%;
  display: flex;
  margin-bottom: 20px;
  button {
    padding: 4px 10px;
    border-radius: 50px;
    font-size: 10px;
    line-height: 0;
    height: 25px;
    margin-right: 20px;
  }
  .activated {
    color: ${({ theme }) => theme?.colors?.darkTextColor}
  }
`

export const TypeButton = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  height: 75px;
  border-radius: 7.6px;
  padding: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  margin-right: 32px;
  cursor: pointer;
  box-sizing: border-box;
  background: ${({ activated, theme }) => activated ? theme?.colors?.primary : theme?.colors?.white};
  p{
    margin: 0;
    margin-left: 33px;
    ${({ activated, theme }) => activated && css`
      color: ${theme?.colors?.white};
    `}
  }
`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 20px;
`

export const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 20px;
`

export const BusinessListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 40px 20px 0px 20px;
  box-sizing: border-box;
`

export const AdditionalTypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
`

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;
  background: #FFFFFF;
  padding: 8px 16px;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  margin-top: 22px;
  width: 100%;
  height: 44px;
  ${({ withIcon }) => withIcon && css`
    box-sizing: border-box;

    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;

      ${props => props.theme?.rtl && css`
        left: 5px;
        right: initial;
     `}
    }

    @media (min-width: 576px) {
      padding: 10px 25px;
      margin-bottom: 27px;
    }
  `}

  p{
    color: ${props => props.theme.colors.darkTextColor};
    position: relative;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 18px;
    @media (min-width: 576px) {
      font-size: 1rem;
      line-height: initial;
    }
  }

  svg {
    color: #B1BCCC;
    font-size: 20px;
    ${props => props.theme?.rtl ? css`
      margin-left: 12px;
    ` : css`
      margin-right: 12px;
    `}

    @media (min-width: 576px) {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}
    }
  }
`

export const PaginationContainer = styled.div`
  align-self: flex-end;
  width: 100%;
  margin-bottom: 20px;
`

export const WrapperMap = styled.div`
  width: 50%;
  max-height: 2500px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
  .btn-choose-store {
    line-height: 30px;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 80px;
    height: 38px;
    font-size: 14px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};
  }

  .btn-address-map {
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
  .className {
    object-fit: none;
  }
`

export const CityContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.tertiary || '#fff'};;
  height: 70px;
  margin: 0;
  box-sizing: border-box;

  h3{
    font-size: 16px;
  }
  ${({ isSelected }) => isSelected && css`
      
  `}
`

export const LoadMoreButtonCityWrap = styled.div`
  margin-top: 10px;
  button {
    width: 100%;
  }
`

export const ViewLocations = styled.div`
  p {
    color: ${({ theme }) => theme?.colors?.primary};
    cursor: pointer;
  }
`

export const CitiesContainer = styled.div`
  border-radius: 7.6px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  > div {
    cursor: pointer;
  }
  margin-bottom: 20px;
`

export const Separator = styled.div`
  height: 1px;
  margin-left: 20px;
  margin-right: 40px;
  background: #E9ECEF;
  box-sizing: border-box;
`
