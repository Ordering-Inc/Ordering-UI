import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding-top: 110px;
  width: 91%;
  margin: 0px auto;
  display: flex;
  justify-content: center;

  @media (min-width: 992px) {
    padding-top: 65px;
  }
`

export const UserProfileContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  @media (min-width: 992px) {
    width: 55%;
  }
`

export const ProfileInfoRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 20px;

  > div {
    &:first-child {
      min-width: 120px;
      font-weight: 600;
    }
  }

  #select-input {
    border-radius: unset;
    min-width: 200px;
  }
`

export const UserImage = styled.div`
`

export const Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  padding: 5px;
  background: ${({ isImage, theme }) => isImage ? '#FFF' : `${theme.colors.backgroundPage}`};
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

  img{
    object-fit: cover;
  }
`

export const SideForm = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
    display: flex;
    align-items: center;
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 20px
  }

  > * {
    margin: 5px 0;
    width: 75%;
  }

  > button {
    width: auto;
    background: ${props => props.theme.colors.backgroundPage};
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
