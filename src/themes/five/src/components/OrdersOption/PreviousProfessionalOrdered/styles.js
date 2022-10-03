import styled, { css } from 'styled-components'

export const ProductsList = styled.div`
  display: flex;
  box-sizing: border-box;

  #autoscroll {
    > div {
      width: 300px;
      max-width: 300px;
    }
  }

  @media(min-width: 480px){
    #autoscroll {
      > div {
        width: 350px;
        max-width: 350px;
      }
    }
  }
`

export const ProductsListContainer = styled.div`
    margin-top: 10px;
    display: flex;
    overflow: scroll hidden;
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ${({ isLoading }) => isLoading && css`
      ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
    `}
`
