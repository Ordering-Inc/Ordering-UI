import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 20px 15px 0px 15px;

  > svg {
    font-size: 24px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  @media (min-width: 769px) {
    padding: 20px 40px 0px 40px;
  }
`

export const WrapContent = styled.div`
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 381px) {
    padding: 0px;
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
  flex-direction: column-reverse;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const BusinessCategoryProductWrapper = styled.div`
  width: 100%;

  /* Hide scrollbar for Chrome, Safari and Opera */
  .category-lists::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .category-lists {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`

export const BusinessCartContainer = styled.div`
  margin: 0;

  > div {
    display: none;
  }

  @media (min-width: 500px) {
    > div {
      display: block;
    }
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
  padding: 35px 30px;
  border: 1px solid #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  position: relative;

  ${({ isModal }) => isModal && css`
    padding: 35px 25px;
    box-shadow: none;
    border: none;
  `}

  @media (max-width: 576px) {
    .info {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    position: sticky;
    top: 0;
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
    border: 1px solid #F8F9FA;
    border-radius: 7.6px;
    height: 44px;
    font-size: 14px;
    padding-left: 25px;
    padding-right: 25px;
  }
`

export const Divider = styled.div`
  width: calc(100% + 30px);
  height: 8px;
  background-color: ${props => props.theme?.colors.grayDividerColor};
  margin-left: -15px;
  ${props => props.theme?.rtl && css`
    margin-right: -15px;
    margin-left: 0;
  `}

  @media (min-width: 769px) {
    width: calc(100% + 80px);
    margin-left: -40px;
    ${props => props.theme?.rtl && css`
      margin-right: -40px;
      margin-left: 0;
    `}
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
  }

  button {
    height: 44px;
    border-radius: 7.6px;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 18px;
`
