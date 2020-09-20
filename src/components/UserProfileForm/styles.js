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
  text-align: center;
  > *{
    margin: 30px 0;
  }
  @media (min-width: 480px) {
  width: 60%;
  height: 100%;
  };
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  > * {
    margin: 10px;
    width: 75%;
  }
  > button {
    width: 80px;
  }
`

export const SavedPlaces = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

export const Place = styled.div`
`
export const AddressListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 40px;
`

export const AddressItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  border-top: 1px solid #00000029;

  label {
    font-size: 15px;
    margin-left: 5px;
    font-weight: bold;
  }

  .wrapAddress {
    display: flex;
    align-items: center;

    span {
      cursor: pointer;
      margin-right: 10px;
      &.radio {
        color: #D81212;
        font-size: 24px;
      }
    }
  }
`
export const AddressItemActions = styled.div`
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    margin: 0px 5px;
    font-size: 30px;

    &:nth-child(1) {
      svg {
        color: #F2BB40;
      }
    }

    &:nth-child(2) {
      svg {
        color: #D81212;
      }
    }
  }
  a.disabled {
    pointer-events: none;
  }
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
    padding: 3px 10px
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
