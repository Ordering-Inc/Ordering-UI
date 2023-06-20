import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
`
export const SearchProductsWrapper = styled.div`
  position: relative;
  margin-top: 11px;

  > input {
    width: 100%;
    height: 44px;
    ${props => props.theme?.rtl ? css`
      padding-left: 40px;
    ` : css`
      padding-right: 40px;
    `}
  }

  span.loading {
    position: absolute;
    top: 10px;
    ${props => props.theme?.rtl ? css`
      left: 10px;
    ` : css`
      right: 10px;
    `}

    @keyframes spinner-content {
      0% { transform: rotate(0) }
      100% { transform: rotate(360deg) }
    }

    svg {
      animation: spinner-content 1.85s linear infinite;
      color: ${props => props.theme.colors.headingColor};
    }
  }
`

export const OptionsToSelectContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-x: hidden;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.backgroundPage};
  padding: 9px 0;

  > p {
    font-size: 12px;
    margin: 0 16px;
  }
`
export const SelectOption = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 9px 16px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.secundary};
  }
  span {
    font-size: 14px;
    &.name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 180px;
    }
  }
`

export const WrapperImage = styled.div`
  position: relative;
  max-width: 38px;
  max-height: 38px;
  height: 38px;
  width: 38px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}

  svg {
    width: 100%;
    height: 100%;
    padding: 3px;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`
export const CartProductsConatiner = styled.div`
  margin-top: 25px;
`
export const CartProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 5px;

  > div {
    &:first-child {
      cursor: initial;
      &:hover {
        background-color: ${props => props.theme.colors.backgroundPage};
      }
    }
  }
`
export const ProductQuantityActionsContainer = styled.div`
  display: flex;
  align-items: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
    padding: 5px;
    width: 45px;
    text-align: center;
    border: none;
  }

  ${props => props.theme?.rtl ? css`
    margin-left: 16px;
  ` : css`
    margin-right: 16px;
  `}
`
export const ProductEditDeleteActions = styled.div`
  display: flex;
  align-items: center;

  button {
    > svg {
      width: 16px;
      height: 16px;
    }
  }
`
