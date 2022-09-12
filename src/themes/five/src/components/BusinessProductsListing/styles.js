import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  width: 95%;
  margin: 20px auto 0px;
  overflow-x: hidden;
  > svg {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 5px;
  }
  ${({ pfchangs, theme }) => pfchangs && css`
    width: 100%;
    background: ${theme.colors.backgroundPage};
    margin: 0px;
    padding: 0 20px;
    box-sizing: border-box;
  `}
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
export const MobileCartViewWrapper = styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);

  span {
    font-weight: 600;
    font-size: 16px;

    @media (min-width: 1200px) {
      font-size: 18px;
      padding-left: 20px;
    }
  }

  button {
    height: 44px;
    border-radius: 7.6px;
  }
`

export const BusinessCartContent = styled.div`
  background: white;
  padding: 30px;
  position: relative;
  margin-bottom: 30px;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  overflow: auto;

  .product.accordion {
    margin: 0;
  }

  /* .accordion.active {
    padding-bottom: 10px;
  } */

  ${({ isModal }) => !isModal && css`
    border: 1px solid #E9ECEF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    border-radius: 7.6px;
  `}

  @media (min-width: 1200px) {
    position: sticky;
    top: 0;
  }

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
export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 18px;
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
    border: 1px solid #F8F9FA;
    border-radius: 7.6px;
    height: 44px;
    font-size: 14px;
    padding-left: 25px;
    padding-right: 25px;
  }
`

export const BottomToast = styled.div`
  position: fixed;
  bottom: 0;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme?.colors?.gold};
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  z-index: 10000;
  p{
    flex: 1;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 100%;
    background: #AE9056;
    cursor: pointer;
    svg {
      color: #fff;
    }
  }
`
