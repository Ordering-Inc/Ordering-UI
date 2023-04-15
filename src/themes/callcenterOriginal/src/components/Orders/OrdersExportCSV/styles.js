import styled, { css } from 'styled-components'

export const ExportContainer = styled.div`
  position: relative;
`

export const PopoverContainer = styled.div`
  position: absolute;
  margin-top: 5px;
  padding: 5px 0;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  z-index: 110;

  ${props => props.theme?.rtl ? css`
    left: 14px;
  ` : css`
    right: 14px;
  `}
`

export const Item = styled.div`
  padding: 3px 20px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: #F2F2F2;
  }
`

export const ExportCSVResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors?.headingColor};
  }

  button {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 20px;
  }
`

export const ErrorMessage = styled.p`
  text-align: center;
  margin: 5px 0;
  color: ${props => props.theme.colors?.headingColor};
`
