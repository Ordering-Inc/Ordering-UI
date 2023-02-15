import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 27px;

  > button {
    height: 44px;
    margin-top: 20px;
  }
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 17px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 16px;
    ` : css`
      margin-right: 16px;
    `}
  }
`
export const LevelItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 15px 0;

  span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 14px;
    ` : css`
      margin-left: 14px;
    `}
  }
`
