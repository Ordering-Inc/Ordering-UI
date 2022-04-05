import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessListingSearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  h3{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 20px;
  }
`

export const FiltersContainer = styled.div`
  
  flex-direction: column;
  @media (min-width: 993px){
    flex-direction: row;
    display: flex;
    width: 100%;
  }
`

export const Filters = styled.div`
  width: 100%;
  max-width: 100%;
  @media (min-width: 993px){
    width: 25%;
    max-width: 25%;
    margin-right: 20px;
  }
`

export const FiltersResultContainer = styled.div`
  width: 100%;
  max-width: 100%;
  @media (min-width: 993px){
    width: 75%;
    max-width: 75%;
  }
`

export const SortContainer = styled.div`

`

export const MaxFilterContainer = styled.div`

`

export const TagsContainer = styled.div`

`

export const ProgressContentWrapper = styled.div`
  width: 100%;
  height: 12px;
  background: #F8F9FA;
`

export const ProgressBar = styled.div`
  height: 4px;
  border-radius: 50px;
  background: #344050;
`

export const MaxItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BusinessList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  ${({ noResults }) => noResults && css`
    justify-content: center;
  `}
  @media (min-width: 480px){
    flex-direction: row;
  }
  #searchlist {
    > div {
      width: calc(100vw - 40px);
      min-width: calc(100vw - 40px);

      @media (min-width: 681px) {
        width: calc(50vw - 40px);
        min-width: calc(50vw - 40px);
      }
      @media (min-width: 993px) {
        width: calc(33vw - 40px);
        min-width: calc(33vw - 40px);
      }
      @media (min-width: 1200px) {
        width: calc(25vw - 40px);
        min-width: calc(25vw - 40px);
      }
    }
  }
`

export const MaxItem = styled.p`
  cursor: pointer;
  margin-top: 0;
  font-size: 14px;
  font-weight: ${({ active }) => active ? '600' : '400'};
`

export const SortItem = styled.p`
  cursor: pointer;
  font-size: 14px;
  font-weight: ${({ active }) => active ? '600' : '400'};
`

export const ProductsList = styled.div`
  margin-top: 10px;
`

export const BusinessInfo = styled.div`
  display: flex;
  button {
    height: 25px;
    font-size: 10px;
    white-space: nowrap;
    line-height: 0;
    max-width: 80px;
  }
  @media (min-width: 380px){
    button{
      max-width: initial;
    }
  }
  @media (min-width: 480px){
    button {
      line-height: 30px;
      height: 44px;
      overflow: initial;
      font-size: 16px;
    }
  }
`

export const Metadata = styled.div`
  margin-top: 5px;
  display: flex;
  font-weight: 300;
  font-size: 10px;
  color: #909BA9;
  flex-wrap: wrap;
  ${({ isSkeleton }) => isSkeleton && css`
    display: flex;
    justify-content: space-between;
  `}
  p {
    color: #909BA9;
    svg {
      font-size: 7px;
      min-width: 6px;
      margin: 0 3px;
    }

    span {
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

  @media (min-width: 481px) {
    font-size: 14px;
  }
`

export const BusinessInfoItem = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  margin-left: 10px;
  div {
    display: flex;
    p {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
    `}
      text-transform: capitalize;
      display: flex;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p.bold {
      font-weight: bold;
    }
  }
  @media (min-width: 480px) {
    width: 100%;
  }
`

export const SingleBusinessSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`

export const BusinessProductsListContainer = styled.div`
  display: flex;
  box-sizing: border-box;

  .product-card {
    width: 270px;
    max-width: 270px;
  }

  @media(min-width: 480px){
    .product-card {
      width: 400px;
      max-width: 400px;
    }
  }
`

export const BusinessListWrapper = styled.div`
  overflow: scroll hidden;
  width: 100%;
`

export const BusinessProductsListWrapper = styled(BusinessListWrapper)``

export const BusinessControllerSkeleton = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  > div {
    flex: 1;
  }
  @media (min-width: 681px){
    flex-direction: row;
  }
`

export const NotFoundWrapper = styled.div`
  padding-top: 50px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 48px;
  border-radius: 7.6px;

  ${({ isSkeleton }) => isSkeleton && css`
    span {
      min-width: 45px;
      min-height: 45px;
      height: 45px;
      width: 45px;
      min-height: 45px;
    }
      @media (min-width: 681px){
        span {
          min-width: 75px;
          min-height: 75px;
          height: 75px;
          width: 75px;
          min-height: 75px;
      }
    }
  `}

  @media (min-width: 681px){
    min-width: 75px;
    min-height: 75px;
    height: 75px;
    width: 75px;
    min-height: 75px;
  }

`

export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }

  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessName = styled.h6`
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${props => props.theme.colors.darkTextColor};
  @media (min-width: 681px){
    font-size: 16px;
  }
`
