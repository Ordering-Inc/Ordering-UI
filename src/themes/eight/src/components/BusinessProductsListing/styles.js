import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  min-height: calc(100vh - 300px);

  @media (min-width: 768px) {
    margin: 30px auto 0px;
    width: 80%;
    margin: 50px auto 0px;
  }
`

export const WrapContent = styled.div`
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 381px) {
    padding: 15px;
  }

  @media (min-width: 681px) {
    padding: 5px;
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

export const ProductDetailsHeader = styled.div`
  border: 1px solid #E9ECEF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 0 5%;
  min-height: 62px;
  p {
    margin: 0px 30px;
    text-align: center;
    font-size: 16px;
    padding: 18px;
    color: ${props => props.theme.colors.grayDark};
  }

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 20px;

    ${props => props.theme?.rtl ? css`
      left: 5%;
    ` : css`
      right: 5%;
    `}
  }

  @media (min-width: 992px) {
    padding: 0 10%;
    svg {
      ${props => props.theme?.rtl ? css`
        left: 10%;
      ` : css`
        right: 10%;
      `}
    }
  }

  @media (min-width: 1200px) {
    padding: 0 20%;
    svg {
      ${props => props.theme?.rtl ? css`
        left: 20%;
      ` : css`
        right: 20%;
      `}
    }
  }
`

export const WrapperNotFound = styled.div`
  height: 500px;
  > div{
    height: 100%;
  }
`
