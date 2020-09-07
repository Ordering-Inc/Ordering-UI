import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 500px;
  background-color: #f8f8f8;
  display: flex;
  position: relative;
`

export const Triangle = styled.div`
  position: absolute;
  width: 60%;
  max-width: 1000px;
  height: 100%;
  background: white;
  border: 250px solid #D81212;
  border-right: 25vh solid #f8f8f8;
  box-sizing: border-box;
  padding: 0;

  /*&::after {
    content: "";
    height: 100%;
    width: 0;
    /* border: 10px solid #333; */
    /* border-top: 50% solid transparent;
    border-bottom: 50% solid transparent; 
     border-right:25vh solid blue; 
  }*/

`

export const FormSide = styled.div`
  width: 40%;
`

export const HeroSide = styled.div`
  width: 60%;
  text-align: center;
  color: white;
  margin: auto;
  z-index: 1
  /* font: normal normal bold 106px/148px Tajawal; */
`
