import styled, { css } from 'styled-components'

export const BusinessListWrapper = styled.div`
  overflow: auto hidden;
  width: 100%;

  ${({ isLoading }) => isLoading ? css`
    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
  ` : css`
      ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
      }
  `}
`

export const BusinessList = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  ${({ noResults }) => noResults && css`
    justify-content: center;
  `}
  @media (min-width: 480px){
    flex-direction: row;
  }
  #searchlistorder {
    > div {
      width: calc(100vw - 40px);
      min-width: calc(100vw - 40px);

      @media (min-width: 681px) {
        width: calc(50vw - 40px);
        min-width: calc(50vw - 40px);
      }
      @media (min-width: 993px) {
        width: calc(33vw - 40px);
        min-width: calc(33vw - 40px);
      }
      @media (min-width: 1200px) {
        width: calc(25vw - 40px);
        min-width: calc(25vw - 40px);
      }
    }
  }
`
