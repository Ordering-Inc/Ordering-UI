import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
`

export const WrapContent = styled.div`
  background: ${props => props.theme.colors.backgroundPage};
  margin: 0 auto;
  width: 91%;
  box-sizing: border-box;

  @media (min-width: 768px ){
    width: 85%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
`

export const WrapProductsCategroy = styled.div`
  @media (min-width: 768px) {
    min-width: 150px;
    max-width: 150px;
  }
`

export const WrapProducts = styled.div`
  @media (min-width: 768px) {
    width: calc(100% - 170px);
  }
`

export const ProductsNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 45px);
  margin: auto;

  h1 {
    font-size: 20px;
    opacity: 0.5;
    text-align: center;
  }

  @media (min-width: 411px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const ProductLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SkeletonItem = styled.div`
  width: 80%;
  margin: 30px auto;

  span {
    margin-bottom: 10px;
  }
`

export const WrappLayout = styled.div`
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    display: flex;
    flex-direction: column;
    width: 100%;

    .bp-list,
    .cart {
      width: 100%;
    }

    @media (min-width: 870px) {
      flex-direction: row;
      .bp-list {
        width: 55%;
      }
      .cart {
        width: calc(45% - 20px);
        margin-left: 20px;
      }
    }

    @media (min-width: 1024px) {
      .bp-list {
        width: 60%;
      }
      .cart {
        width: calc(40% - 20px);
      }
    }  

    @media (min-width: 1200px) {
      .bp-list {
        width: 70%;
      }
      .cart {
        width: calc(30% - 20px);
      }
    }  
  `}
`
