import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  width: 0;

  @media (min-width: 1000px) {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    transition: 0.3s;
    overflow-x: hidden;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #E9ECEF;
    ` : css`
      border-left: 1px solid #E9ECEF;
    `}
  }
`

export const CloseButtonWrapper = styled.span`
  z-index: 100;
  position: absolute;
  top: 20px;
  ${props => props.theme?.rtl ? css`
    left: ${({ isExtendExtraOpen }) => isExtendExtraOpen ? '520px' : '20px'};
  ` : css`
    right: ${({ isExtendExtraOpen }) => isExtendExtraOpen ? '520px' : '20px'};
  `}
`
