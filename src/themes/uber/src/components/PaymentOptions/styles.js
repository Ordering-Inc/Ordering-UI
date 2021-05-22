import styled, { css } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const PaymentMethodsList = styled.div`
`
export const PayCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-bottom: 1px solid #CCC;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  ${({ selected }) => selected && css`
    cursor: initial;
    border-bottom: none;
  `}


  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}

  ${props => props.isDisabled && css`
    pointer-events: none;
  `}

  svg {
    font-size: 30px;
  }

  svg path {
    fill: #000;
  }

  p {
    margin: 0px;
  }
`

export const PayCardSelected = styled.div`
  padding: 30px 0px 0px;
`

export const CardItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;

  .checks svg {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  }

  .brand svg {
    font-size: 26px;
  }

  > * {
    margin-right: 10px
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
`
