import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const PopoverBody = styled.div`
  z-index: 1001;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border: 1px solid ${props => props.theme.colors?.borderColor};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  border-radius: 7.6px;
  padding: 15px;
  max-width: 250px;
`

export const PopoverList = styled.div`
`

export const AllowItem = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors?.headingColor};
  padding: 7px;
  cursor: pointer;
  svg {
    font-size: 24px;
  }
  span {
    white-space: nowrap;
    font-size: 12px;
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
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  padding: 0px 7px;
`
