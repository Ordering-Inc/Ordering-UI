import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: ${({ isIOS }) => isIOS ? '10px' : '0'};
  h1{
    font-size: 1.2em;
  }
  button {
    position: relative;
    width: 40%;
    padding: 10px;
    text-align: center;
    font-size: 18px;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 850px) {
      width: 80%;
    }

    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
  }
`

export const BtnValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 10px;
  right: 7px;
  height: 20px;
  width: auto;
  min-width: 20px;
  ${props => props.theme?.rtl && css`
    left: 7px;
    right: initial;
  `}
`
