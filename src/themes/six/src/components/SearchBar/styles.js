import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  input {
    width: 100%;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 0px;

    ${props => props.theme?.rtl ? css`
      padding-left: 60px;
    ` : css`
      padding-right: 60px;
    `}

    ${({ theme, disablePadding }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
      border-bottom: none;
        ${props => props.theme?.rtl ? css`
          padding-right: 70px;
        ` : css`
          padding-left: 70px;
        `}
   `}

    ${({ isCustomLayout, theme }) => !isCustomLayout && theme?.business_view?.components?.product_search?.components?.layout?.type !== 'floating' && css`
      justify-content: center;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out; 
    `}

    @media (min-width: 681px) {
      width: 100%;
      ${({ isCustomLayout, theme }) => !isCustomLayout && theme?.business_view?.components?.product_search?.components?.layout?.type !== 'floating' && css`
        width: 200px;
        &:focus {
          width: 50%;
        }
      `}
      ${({ theme, disablePadding }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
      ${disablePadding && css`
        padding-left: 0;
      `}
    `}
    }
  }
`

export const DeleteContent = styled.span`
  position: absolute;
  font-weight: 300;
  padding: 10px 0;
  color: #333;
  font-size: 14px;
  transform: translate(-30%, 0%);
  border-radius: 25%;
  max-height: 100%;
  ${({ theme, isHome }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
    left: ${isHome ? '40px' : '30px'};
  `}
  ${({ isClear, isHome }) => isClear && css`
    left: initial;
    right: 20px;
  `}
  ${props => props.theme?.rtl && css`
    transform: translate(30%, 0%);
  `}
  span{
    cursor: pointer;
  }
  svg {
    color: #ADB5BD;
    width: 24px;
    height: 24px;
    position: relative;
    bottom: 4px;
  }
  img{
    width: 20px;
    transform: translate(-25%, 0%);
    ${props => props.theme?.rtl && css`
      transform: translate(25%, 0%);
    `}
  }
`

export const SearchWrapper = styled(DeleteContent)``

export const SearchIcon = styled.div`
  background-image: url(${props => props.theme?.images?.general?.searchIcon});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 15px;
  background-color: ${props => props.theme?.colors?.backgroundPage};

`
