import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  button{
    width: 100%;
    height: 40px
    ${({ isLoading }) => isLoading && css`
      pointer-events: none;
    `}
  }
`
export const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translateY(75%);
`

export const PaymentSquareContainer = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
