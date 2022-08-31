import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const CartContainer = styled.div`
  width: 100%;
`

export const CartSticky = styled.div`
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    overflow-y: auto;
    max-height: 70vh;
    position: sticky;
    top: 20px;
  `}
  width: 100%;
`

export const CheckoutAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;

  p {
    margin: 0;
    font-weight: 600;
    font-size: 18px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  button {
    padding: 10px 30px;
    min-width: 150px;
    width: 50%;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
  }
`

export const Divider = styled.div`
  background: #F8F9FA;
  height: 8px;
  width: 100%;
  margin-left: 0;

  @media (min-width: 768px) {
    width: calc(100% + 60px);
    margin-left: -30px;
  }
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`

export const SavedContainer = styled.span`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme?.colors?.primaryContrast};
  background: ${props => lighten('0.2', props.theme?.colors?.primary)};
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const SpotSelect = styled.select`
  ${({ isCheckout }) => isCheckout ? css`
    background: ${props => props.theme?.colors.backgroundPage};
  ` : css`
    background: ${props => props.theme?.colors.grayDividerColor};
  `}
  border-radius: 7.6px;
  height: 25px;
  border: none;
  font-size: 12px;
  outline: none;
  margin: 0 5px 0 15px;
  padding: 0 3px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;

  ${props => props.theme.rtl && css`
    margin: 0 15px 0 5px;
  `}
`
export const NoValidProductMessage = styled.p`
  font-size: 14px;
`
