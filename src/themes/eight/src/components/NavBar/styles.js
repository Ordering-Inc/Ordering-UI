import styled, { css } from 'styled-components'

export const NavBarContainer = styled.div`
  border: 1px solid #E9ECEF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 5%;
  }

  @media (min-width: 992px) {
    padding: 0 10%;
  }
`

export const BackButton = styled.button`
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  padding: 0px;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
  }

  span {
    font-size: 12px;
    ${props => props.theme?.rtl ? css`
      margin-right: 7px;
    ` : css`
      margin-left: 7px;
    `}
  }
`

export const NavBarTitle = styled.p`
  margin: 0px;
  text-align: center;
  font-size: 14px;
  padding: 18px 5px;
  color: ${props => props.theme.colors.grayDark};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: calc(100% - 160px);
  margin: auto;
  
  @media (min-width: 768px) {
    font-size: 16px;
    ${({ isSearchShow }) => isSearchShow && css`
      max-width: calc(100% - 500px);
    `}
  }
`
export const SearchBarWrapper = styled.div`
  position: absolute;
  ${props => props.theme?.rtl ? css`
    left: 12px;
  ` : css`
    right: 12px;
  `}

  input {
    border: 1px solid #EBEBEB;
  }

  @media (max-width: 767px) {
    width: calc(100% - 30px);
    ${props => props.theme?.rtl ? css`
      left: initial;
    ` : css`
      right: initial;
    `}
    > div {
      justify-content: flex-start;
      span {
        left: 20px;
        img {
          ${props => props.theme?.rtl ? css`
            padding-right: 20px;
          ` : css`
            padding-left: 20px;
          `}
        }
      }
      input {
        border: none !important;
        ${props => props.theme?.rtl ? css`
          padding-right: 60px;
        ` : css`
          padding-left: 60px;
        `}
      }
    }
  }

  @media (min-width: 992px) {
    input {
      width: 250px;
    }
  }
`
export const SearchBarIconWrapper = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  img {
    width: 20px;
  }

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
  }
`
