import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`

export const ColorBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  min-width: 44px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.borderColor};

  ${props => props.theme.rtl && css`
    margin-left: 10px;
    margin-right: 0px;
  `}

  ${({ bgColor }) => bgColor && css`
    background-color: ${bgColor};
  `}
`

export const ColorPickerWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 999;
  margin-top: 5px;

  ${props => props.theme?.rtl && css`
    right: 0px;
    left: initial;
  `}
`
