import styled, { css } from 'styled-components'

export const Container = styled.div``

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  overflow-x: hidden;
  margin-top: 25px;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const UserImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 768px){
    width: 20%;
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
    width: 200px;
    height: 200px;
  }

  @media (min-width: 768px){
    width: 170px;
    height: 170px;
  }
`

export const SideForm = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 55%;
    display: flex;
    align-items: center;
    margin: auto 0px auto 30px;
    ${props => props.theme?.rtl && css`
      margin: auto 30px auto 0px;
    `}
  }
`

export const Camera = styled.div`
  width:212px;
  > * {
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 480px){
    width:242px;
  }

  @media (min-width: 768px){
    width:212px;
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 20px
  }

  > * {
    margin: 5px 0;
    width: 75%;
  }

  > button {
    width: auto;
    background: #F8F8F8;
  }

  @media (min-width: 768px){
    align-items: flex-start;
    text-align: left;
    ${props => props.theme?.rtl && css`
     text-align: right;
    `}
  }

`

export const SavedPlaces = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;


  h1{
    font-size: 24px;
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
    h1 {
      text-align: center;
    }
    ul{
      width: 100%;
    }
    button {
      width: 65%;
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

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const WrapperForm = styled.div`
  padding: 10px 25px 0px;
`
