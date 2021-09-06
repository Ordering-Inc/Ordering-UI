import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 10px;

`

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35%;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
  }
  h2 {
    font-size: 14px;
    margin-block-end: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    margin-block-start: 0.1em;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    color: #ff9300;
    font-size: 0.8em;
    overflow:hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
  }

  button {
    border-radius: 50px;
    font-size: 10px;
    line-height: 19px;
    padding: 4px 8px;
    border: 1px solid ${props => props.theme.colors.primaryContrast};
    margin: 5px;

    &.reorder {
      background: ${props => props.theme.colors.primaryContrast};
      &:hover {
        background: ${props => props.theme.colors.primary};
      }
    }
  }
`

export const Card = styled.div`
  min-width: 300px;
  width: 300px;
  margin: 10px;
  display: inline-block;
  background: white;
  height: ${({ isBusinessesPage }) => isBusinessesPage && '300px'};
  max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '220px'};
  border-radius: 16px;
  text-align: left;
  cursor: ${({ isBusinessesPage }) => isBusinessesPage && 'pointer'};

  button.load-orders {
    padding: 10px 30px;
  }

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  ${props => (props.nobg || props.isBusinessesPage) && css`
    background: transparent;
  `}

  ${props => props.flex && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media (min-width: 480px){
    min-width: 430px;
    max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '250px'};;
    width: 430px;
  }

  @media(min-width: 993px){
    ${({ isBusinessesPage }) => isBusinessesPage && css`
      margin: 30px 20px;
      width: calc(33% - 40px);
    `}
  }

`
