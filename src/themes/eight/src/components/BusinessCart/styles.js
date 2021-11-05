import styled, { css } from 'styled-components'

export const WrapCart = styled.div`
  max-width: 800px;
  min-height: calc(100vh - 300px);

  ${({ isExistBottom }) => !isExistBottom && css`
    padding-bottom: 90px;
  `}

  @media (min-width: 681px) {
    padding: 0 20px;
    margin: 50px auto;
  }
`
