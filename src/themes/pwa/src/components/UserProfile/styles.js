import styled, { css } from 'styled-components'

export const Container = styled.div`

`

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const Image = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 7.6px;
  overflow: hidden;
  margin: 20px 0;
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

  @media (min-width: 768px){
    margin: 0;
    margin-top: 40px;
  }

  @media (min-width: 1024px){
    width: 145px;
    height: 145px;
  }

  @media (min-width: 1200px){
    width: 175px;
    height: 175px;
  }
`

export const SideForm = styled.div`
  width: 100%;
  

  @media (min-width: 768px) {
    width: 71%;
    display: flex;
    align-items: center;
    margin: 40px 0px 0px 40px;
    ${props => props.theme?.rtl && css`
      margin: auto 30px auto 0px;
    `}
  }

  @media (min-width: 1200px) {
    width: 74%;
  }
`

export const Camera = styled.div`
  position: absolute;
  left: calc(50% - 12px);
  bottom: 25px;

  svg {
    font-size: 25px;
    color: #fff;
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
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #344050;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
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

  .address {
    text-align: left;
  }

  #list {
    margin-top: 10px;
    .wrapAddress span.radio {
      font-size: 16px;
    }
    li {
      border: none;
      border-bottom: 1px solid #00000029;
    }
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
      width: 50%;
      align-self: flex-end;
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
  @media (min-width: 768px) {
    width: 100%;
  }
`

export const ProfileContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  min-height: calc(100vh - 68px);
  position: relative;

  @media (min-width: 576px) {
    min-height: 85vh;
  }

  @media(min-width: 1024px) {
    padding: 40px;
  }
`
export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #344050;
  margin-top: 0px;
`
export const UserInfomation = styled.div`
  display: flex;
  
`
export const UserImage = styled.div`
  position: relative;
`

export const ProfileImage = styled.div`
  display: flex;
  align-items: flex-start;
  width: 25%;
  @media(min-width: 768px) {
    width: 100px;
  }
`

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 7.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }

  svg {
    font-size: 40px;
  }

  @media(min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export const UserInfo = styled.div`
 display: flex;
 flex-direction: column;
`
export const RedireactLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};
  font-size: 13px;
  line-height: 18px;
  @media(min-width: 768px) {
    font-size: 16px;
  }
`

export const UserName = styled.h2`
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #344050;
  text-transform: capitalize;
  @media(min-width: 768px) {
    font-size: 24px;
  }
`
export const Divider = styled.div`
  height: 10px;
  width: calc(100% + 40px);
  margin: 16px 0;
  margin-left: -20px;
  background: #F8F9FA;

  @media(min-width: 1024px) {
    width: calc(100% + 80px);
    margin-left: -40px;
  }
`
export const ShortLinks = styled.div`
  display: flex;
  flex-direction: column;
`
export const LinkItem = styled.a`
  width: fit-content;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #344050;
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;

  span {
    display: flex;
    width: 25px;
    svg {
      max-width: 18px;
      max-height: 18px;
    }
  }

  &:hover {
    margin-left: 2px;
    transition: 0.2s ease-in-out;
    color: ${props => props.theme.colors.primary};
  }
`

export const LanguageSelectorWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 16px;
    min-width: 16px;
  }

  #select-input {
    width: 100%;
    height: auto;
    background-color: transparent !important;
    border: none;
    border-radius: 0px;
    #list {
      min-width: 150px;
      left: 0;
      max-height: 200px;
      border-radius: 0px;
      background-color: #fff;
      border: none;
      border-bottom: 1px solid #E9ECEF;
      box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
      font-size: 13px;
      bottom: 100%;
      overflow: auto;

      ${props => props.theme.rtl && css`
        left: initial;
        right: 0px;
      `}
    }

    @media(min-width: 768px) {
      width: 30%;
      max-width: 185px;
    }
  }
`

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;

  span {
    font-weight: 500;
    font-size: 14px;
  }

  svg {
    font-size: 16px;
    min-width: 16px;
    margin-right: 9px;

    ${props => props.theme.rtl && css`
      margin-right: initial;
      margin-left: 9px;
    `}
  }
`

export const FooterMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 15px;
  padding: 20px;
`
