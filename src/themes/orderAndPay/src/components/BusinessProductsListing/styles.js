import styled, { css } from 'styled-components'
import { Button } from '../../styles/Buttons'
export const ProductsContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
  box-sizing: border-box;
`

export const WrapContent = styled.div`
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};
  margin-bottom: 50px;

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
  margin-top: 30px;
  display: flex;
  flex-direction: column;

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
  margin: 0;
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
  padding: 35px 30px;
  border: 1px solid #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
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

export const ModalIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`

export const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  img{
    margin: 0 5px;
    width: 46px;
    height: 46px;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
    box-shadow: 0px 1px 4px 0px #0000001A;
    border-radius: 7.6px;
  }
  h1{
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.darkTextColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 5px;
    width: 70%;
  }
`

export const OrderTypeWrapperButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  height: 35px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  max-width: 100px;
  h2{
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const LogoutButtonContainer = styled.div`
  position: relative;
  top: 2px;
`
