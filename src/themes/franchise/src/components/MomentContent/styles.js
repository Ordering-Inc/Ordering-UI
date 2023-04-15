import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 0px 3px;

  ${({ isLoading }) => isLoading && css`
      pointer-events: none;
  `}
`

export const Layer = styled.div`
  ${({ nobg }) => !nobg && css`
    background-color: rgba(255, 255, 255, 0.7);
  `}
  position: absolute;
  top: 0;
  width: 100%;
  height: ${({ height }) => height || '100vh'};
  ${props => props.theme?.rtl ? css`
    right: 0;
  ` : css`
    left: 0;
  `}
`
