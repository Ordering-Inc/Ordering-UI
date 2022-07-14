import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 35px;
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  margin: 0px 15px;
  color: ${props => props.theme.colors.danger500};
  font-weight: bold;
`

export const FavoriteListWrapper = styled.div`
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

export const FavoriteListing = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  #favorite {
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
  ${({ isOrder }) => isOrder && css`
    #favorite {
      > div {
        @media (min-width: 681px) {
          min-width: 400px;
        }
      }
    }
  `}

  ${({ isProduct }) => isProduct && css`
    #favorite {
      > div {
        cursor: default;
      }
    }
  `}
`

export const ReadMoreCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    height: 44px;
  }
`
