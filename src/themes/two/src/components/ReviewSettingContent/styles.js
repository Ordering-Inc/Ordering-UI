import styled, { css } from 'styled-components'

export const Container = styled.div`
  min-width: 500px;

  @media (max-width: 992px) {
    min-width: 250px;

    > p {
      margin: 0px;
    }
  }
`
export const HeaderItem = styled.div`
  h1 {
    display: flex;
    align-items: center;
    column-gap: 5px;
    width: 100%;
    justify-content: center;
  }

  p {
    text-align: center;
  }

  @media (max-width: 992px) {
    h1 {
      margin: 10px 0;
      font-size: 24px;
    }
  }
`
export const WrapStep = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const Line = styled.div`
  height: 3px;
  background: ${props => props.theme.colors.primary};
  flex: 1;
  border-radius: 3px;
  margin-top: 10px;

  ${({ deActive }) => deActive && css`
    background: ${props => props.theme.colors.grayTextColor};
  `}
`
export const StepValue = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
  svg {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    font-size: 24px;
    ${({ setted }) => setted && css`
      transform: scale(2.5);
    `}

    &:hover {
      transform: scale(2.5);
    }
    ${({ deActive }) => deActive && css`
      color: ${props => props.theme.colors.grayTextColor};
      transform: scale(1);
    `}

  }
  span {
    color: ${props => props.theme.colors.grayTextColor};
  }
`
export const WrapActoinButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    padding-top: 5px;
    padding-bottom: 5px;
    &:first-child {
      width: 40%;
    }
    &:last-child {
      width: 55%;
    }
  }
`
