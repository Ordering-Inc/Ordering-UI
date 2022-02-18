import styled from 'styled-components'

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  margin: 20px auto;

  h1 {
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: ${props => props.theme.colors?.headingColor};
  }

  @media (min-width: 840px) {
    h1 {
      font-size: 18px;
    }
  }
`

export const NotFoundImage = styled.div`
  max-width: 300px;
`

export const ButtonWrapper = styled.div`
  button {
    height: 44px;
  }
`
