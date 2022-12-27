import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }
  svg {
    margin: 0 10px;
  }
`
export const ActionWrapper = styled.div`
  display: flex;
  > button {
    height: 44px;
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}
    }
    &.light {
      border: 1px solid ${props => props.theme.colors.primaryContrast};
      background: ${props => props.theme.colors.primaryContrast};
      margin: 0 20px;
      &:hover {
        background: ${props => props.theme.colors.primary};
      }
    }
  }
`
