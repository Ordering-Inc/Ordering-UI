import styled, { css } from 'styled-components'

export const Container = styled.div``

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;
  margin: 25px auto ${props => props.mbottom ? `${props.mbottom}px` : 'auto'};

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
  position: relative;

  ${({ theme }) => theme?.profile?.components?.layout?.type === 'pfchangs' && css`
    display: none;
  `}

  @media (min-width: 768px){
    width: auto;
    align-items: flex-end;
  }
`

export const Image = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 7.6px;
  overflow: hidden;
  padding: 20px;
  cursor: -webkit-grab;
  cursor: grab;

  img,
  div {
    width: 100%;
    border-radius: 7.6px;
    height: 100%;
    border: none;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }

  @media (min-width: 480px){
    width: 196px;
    height: 196px;
  }
`

export const SideForm = styled.div`
  width: 100%;

  ${({ theme }) => theme?.profile?.components?.layout?.type === 'pfchangs' && css`
    background: ${props => props.theme.colors.secundaryContrast};
  `}
  @media (min-width: 768px) {
    width: 70%;
    display: flex;
    align-items: center;
    margin: 30px 0px 0px 30px;
    ${props => props.theme?.rtl && css`
      margin: auto 30px auto 0px;
    `}
  }
`

export const Camera = styled.div`
  position: absolute;
  left: calc(50% - 12px);
  bottom: 25px;

  svg {
    font-size: 25px;
    color: white;
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

  ${({ theme }) => theme?.profile?.components?.layout?.type === 'pfchangs' && css`
      background: ${props => props.theme.colors.secundaryContrast};
      width: 100%;
      * {
        color: #fff;
      }
    `
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
      width: 50%;
      align-self: flex-end;
    }
    ${({ theme }) => theme?.profile?.components?.layout?.type === 'pfchangs' && css`
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 25px auto auto;
      box-sizing: border-box;
      margin-bottom: 20px;
      button { 
        display: none;
      }
      > div {
        padding: 0;
      }
      h1 { 
        display: none;
      }
      ul {
        box-sizing: border-box;
        border: 1px solid #fff;
        padding: 0px;
        width: 70%;
        margin: 30px 0 0 30px;
      }
    `}
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
  @media (min-width: 768px) {
    width: 100%;
  }
`
