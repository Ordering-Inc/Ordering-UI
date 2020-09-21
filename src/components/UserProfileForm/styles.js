import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex: 1;
  width: 100%;
  height: 100vh;
`

export const UserImage = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 480px) {
  align-items: flex-end;
  width: 30%;
  height: 100%;
  }
`

export const Image = styled.div`
  width: 170px;
  height: 170px;
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
  width:212px; /**170px + 42px */
  > * {
    margin-top: 10px;
    width: 42px;
    height: 42px;
  }
`

export const SideForm = styled.div`
  width: 100%;
  height: 70%;
  text-align: center;
  > *{
    margin: 30px 0;
    margin-left: 50px;
  }
  @media (min-width: 480px) {
  width: 70%;
  height: 100%;
  };
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: 200px;
  > * {
    margin: 5px 0;
    width: 75%;
  }
  > button {
    width: 80px;
    background: #F8F8F8;
  }
`

export const SavedPlaces = styled.div`
  width: 60%;
  > div{
  display: flex;
  flex-direction: column-reverse;
  width: 60%;
  }
  > button{
    width: 50%
  }
  text-align: left;
  width: 100%;
`

export const FormInput = styled.form`
  width: 100%;
  height: 200px;
  text-align: left;
  > * {
    margin-top: 10px;
    margin-right: 10px;
    width: 75%;
  }
  > input{
    padding: 15px 20px
  }

  @media (min-width: 480px) {
    > * {
    width: 40%;
  }
  > input {
    padding: 8px 10px
  }
  > div { 
    padding: 0px 10px
  }
  > button {
    box-sizing: initial;
    width: 39%
  }
};
  `
