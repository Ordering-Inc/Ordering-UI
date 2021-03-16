import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;

  > p {
    color: ${props => props.theme.colors.grayTextColor};
    text-align: center;
  }

  button {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 18px;
  }

  @media (max-width: 576px) {
    width: 91%;
  }
`

export const Tagline = styled.div`
  p {
    margin: 0px;
    font-weight: 500;
    text-align: center;
    > span {
      font-weight: 600;
    }
  }
`
export const EditThisButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.colors.blueColor};
  background: transparent;
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;

  &:active {
    color: ${props => darken(0.07, props.theme.colors.blueColor)};
  }
`
export const TermsAndPrivacy = styled.div`
  color: ${props => props.theme.colors.grayTextColor};
  span {
    color: ${props => props.theme.colors.blueColor};
    cursor: pointer;
    &:active {
      color: ${props => darken(0.07, props.theme.colors.blueColor)};
    }
  }
`
export const Cancel = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.grayTextColor};
  font-size: 18px;
  &:active {
    color: ${props => darken(0.07, props.theme.colors.blueColor)};
  }
`
