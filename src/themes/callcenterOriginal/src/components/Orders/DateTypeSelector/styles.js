import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }

  ${({ isDateOption }) => isDateOption && css`
    max-width: calc(100vw - 60px);
    overflow: auto;
    ${props => props.theme?.rtl ? css`
      > div:first-child {
        margin-left: 10px;
      }
    ` : css`
      > div:first-child {
        margin-right: 10px;
      }
    `}
  `}
`

export const PlaceholderTitle = styled(Option)`
  padding: 10px;
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;

  input {
    border-radius: 20px;
    width: 140px;
    outline: none;
    padding: 3px 10px;
    border: 1px solid #F2F2F2;
  }

  ${props => props.theme?.rtl ? css`
    span {
      margin-left: 10px;
    }
  ` : css`
    span {
      margin-right: 10px;
    }
  `}

  @media (min-width: 768px) {
    padding: 0;
  }
`
