import styled, { css } from 'styled-components'

export const MySavedPlacesContainer = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;


  h1{
    font-weight: 600;
    font-size: 32px;
    text-align: left;
    ${props => props.theme?.rtl && css`
    text-align: right;
    `}
  }

  > div{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  button{
    width: 100%;
    align-self: center;
  }

  @media (min-width: 768px){
    width: 90%;
    margin-top: 40px;
    ul{
      width: 100%;
    }
    button {
      width: 50%;
      align-self: flex-end;
    }
  }
`

export const WrappNotAddresses = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px auto 10px;

  img {
    width: 200px;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
  h1 {
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`
