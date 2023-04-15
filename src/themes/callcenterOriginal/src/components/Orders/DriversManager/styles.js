import styled, { css } from 'styled-components'

export const DriversContainer = styled.div`
  flex: 1;
  transition: all 0.5s;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100vh;
  overflow: auto;

  @media print {
    display: none;
  }
`

export const DriversHeader = styled.div`
  display: flex;
  flex-direction: column;

  > div:last-child {
    margin-top: 20px;
  }

  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div:last-child {
      margin-top: 0px;
    }
  }
`

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin: 0px;
    text-transform: capitalize;
  }

  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const DriversContent = styled.div`
`
