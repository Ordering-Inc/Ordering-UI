import styled, { css } from 'styled-components'

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 480px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const FlexTabs = styled.div`
  width: 70%;
  margin: 0 auto;
  
  div{
      justify-content: space-evenly
  }
`

export const UserImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
  @media (min-width: 480px) {
    width: 40%;
  }

  @media (min-width: 768px){
    align-items: flex-end;
  }

`

export const Image = styled.div`
  width: 170px;
  height: 170px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 100%;
  overflow: hidden;
  padding: 20px;
  background: ${({ isImage }) => isImage ? '#FFF' : 'rgba(204, 204, 204, 0.2)'};
  cursor: -webkit-grab;
  cursor: grab;

  img,
  div {
    width: 100%;
    border-radius: 50%;
    height: 100%;
    border: none;
    overflow: hidden;
  };

  @media (min-width: 480px){
    width: 150px;
    height: 150px;
  }

  @media (min-width: 578px){
    width: 170px;
    height: 170px;
  }


`

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const Camera = styled.div`
  width:212px; /**170px + 42px */
  > * {
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }
`

export const SideForm = styled.div`
  /*width: 70%;*/
  width: 100%;
    > *{
    margin: 0;
    margin-top: 20px;
    ${props => props.theme?.rtl ? css`
      margin-right: 0;
  ` : css`
      margin-left: 0;
  `}
  }
  @media (min-width: 480px) {
    width: 60%;
    > *{
    margin: 30px 0;
    margin-left: 50px;
    ${props => props.theme?.rtl && css`
      margin-right: 50px;
      margin-left: 0;
  `}
  }
  };
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 200px;

  h1 {
    font-size: 20px
  }

  > * {
    margin: 5px 0;
    width: 75%;
  }

  > button {
    width: 80px;
    background: #F8F8F8;
  }

  @media (min-width: 480px){
    align-items: flex-start;
    text-align: left;
    ${props => props.theme?.rtl && css`
     text-align: right;
    `}
  }

`

export const SavedPlaces = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;

  h1{
    font-size: 18px
  }

  > div{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 auto;
    width: 80%;
  }

  button{
    width: 100%;
    align-self: center;
  }

  @media (min-width: 480px){
    width: 70%;
    text-align: left;
    ${props => props.theme?.rtl && css`
    text-align: right;
    `}

    button {
      align-self: flex-end;
    }
  }

  @media (min-width: 768px){
    button {
      width: 65%;
    }
  }

`

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  *{
    margin-top: 20px;
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
  }
  input{
    padding: 10px 15px;
    width: 80%;
  }
  button {
    box-sizing: initial;
    margin-top: 30px;
    padding-top: 7px;
    padding-bottom: 7px;
    width: 80%;
  }

  @media (min-width: 480px){
    height: auto;
    * {
      width: 75%;
    } 
  }

  @media (min-width: 768px){
    display: block;
    height: 200px;
    margin-top: 20px;
    margin-left: 50px;
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
      margin-left: 0px;
      margin-right: 50px;
    `}

    * {
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px 15px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
      `}
    }

    input {
      width: 38%;
    }

    button {
      width: 38%;
      padding: 7px 15px;
      margin-top: 10px;
    }
  }
`
export const SkeletonForm = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 80%;
    margin: 10px 0;
    display: inline;
    height: 50px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 768px){
    justify-content: flex-start;
    > * {
      height: 20px;
      width: 35%;
      margin: 5px
    }
  }
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 0;
  }

  svg {
    width: 45px;
    height: 45px;
  }
`
