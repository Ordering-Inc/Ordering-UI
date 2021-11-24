import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  width: 100%;
`

export const WrapContent = styled.div`
  padding: 0 15px;
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 768px) {
    padding: 0px;
    width: 75%;
    overflow-x: hidden;
    padding: 0 20px 30px;
    box-sizing: border-box;
  }

  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .search-bar {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
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
  @media (min-width: 768px) {
    display: flex;
    width: 100vw;
    min-height: 60vh;
  }

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
export const BusinessProductsCategorieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1200px) {
    width: 20%;
  }
`
export const CartegoryTitle = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  font-weight: bold;
  padding: 10px 15px;
  @media (min-width: 768px) {
    margin-right: 14px;
    background-color: ${props => props.theme.colors.primaryDark};
    padding-left: 10%;
    ${props => props.theme?.rtl && css`
      padding-right: 10%;
      padding-left: unset;
    `}
  }
  @media (min-width: 1024px) {
    padding-left: 15%;
    ${props => props.theme?.rtl && css`
      padding-right: 15%;
      padding-left: unset;
    `}
  }
`
export const AgeConfirmContainer = styled.div`
  background-color: #fff;
  ${({ bgimage }) => bgimage && css`
    background-image: url(${props => props.bgimage}); 
  `}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  box-shadow: border-box;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    height: 40vw;
  }
`
export const UnderAge = styled.div`
  h2 {
    text-align: center;
    color: #000;
  }
`

export const UnderAgeButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100px;
    margin: 0 7px;
    font-size: 16px;
    font-weight: bold;
  }
`
export const BreackFastCheckModalContent = styled.div`
  padding: 20px;
`

export const AgreeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  button {
    text-transform: uppercase;
    padding: 3px;
    font-size: 14px;
    width: 100px;
  }
`
