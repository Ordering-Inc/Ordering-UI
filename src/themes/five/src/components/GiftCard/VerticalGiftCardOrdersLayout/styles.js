import styled from 'styled-components'
import { darken } from 'polished'

export const ProductsListContainer = styled.div`
  margin-top: 10px;
`
export const SingleGiftCardWrapper = styled.div`
  border-bottom: 1px solid #E9ECEF;
  padding: 20px 0;
`
export const WrappButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 20px auto;

  button {
    padding: 10px 0px;
    width: 100%;
  }

  button:hover{
    color: ${props => darken(0.07, props.theme.colors.primary)};
  }

  @media (min-width: 768px) {
    button {
      width: 60%;
    }
  }
`
