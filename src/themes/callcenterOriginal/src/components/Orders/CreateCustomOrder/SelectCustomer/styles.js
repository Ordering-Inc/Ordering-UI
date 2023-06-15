import styled, { css } from 'styled-components'

export const SectionContainer = styled.div`
  margin-bottom: 50px;

  > p {
    font-size: 14px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 24px;
  }
`
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    height: 44px;
    white-space: nowrap;
  }
`
export const SearchBarWrapper = styled.div`
  position: relative;
  flex: 1;

  ${props => props.theme?.rtl ? css`
    margin-left: 13px;
  ` : css`
    margin-right: 13px;
  `}

  > input {
    width: 100%;
    height: 44px;
    ${props => props.theme?.rtl ? css`
      padding-left: 40px;
    ` : css`
      padding-right: 40px;
    `}
  }

  span.loading {
    position: absolute;
    top: 10px;
    ${props => props.theme?.rtl ? css`
      left: 10px;
    ` : css`
      right: 10px;
    `}

    @keyframes spinner-content {
      0% { transform: rotate(0) }
      100% { transform: rotate(360deg) }
    }

    svg {
      animation: spinner-content 1.85s linear infinite;
      color: ${props => props.theme.colors.headingColor};
    }
  }
`
export const OptionsToSelectContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-x: hidden;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.backgroundPage};
  padding: 9px 0;

  > p {
    font-size: 12px;
    margin: 0 16px;
  }
`
export const SelectOption = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 9px 16px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.secundary};
  }
  span {
    font-size: 14px;
    &.name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`

export const WrapperImage = styled.div`
  position: relative;
  max-width: 24px;
  max-height: 24px;
  height: 24px;
  width: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0 6px;

  svg {
    width: 100%;
    height: 100%;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`
export const SelectedUserWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  height: 44px;
  display: flex;
  align-items: center;
  flex: 1;

  ${props => props.theme?.rtl ? css`
    margin-left: 13px;
  ` : css`
    margin-right: 13px;
  `}
`
export const CustomerAddressWrapper = styled.div`
  margin-top: 21px;
  > div {
    display: flex;
    align-items: center;
    svg {
      color: ${props => props.theme.colors.secundaryLight};
      font-size: 14px;
    }
  
    span {
      flex: 1;
      font-size: 14px;
      line-height: 24px;
      ${props => props.theme?.rtl ? css`
        margin-right: 15px;
      ` : css`
        margin-left: 15px;
      `}
    }
  }

  a {
    ${props => props.theme?.rtl ? css`
      margin-left: 30px;
    ` : css`
      margin-left: 30px;
    `}
    font-size: 12px;
  }
`
export const SavedPlaces = styled.div`
  width: 100%;
  padding: 25px 20px;
  overflow: auto;

  > h2 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 25px;

    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }

  > p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 25px;
  }  
`
export const AddressListWrapper = styled.div`
  display: flex;
  height: calc(100% - 120px);
  > div:first-child {
    position: relative;
    display: flex;
    box-sizing: border-box;
    flex: 1;

    > button{
      width: auto;
      align-self: center;
      position: absolute;
      bottom: 0px;

      ${props => props.theme?.rtl ? css`
        right: 0px;
      ` : css`
        left: 0px;
      `}
    }

    > ul {
      margin-top: 0px;
      max-height: calc(100% - 70px);
      overflow: auto;
    }
  }


  @media (min-width: 768px){
    ul{
      width: 100%;
    }
    >div {
      > button {
        width: 65%;
      }
    }
  }
`
