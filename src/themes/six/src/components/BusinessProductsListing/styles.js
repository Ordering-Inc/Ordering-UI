import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  width: 100%;
  padding-top: 1.5px;
`

export const WrapContent = styled.div`
  padding: 5px;
  display:  flex;

  ${({ isLoading }) => isLoading && css`
    display:  block;
  `}

  @media (min-width: 381px) {
    padding: 15px;
  }

  @media (min-width: 1024px) {
    max-width: 1200px;
    padding: 15px 35px;
    margin: 0 auto;
  }

  @media (min-width: 1405px) {
    max-width: 1420px;
  }

`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: none;
  .search-bar {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }

  #select-input {
    border: none;
    background-color: #fff !important;
    border-radius: 0;
    text-transform: uppercase;

    #list {
      border-radius: 0;
    }
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
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

export const WrapProductsCategroy = styled.div`
  
`

export const WrapBusinessList = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    &.right-list-panel {
      padding-left: 25px;
    }
  } 

  @media (min-width: 1405px) {
    &.right-list-panel {
      padding-left: 45px;
    }
  } 
  
`
export const ProductDetail = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;  
`
export const BackMenu = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 15px;
  right: 10px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;  
  svg {    
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    right: 25px;
    ${props => props.theme?.rtl && css`
      left: 25px;
      right: unset;
    `}

  }

  @media (min-width: 1024px) {
    right: unset;
    left: calc(40% - 45px);
    ${props => props.theme?.rtl && css`
      left: unset;
      right: calc(40% - 45px);
    `}
  }

  @media (min-width: 1200px) {
    right: unset;
    left: calc(40% - 50px);
    ${props => props.theme?.rtl && css`
      left: unset;
      right: calc(40% - 50px);
    `}
  }

  @media (min-width: 1440px) {
    right: unset;
    left: calc(40% - 60px);
    ${props => props.theme?.rtl && css`
      left: unset;
      right: calc(40% - 60px);
    `}
  }
`
