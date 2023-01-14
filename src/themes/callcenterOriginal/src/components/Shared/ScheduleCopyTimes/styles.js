import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  display: flex;
  ${props => props.theme?.rtl ? css`
    text-align: left;
    ` : css`
    text-align: right;
  `}
  cursor: pointer;
  svg {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 20px;
  }
  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.6;
  `}
`

export const PopoverBody = styled.div`
  position: absolute;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  padding: 15px 0px;
  border-radius: 10px;
  max-width: 250px;
  z-index: 1001;
  border: 1px solid #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 6px;

  ${props => props.theme?.rtl ? css`
    left: 0px;
  ` : css`
    right: 0px;
  `}

  > button {
    width: calc(100% - 20px);
    margin: 5px 10px 0 10px;
  }
`

export const Title = styled.div`
  color: ${props => props.theme.colors.headingColor};
  font-size: 14px;
  padding: 0 10px;
`

export const PopoverList = styled.div`
`

export const CopyItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors?.headingColor};
  }
  span {
    color: ${props => props.theme.colors?.lightGray};
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
      ` : css`
      margin-left: 10px;
    `}
  }

  ${({ isChecked }) => isChecked && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}

  &:hover {
    background-color: ${props => props.theme.colors.borderColor};
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    svg {
      opacity: 0.5;
      color: ${props => props.theme.colors?.primary};
    }
  `}
`
