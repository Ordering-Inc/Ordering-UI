import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
`
export const BackDropContainer = styled.div`
  background: rgba(0,0,0,0.3);
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: -1;
`
export const SearchContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundPage};
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
`
export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  
  @media (min-width: 768px) {
    width: 98%;
    margin: 0px auto;
    padding: 21px 0;
  }
`
export const SearchBarWrapper = styled.div`
  flex: 1;
  > div {
    ${props => props.theme?.rtl ? css`
      padding-right: 15px;
      border-left: 1px solid ${props => props.theme.colors.darkGray};
    ` : css`
      padding-left: 15px;
      border-right: 1px solid ${props => props.theme.colors.darkGray};
    `}
    width: 100%;
    justify-content: flex-start;
    box-sizing: border-box;

    input {
      width: 100%;
      border: none;
      background-color: transparent;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: ${props => props.theme.colors.darkGray};
      }
      &:-ms-input-placeholder {
        color: ${props => props.theme.colors.darkGray};
      }
    }

    > span {
      ${props => props.theme?.rtl ? css`
        left: 0px;
      ` : css`
        right: 0px;
      `}
    }
  }
  @media (min-width: 768px) {
    margin: 0 15px;
    > div {
      background-color: ${props => props.theme.colors.gray200};
      border-radius: 20px;
      border: 1px solid #DEE2E6;
    }
  }
  @media (min-width: 1024px) {
    margin: 0 70px;
  }
  @media (min-width: 1200px) {
    margin: 0 100px;
  }
  @media (min-width: 1500px) {
    margin: 0 130px;
  }
`
export const CancelButton = styled.div`
  padding: 0 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`
export const LogoHeader = styled.div`
  display: none;  
  @media (min-width: 768px) {
    cursor: pointer;
    display: flex;
  }
`
export const BusinessProductsListContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundPage};
  padding: 30px 0;
  max-height: calc(100vh - 88px);
  overflow: auto;
`
export const BusinessProductsListWrapper = styled.div`
  width: 95%;
  margin: 0px auto;
`
