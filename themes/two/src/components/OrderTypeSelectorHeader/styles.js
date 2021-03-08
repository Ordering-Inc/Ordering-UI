import styled, { css } from 'styled-components'

export const Option = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.darkTextColor};
  padding: 15px  5px;
  ${({ selected }) => selected && css`
    border-bottom: 3px solid ${props => props.theme.colors.primary};
    font-weight: 500;
    ${({ toggle }) => toggle && css`
      border-bottom: none;
      background: ${props => props.theme.colors.darkTextColor};
      color: #fff;
    `}
    ${({ radioStyle }) => radioStyle && css`
      border-bottom: none;
    `}
  `}

  ${({ toggle }) => toggle && css`
    padding: 0px;
    width: 50%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${({ radioStyle }) => radioStyle && css`
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 0px;
    svg {
      font-size: 24px;
    }
  `}
`

export const OrderTypeWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  border-right: 1px solid ${props => props.theme.colors.secondary};
  ${({ toggle }) => toggle && css`
    border-right: none;
    background: ${props => props.theme.colors.secondary};
    height: 42px;
    width: 200px;
    border-radius: 25px;
    padding: 0px;
  `}
  ${({ radioStyle }) => radioStyle && css`
    border-right: none;
    flex-direction: column;
    row-gap: 20px;
    padding: 10px 0;
  `}
  @media (max-width: 576px) {
    ${({ isDeliveryAndPickup }) => isDeliveryAndPickup && css`
      display: none;
    `}
  }
`
