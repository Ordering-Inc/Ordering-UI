import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;  
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.primary};
  `}

  ${({ borderBottom }) => borderBottom && css`
    border-bottom: thin solid ${props => props.theme.colors.borderColor};
  `}

  ${({ isVerticalList }) => isVerticalList && css`
    flex-direction: column;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom: 2px solid ${props => props.theme.colors.borderColor};
    @media (min-width: 768px) {
      justify-content: flex-start;
      padding-right: 0;
      padding-left: 10%;
      ${props => props.theme?.rtl && css`
        padding-right: 10%;
        padding-left: 0;
      `}
      border-bottom: none;
    }
    @media (min-width: 1024px) {
      padding-right: 0;
      padding-left: 15%;
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0;
      `}
    }
  `}
`

export const Tab = styled.div`
  position: relative;
  padding: 10px;
  cursor: pointer;
  align-items: left;
  ${props => props.theme?.rtl && css`
    align-items: right;
 `}
  ${({ active }) => !active && css`
    color: #000000;
  `}
  &:first-child {
    padding-left: 0;
    ${props => props.theme?.rtl && css`
      padding-right: 0;
      padding-left: 10px;
    `}
  }

  ${({ borderBottom }) => borderBottom && css`
    ${({ active }) => active && css`
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    `}    
  `}

  ${({ isVerticalList }) => isVerticalList && css`
    border-bottom: 1px dashed;
    span {
      display: block;
      width: 95%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &:first-child {
      padding-left: 15px;
      ${props => props.theme?.rtl && css`
        padding-right: 15px;
        padding-left: 0;
      `}
    }
    &:last-child {
      border-bottom: none;
      @media (min-width: 768px) {
        border-bottom: 1px solid ${props => props.theme.colors.borderColor};
        ${({ active }) => active && css`
          border-bottom: 1px solid ${props => props.theme.colors.primary};
        `}
      }
    }
    svg {
      display: none;
    }
    @media (min-width: 768px) {
      border: 1px solid ${props => props.theme.colors.borderColor};
      border-top: none;
      border-bottom: 1px solid ${props => props.theme.colors.primary};
      height: 39px;
      box-sizing: border-box;
      padding: 0 15px;
      display: flex;
      align-items: center;
      svg {
        display: inline-flex;
        transform: scale(0.98);
        position: absolute;
        top: -1px;
        right: -12px;
        ${props => props.theme?.rtl && css`
          right: unset;
          left: -12px;
          transform: rotate(180deg);
        `}
      }
      ${({ active }) => active && css`
        border-right: none;
        ${props => props.theme?.rtl && css`
          border-right: 1px solid ${props => props.theme.colors.borderColor};
          border-left: none;
        `}
      `}
    }

    @media (min-width: 1440px) {
      height: 50px;
      span {
        font-size: 1.1rem;
      }
      svg {
        transform: scale(1.25);
        top: 4px;
        right: -12px;
      }
    }
  `}
`
