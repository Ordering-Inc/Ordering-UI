import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  z-index: 1000;

  button {
    position: relative;
    width: 50%;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 578px) {
      width: 80%;
    }

    @media (max-width: 380px) {
      width: 90%;
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
`
