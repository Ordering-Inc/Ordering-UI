import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;

  ${({ isLoading }) => isLoading && css`
      pointer-events: none;
  `}

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 360px) {
    padding: 20px 10px;
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
