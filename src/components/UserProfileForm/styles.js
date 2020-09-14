import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media (min-width: 480px) {
    height: 100vh;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const UserImage = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 480px) {
  align-items: flex-end;
  width: 30%;
  height: 100%;
  }
`

export const Image = styled.div`
  width: 206px;
  height: 206px;
  border: 2px solid #D81212;
  border-radius: 100%;
  overflow: hidden;
  padding: 20px;
  > img {
    width: 100%;
    border-radius: 50%;
    height: 100%;
    border: none;
    overflow: hidden;
  };
  @media (min-width: 480px) {
    > img {
    width: 100%;
    border-radius: 50%;
    height: 100%;
    border: none;
    overflow: hidden;
  };
  }
`

export const Camera = styled.div`
  width:248px; /**206px + 42px */
  > * {
    margin-top: 10px;
    width: 42px;
    height: 42px;
  }
`

export const SideForm = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  > *{
    margin: 15px 0;
  }
  @media (min-width: 480px) {
  width: 60%;
  height: 100%;
  };
`

export const FormInput = styled.div`
  width: 100%;
  > * {
    margin: 10px;
    width: 75%;
  }
  > input{
    padding: 15px 20px
  }
  @media (min-width: 480px) {
    > * {
    width: 35%;
  }
  > input{
    padding: 10px 20px
  }
  };
  `
export const ButtonLogin = styled.div`
  width: 100%;
  > button{
    width: 85%;
    padding: 5px 0;
  }
  @media (min-width: 480px){
    
  > button{
    width: 43%;
  }
 }
`
