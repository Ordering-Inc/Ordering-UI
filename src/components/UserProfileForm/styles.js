import styled, { css } from 'styled-components'

export const UserProfileContainer = styled.div`
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FlexTabs = styled.div`
width: 50%;
margin: 0 auto;
  > div{
    justify-content: space-evenly
  }
`

export const UserImage = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  @media (max-width: 480px) {
    align-items: center;
    width: 100%;
  }
  @media (max-width: 720px){
    width: 40%
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

  > img {
    width: 100%;
    border-radius: 50%;
    height: 100%;
    border: none;
    overflow: hidden;
  };
  > div {
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
    width: 30px;
    height: 30px;
  }
`

export const SideForm = styled.div`
  width: 70%;
  > *{
    margin: 30px 0;
    margin-left: 50px;
    ${props => props.theme?.rtl && css`
      margin-right: 50px;
      margin-left: 0;
  `}
  }
  @media (max-width: 720px){
    width: 60%
  }
  @media (max-width: 480px) {
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
  };
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  height: 200px;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
  > * {
    margin: 5px 0;
    width: 75%;
  }
  > button {
    width: 80px;
    background: #F8F8F8;
  }
  @media (max-width: 480px){
    align-items: center;
    text-align: center;
  }

`

export const SavedPlaces = styled.div`
  width: 70%;
  text-align: left;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
  h5{
    font-size: 1.2em
  }
  button{
    width: 50%;
    align-self: flex-end;
  }
  > div{
  display: flex;
  flex-direction: column-reverse;
  }

  @media (max-width: 480px){
    align-items: center;
    height: 100%;
    text-align: center;
    width: 100%;
    margin-top: 40px;
      > div{
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      margin: 0 auto;
      width: 80%;
    }
    button{
    width: inherit;
    align-self: center;
  }

  }
  @media (max-width: 980px){
    button{
      width: 75%
    }
  }
`

export const FormInput = styled.form`
  text-align: left;
  height: 200px;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
  > *{
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px 15px;
    width: 33%;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0px;
  `}
  }

  > button {
    box-sizing: initial;
    padding: 5px 15px;
  }

  @media (max-width: 720px){
    height: auto;
    > * {
      width: 75%;
    } 
  }
  
  @media (max-width: 480px){
    flex-direction: column;
    display: flex;
    align-items: center;
    margin: 0 auto;
    > *{
      margin-top: 20px;
      ${props => props.theme?.rtl ? css`
        margin-left: 0;
      ` : css`
        margin-right: 0;
      `}
    }
    > input{
    padding: 10px 15px;
    width: 80%;
    }
    > button {
    margin-top: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 80%;
  }
  }

`
export const SkeletonForm = styled.div`
  width: 70%;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  > * {
    width: 45%;
    margin: 10px;
    display: inline;
    height: 25px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 480px){
    width: 100%;
    justify-content: center;
    > *{
      width: 80%
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
