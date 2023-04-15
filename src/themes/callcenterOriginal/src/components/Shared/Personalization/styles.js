import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 30px;
    width: 100%;
  }

  p {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }

  img {
    width: 300px;
  }
`

export const WrapperButton = styled.div`
  position: sticky;
  top: 100%;
  width: 100%;

  button {
    height: 44px;
  }
`
