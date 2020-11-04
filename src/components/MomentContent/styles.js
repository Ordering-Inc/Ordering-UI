import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 20px 10px;

  ${({ isLoading }) => isLoading && css`
      pointer-events: none;
  `}

  @media (min-width: 425px) {
    padding: 20px;
  }
`

export const Layer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height || '100vh'};
`
