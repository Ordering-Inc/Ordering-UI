import styled, { css } from 'styled-components'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeaderProfile = styled.div`
  display: flex;
  padding: 15px 20px;
  border-bottom: 1px solid #EEEEEE;

  div {
     p {
       margin-left: 10px;
       ${props => props.theme?.rtl && css`
         margin-right: 10px;
         margin-left: 0px;
      `}
      }
     strong {
      p{
        margin-block-end: 0.1em;
      }
    }
    p {
      margin-block-start: 0.1em;
      font-size: 0.7em
    }
  }
`
export const HeaderName = styled.p`
  font-size: 1.1em;
  margin-block-end: 0.1em;
  margin-block-start: 0.1em;

`

export const Status = styled.p`
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-size: 0.7em;
`

export const Image = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme?.colors?.primary};
  border-radius: 1000px;
  padding: 5px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    border-radius: 1000px;
    object-fit: cover;
    border: 1px solid #F5F5F5;
  }

  img[name]{
    border: 1px solid #D81212;
    border-radius: 50%;
  }

  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 6px;
  }
`

export const HeaderOnline = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  margin-left: 10px;

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
    text-align: right;
  `}
  h1,
  span {
    margin: 0px;
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  span {
    font-size: 13px;
    font-weight: 300;
  }
`

export const Chat = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  height: 55vh;
  flex-direction: column;
  padding: 0 20px;
  > :first-child{
    margin-top: 10px;
  }
  @media (max-width: 768px){
    height: 70vh;
  }
`

export const MessageConsole = styled.div`
  display: inline-flex;
  justify-content: center;
  font-size: 0.8em;
  border-radius: 97px;
`

export const MessageBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8em;
`

export const MessageCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 0.8em;
`

export const BubbleConsole = styled.div`
  border-radius: 5px;
  padding: 5px 15px;
  max-width: 30%;
  margin-bottom: 15px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  @media (max-width: 1024px){
    max-width: 40%
  }
`

export const BubbleBusines = styled.div`
  border-radius: 97px 97px 97px 0px;
  padding: 10px 25px 10px 25px;
  max-width: 40%;
  min-width: 80px;
  margin-bottom: 10px;
  background: #EFEFEF;
  overflow: hidden;
  overflow-wrap: break-word;
  &[name=image]{
    border-radius: 40px 40px 40px 0px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 0px 97px;
      &[name=image]{
      border-radius: 40px 40px 0px 40px;
     }
  `}

  @media (max-width: 1024px){
    max-width: 60%;
  }
  @media (max-width: 480px){
    border-radius: 40px 40px 40px 0px;

    ${props => props.theme?.rtl && css`
      border-radius: 40px 40px 0px 40px;
    `}
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 97px 97px 0px 97px;
  padding: 10px 25px 10px 25px;
  max-width: 40%;
  min-width: 80px;
  height: auto;
  margin-bottom: 10px;
  background: #D81212;
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;

  p:last-child {
    left: 10px;
  }

  &[name=image]{
    border-radius: 40px 40px 0px 40px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 97px 0px;

    p:last-child {
      left: initial;
      right: 10px;
    }

    &[name=image]{
      border-radius: 40px 40px 40px 0px;
     }
  `}

  @media (max-width: 1024px){
    max-width: 60%
  }

  @media (max-width: 480px){
    border-radius: 40px 40px 0px 40px;

    ${props => props.theme?.rtl && css`
      border-radius: 40px 40px 40px 0px;
    `}
  }
`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 97px 97px 0px 97px;
    ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 97px 0px;
    `}
  }
`

export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 97px 97px 97px 0px;
    ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 0px 97px;
    `}
  }
`

export const ChatImage = styled.div`
  width: 100%;
  height: auto;
  img{
    width: 100%;
    height: auto;
    vertical-align: middle;
    object-fit: contain;
  }
`

export const PartnerName = styled.p`
  margin-block-start: 0;
  margin-block-end: 0.6em;
  font-size: 1.1em;
`

export const MyName = styled.p`
    margin-block-start: 0;
    margin-block-end: 0.6em;
    font-size: 1.1em;
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
  `}
`

export const TimeofSent = styled.p`
  position: relative;
  text-align: right;
  font-size: 0.8em;
  margin-block-start: 0.2em;
  margin-block-end: initial;

  ${props => props.theme?.rtl && css`
    text-align: left;
  `}
`

export const SendForm = styled.div`
  padding: 10px 20px;
  background: #FAFAFA;
  border-top: 1px solid #EEEEEE;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`

export const Send = styled.form`
  align-items: center;
  display: flex;
  margin-top: 3px;
  height: auto;

  input {
    flex: 1;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 640px){
    input{
      flex: initial;
      width: 60%;
    }
  }
`

export const SendImage = styled.label`
  width: 25px;
  height: 25px;
  margin: 0px 20px;

  input {
    display: none;
  }

  svg {
    color: #CFD0D0;
    width: 25px;
    height: 25px;
    cursor: pointer
  }
`

export const WrapperDeleteImage = styled.div`
  margin: 0px 17px;

  button{
    &:disabled {
    cursor: not-allowed;
    }
  }
`

export const WrapperSendMessageButton = styled.div`
  white-space: nowrap;

  button{
    padding-top: 7px;
    padding-bottom: 7px;
    svg {
       margin-right: 10px;
       width: 1.5em;
       height: 1.5em; 
       vertical-align: middle;
       color: white;
       ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
        transform: rotate(270deg)
      `}
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (max-width: 480px){
    button{
      svg {
        margin: 0;
      }
      span {
        display: none;
      }
    }
  }
`
