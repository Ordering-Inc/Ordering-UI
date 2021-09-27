import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  width: 100%;
  @media (min-width: 576px) {
    width: 95%;
    margin: 20px auto 0px;
  }
`

export const WrapContent = styled.div`
  padding: 15px;
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 768px) {
    padding: 5px;
  }

  @media (min-width: 1200px) {
    padding: 0;
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

export const WrappLayout = styled.div``

export const BusinessContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const BusinessCategoryProductWrapper = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    width: 70%;
  }
`

export const BusinessCartContainer = styled.div`
  margin: 0 25px 25px;

  @media (min-width: 768px) {
    margin: 0;
  }

  @media (min-width: 1200px) {
    width: calc(31% - 25px);
    margin-left: 25px;

    ${props => props.theme?.rtl && css`
      margin-right: 25px;
      margin-left: 0;
    `}
  }
`

export const BusinessCartContent = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  @media (min-width: 768px) {
    padding: 35px 30px;
  }
`

export const EmptyCart = styled.div`
  .empty-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      font-size: 45px;
      color: #B1BCCC;
      margin-top: 10px;
    }

    p {
      font-size: 14px;
      color: #B1BCCC;
      margin: 23px 0 0 0;
    }
  }
`

export const EmptyBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  span {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  button {
    color: #748194;
    background: #F8F9FA;
    border-radius: 7.6px;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 18px;
`
