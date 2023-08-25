import styled from 'styled-components'

export const PagesListContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px 10px 30px;
  color: ${({ theme }) => theme?.colors?.tertiary ?? '#FFF'} !important;

  > span * {
    font-family: ${({ theme }) => theme?.fonts?.special?.name} !important;
    color: ${({ theme }) => theme?.colors?.tertiary ?? '#FFF'} !important;
  }
  a {
    display: inline;
    text-decoration: none;
    color: #000
  }
`
