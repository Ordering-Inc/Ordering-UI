import styled, { css } from 'styled-components'

export const NavBarContainer = styled.div`
  border: 1px solid #E9ECEF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0 1%;
  position: relative;

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
  max-width: calc(100% - 160px);
  margin: auto;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
