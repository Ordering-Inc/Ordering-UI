import styled, { css } from 'styled-components'

export const FavoritesContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px 15px 15px;
  box-sizing: border-box;
  min-height: calc(100vh - 280px);

  @media (min-width: 769px) {
    width: 70%;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 30px;
  margin-top: 0;
`

export const TabsContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
`

export const Tab = styled.div`
  padding: 10px 0px;
  margin-right: 30px;
  cursor: pointer;

  ${props => props.theme.rtl && css`
    margin-right: 0px;
    margin-left: 30px;
  `}

  ${({ active }) => active && css`
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 1px solid;
    `}
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.darkGray};
  `}
`

export const ContentWrapper = styled.div`
  
`
