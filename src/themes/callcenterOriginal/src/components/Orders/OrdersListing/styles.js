import styled, { css } from 'styled-components'

export const WrapperNoneOrders = styled.div`
  overflow: auto;

  `
export const InnerNoneOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  img {
    width: 250px;
  }

  p {
    font-size: 16px;
    margin: 0px 0 40px 0;
  }

  button {
    height: 44px;
  }

  ${({ small }) => small && css`
    img {
      width: 150px;
    }
  `}

  @media (min-width: 768px) {
    img {
      width: 305px;
    }
    ${({ small }) => small && css`
      img {
        width: 250px;
      }
    `}
  }
`

export const WrapperOrderListContent = styled.div`
  ${({ maxHeight }) => maxHeight && css`
    height: 100%;
  `}
`
