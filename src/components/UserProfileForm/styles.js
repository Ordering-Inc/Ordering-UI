import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 480px) {
    flex-direction: row;
  }
`

export const UserImage = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 480px) {
  width: 30%;
  height: 100%;
  }
`

export const Image = styled.div`
  width: 60%;
  height: 100%;
  border: 2px solid #D81212;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 90%;
    height: 90%;
    border-radius: 50%;
  };
  @media (min-width: 480px) {
    width: 55%;
    height: 30%;
    > img {
    width: 92%;
    height: 92%;
    border-radius: 50%;
  };
  }
`

export const Camera = styled.div`
  width:46px;
  height:46px;
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
  @media (min-width: 480px) {
  width: 50%;
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
  > button{
    width: 85%;
    padding: 5px;
    
  }
  @media (min-width: 480px) {
    > * {
    width: 40%;
  }
  > button{
    position: relative;
    width: 50%;
    top: 70px;
  }
  > input{
    padding: 20px 20px
  }
  };
  `
