import styled, { css } from 'styled-components'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0px 40px;
`
export const HeaderName = styled.p`

`

export const Status = styled.p`
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-size: 0.7em;
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
  margin-left: 15px;
  
  ${props => props.theme?.rtl && css`
    margin-right: 15px;
    margin-left: 0px;
    text-align: right;
  `}
  h1,
  span {
    margin: 0px;
  }

  h1 {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: #909BA9;
  }
`

export const Chat = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  height: 70vh;
  flex-direction: column;
  padding: 0 20px;
  > :first-child{
    margin-top: 10px;
  }
  @media (min-width: 768px){
    height: calc(60vh - 60px);
  }
`

export const MessageConsole = styled.div`
  display: inline-flex;
  justify-content: center;
  font-size: 0.8em;
  border-radius: 60px;
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
  max-width: 40%;
  margin-bottom: 15px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  @media (min-width: 1024px){
    max-width: 30%
  }
`

export const BubbleBusines = styled.div`
  border-radius: 40px 40px 40px 0px;
  padding: 10px 25px 10px 25px;
  max-width: 60%;
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
      border-radius: 40px 40px 0px 40px;
  `}

  @media (min-width: 480px) {
    border-radius: 60px 60px 60px 0px;

    ${props => props.theme?.rtl && css`
      border-radius: 60px 60px 0px 60px;
      &[name=image]{
        border-radius: 40px 40px 0px 40px;
       }
    `}
  }

  @media (min-width: 1024px){
    max-width: 40%;
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 40px 40px 0px 40px;
  padding: 10px 25px 10px 25px;
  max-width: 60%;
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
    border-radius: 40px 40px 40px 0px;

    p:last-child {
      left: initial;
      right: 10px;
    }

    &[name=image]{
      border-radius: 40px 40px 40px 0px;
     }
  `}
  
  @media (min-width: 480px){
    border-radius: 60px 60px 0px 60px;

    ${props => props.theme?.rtl && css`
      border-radius: 60px 60px 60px 0px;
    `}
  }

  @media (min-width: 1024px){
    max-width: 40%
  }

`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 60px 60px 0px 60px;
    ${props => props.theme?.rtl && css`
    border-radius: 60px 60px 60px 0px;
    `}
  }
`

export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 60px 60px 60px 0px;
    ${props => props.theme?.rtl && css`
    border-radius: 60px 60px 0px 60px;
    `}
  }
`

export const ChatImage = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  img{
    width: 100%;
    height: auto;
    max-height: 300;
    aspect-ratio: attr(width) / attr(height);
    vertical-align: middle;
    object-fit: contain;
    cursor: pointer;
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
  display: flex;
  padding: 0px 5px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #EEEEEE;
  height: 70px;

  @media (min-width: 768px) {
    padding: 10px 20px;
    position: static;
    width: auto;
  }
`

export const Send = styled.form`
  align-items: center;
  display: flex;
  margin-top: 3px;
  height: auto;
  width: 100%;
  input {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 70%;
  }
`

export const SendImage = styled.label`
  width: 16px;
  height: 16px;
  margin: 0px 20px;
  position: ${props => props.hidden && 'fixed'};
  opacity: ${props => props.hidden && '0'};
  position: absolute;
  right: 0;
  transform: translateX(-35px);
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
  width: 30px;
  height: 30px;
  position: relative;
  img{
    width: 30px;
    height: 30px;
    &:disabled {
    cursor: not-allowed;
    }
    border-radius: 8px;
  }

  svg{
    margin-bottom: 5px;
    color: black;
  }

  button{
    position: absolute;
    background: white;
    width: 20px;
    height: 20px;
    transform: translate(100%, -50%);
  }
`

export const WrapperSendMessageButton = styled.div`
  white-space: nowrap;

  button{
    padding: 0;
    width: 44px;
    height: 44px;
    svg {
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

    span {
      display: none;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (min-width: 480px){
    button{
      svg {
        margin-right: 10px;
      }
      span {
        display: inline;
      }
    }
  }
`

export const ImageContainer = styled.div` 
  max-height: 500px;
  img{
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
export const ModalIcon = styled.span`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  z-index: 1;
  background: rgba(0,0,0,0.3);
  ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  @media (min-width: 578px){
    right: 10px;
    ${props => props.theme?.rtl && css`
    left: 10px;
    right: initial;
  `}
  }
  @media (min-width: 768px){
    right: 5px;
    ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  }
`

export const ModalIconHeader = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  align-items: center;
  box-shadow: 0px 1px 4px 0px #0000001A;
  padding: 15px 40px 0 40px;
  img {
    margin-left: 15px;
    box-shadow: 0px 1px 4px 0px #0000001A;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
    width: 32px;
    height: 32px;
    border-radius: 7.6px;
    object-fit: cover;
  }
`
