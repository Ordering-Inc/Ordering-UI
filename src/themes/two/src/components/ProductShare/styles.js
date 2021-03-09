import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  position: relative;

  @media (max-width: 576px) {
    width: 91%;
  }

  > a {
    cursor: pointer;
    font-size: 42px;
    position: absolute;
    left: 0px;
    top: -20px;
  }
`
export const WrapImage = styled.div`
  width: 150px;
  height: 150px;
  > img {
    width: 100%;
    height: 100%;
  }
`
export const WrapShareLink = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  > div {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    input {
      flex: 1;
    }
    input,
    button {
      padding: 10px 20px;
    }
  }

  p {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    > div {
      flex-direction: column;
      row-gap: 20px;
    }
  }
`
