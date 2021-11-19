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
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom: 2px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 25px;
    @media (min-width: 768px) {
      justify-content: flex-start;
      padding-right: 0;
      border-bottom: none;
    }
    @media (min-width: 1024px) {
      padding-left: 10%;
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
    padding: 0px;
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

    &.active{
      .accordion {
        color: ${props => props.theme.colors.primary};
        font-weight: 600;
      }

      .accordion-content {
        max-height: fit-content;
      }
    }

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      &.active {
        .accordion {
          border-right: none;
          border-left: 5px solid red;
        }
        svg {
          display: inline-block;
          position: absolute;
          top: -1px;
          right: -12px;
        }
      }
    }
  `}
`
