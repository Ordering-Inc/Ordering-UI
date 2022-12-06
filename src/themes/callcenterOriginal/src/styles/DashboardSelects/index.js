import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
  min-width: ${({ minWidth }) => minWidth || '100px'};
  color: #333;
  cursor: pointer;
  justify-content: space-between;

  ${({ disabled }) => disabled && css`
    cursor: no-drop;
    opacity: 0.6;
  `}

  ${({ showDisable }) => showDisable && css`
    display: none;
  `}

  ${({ optionBottomBorder }) => optionBottomBorder && css`
      border-bottom: 1px solid #D8D8D8;
  `}

  &:hover {
    background-color: ${props => darken(0.04, props.theme.colors.backgroundPage || '#FFF')};
  }

  ${props => props.selected && css`
    background-color: ${props => darken(0.1, props.theme.colors.backgroundPage || '#FFF')};

    &:hover {
      background-color: ${props => darken(0.15, props.theme.colors.backgroundPage || '#FFF')};
    }
  `}

  svg {
    vertical-align: text-top;
  }

  ${({ withIcons }) => withIcons && css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 3px;
        ${props => props.theme?.rtl && css`
          margin-left: 3px;
          margin-right: 0px;
       `}
      }
  `}

  ${({ color }) => color === 'primary' && css`
    color: #C3C3C3;
  `}
`

export const Options = styled.div`
  min-width: 100%;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  z-index: 10000;
  border-width: 1px;
  border-style: solid;
  border-color: #E9ECEF;
  border-radius: 7.6px;
  overflow: hidden;

  ${({ position }) => position?.toLowerCase() === 'left' && css`
    left: 0;
    margin-left: -1px;
    ${props => props.theme?.rtl && css`
        margin-right: -1px;
        margin-left: 0px;
        right: 0;
        left: initial;
    `}
  `}
  ${({ position }) => position?.toLowerCase() === 'right' && css`
    right: 0;
    margin-right: -1px;
    ${props => props.theme?.rtl && css`
        margin-left: -1px;
        margin-right: 0px;
        left: 0;
        right: initial;
    `}
  `}

  ${({ isAbsolute }) => isAbsolute && css`
    position: absolute;
    margin-top: 7px;
  `}
`

export const OptionsInner = styled.div`
  overflow: auto;
  margin: ${({ optionInnerMargin }) => optionInnerMargin};
  max-height: ${({ optionInnerMaxHeight }) => optionInnerMaxHeight};
  overscroll-behavior: contain;
`
export const Selected = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;

  p {
    margin: 0px;
  }

  @media (max-width: 380px) {
    padding-left: 9px;
    padding-right: 9px;
    font-size: 13px;
  }

  ${({ isDisabled }) => isDisabled && css`
    pointer-events: none;
  `}
`

export const Select = styled.div`
  display: inline-block;
  border-radius: 7.6px;
  line-height: 34px;
  border-width: 1px;
  border-style: solid;
  border-color: #DEE2E6;
  color: #344050;
  position: relative;

  ${props => props.open && css`
    background-color: ${darken(0.07, '#CCC')};
  `}

  ${({ type }) => type === 'primary' && css`
    background: ${props => props.theme.colors.btnPrimary};
    color: ${props => props.theme.colors.btnPrimaryContrast};
    border-color: ${props => props.theme.colors.btnPrimary};
    border-radius: 7.6px;
  `}

  ${({ isDisabled }) => isDisabled && css`
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.disabled} !important;
  `}
`

export const Chevron = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}
`

export const Header = styled.div`
  flex: 1;
  overflow: auto;
  white-space: nowrap;
  display: flex;
  align-items: center;
`

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-left: 5px;
  overflow: hidden;

  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0;
  `}

  img {
    width: 100%;
    height: 100%;
  }
`

export const MultiSelectOption = styled.div`
  position: relative;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    width: 20px;
    height: 20px;
    transform: translate(100%, -50%);
    top: 11px;
    right: 15px;
  }
`

export const FunctionalityContainer = styled.div`
  display: flex;
  align-items: center;
  svg{
    margin-left: 20px;
    ${props => props.disabled && css`
      opacity: 0.4;
      pointer-events: none;
    `}
  }
`
export const SearchBarWrapper = styled.div`
  padding: 5px 10px;
  width: 100%;
  > div {
    input {
      height: 42px;
    }
  }
`
export const MultiOption = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
  min-width: ${({ minWidth }) => minWidth || '100px'};
  color: #333;
  cursor: pointer;

  ${({ disabled }) => disabled && css`
    cursor: no-drop;
    opacity: 0.6;
  `}

  ${({ showDisable }) => showDisable && css`
    display: none;
  `}

  ${({ optionBottomBorder }) => optionBottomBorder && css`
      border-bottom: 1px solid #D8D8D8;
  `}

  &:hover {
    background-color: ${darken(0.03, '#fafafa')};
  }

  ${props => props.selected && css`
    background-color: ${darken(0.07, '#fafafa')};
  
    &:hover {
      background-color: ${darken(0.07, '#fafafa')};
    }
  `}

  svg {
    vertical-align: text-top;
  }

  ${({ withIcons }) => withIcons && css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 3px;
        ${props => props.theme?.rtl && css`
          margin-left: 3px;
          margin-right: 0px;
       `}
      }
  `}

  ${({ color }) => color === 'primary' && css`
    color: #C3C3C3;
  `}
`
