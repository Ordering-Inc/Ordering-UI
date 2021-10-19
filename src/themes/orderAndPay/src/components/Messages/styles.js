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
  flex-direction: column;
  height: 68vh;
  padding: 0 20px;
  > :first-child{
    margin-top: 10px;
  }
  @media (min-height: 580px){
    height: 73vh;
  }
  @media (min-width: 768px){
    height: calc(60vh - 60px);
  }
`

export const MessageConsole = styled.div`
  display: inline-flex;
  justify-content: center;
  font-size: 12px;
  border-radius: 7.6px;
  font-weight: 400;
  strong{
    font-weight: 600;
  }
`

export const MessageBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
`

export const MessageCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
`

export const BubbleConsole = styled.div`
  border-radius: 7.6px;
  padding: 5px 15px;
  max-width: 90%;
  margin-bottom: 15px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  font-size: 12px;
  @media (min-width: 1024px){
    max-width: 30%
  }
`

export const BubbleBusines = styled.div`
  border-radius: 7.6px 7.6px 7.6px 0px;
  padding: 10px 25px 10px 25px;
  max-width: 80%;
  min-width: 80px;
  margin-bottom: 10px;
  background: #EFEFEF;
  overflow: hidden;
  overflow-wrap: break-word;
  font-size: 12px;
  &[name=image]{
    border-radius: 7.6px 7.6px 7.6px 0px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
      border-radius: 7.6px 7.6px 0px 7.6px;
  `}

  @media (min-width: 480px) {
    border-radius: 7.6px 7.6px 7.6px 0px;

    ${props => props.theme?.rtl && css`
      border-radius: 7.6px 7.6px 0px 7.6px;
      &[name=image]{
        border-radius: 7.6px 7.6px 0px 7.6px;
       }
    `}
  }

  @media (min-width: 1024px){
    max-width: 40%;
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 7.6px 7.6px 0px 7.6px;
  padding: 10px 25px 10px 25px;
  max-width: 80%;
  min-width: 80px;
  height: auto;
  margin-bottom: 10px;
  background: #D81212;
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 12px;
  p:last-child {
    left: 10px;
  }

  &[name=image]{
    border-radius: 7.6px 7.6px 0px 7.6px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
    border-radius: 7.6px 7.6px 7.6px 0px;

    p:last-child {
      left: initial;
      right: 10px;
    }

    &[name=image]{
      border-radius: 7.6px 7.6px 7.6px 0px;
     }
  `}
  
  @media (min-width: 480px){
    border-radius: 7.6px 7.6px 0px 7.6px;

    ${props => props.theme?.rtl && css`
      border-radius: 7.6px 7.6px 7.6px 0px;
    `}
  }

  @media (min-width: 1024px){
    max-width: 40%
  }

`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 7.6px 7.6px 0px 7.6px;
    ${props => props.theme?.rtl && css`
    border-radius: 7.6px 7.6px 7.6px 0px;
    `}
  }
`

export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 7.6px 7.6px 7.6px 0px;
    ${props => props.theme?.rtl && css`
    border-radius: 7.6px 7.6px 0px 7.6px;
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
  font-size: 10px;
  margin-block-start: 0.2em;
  margin-block-end: initial;
  color: ${({ white, theme }) => white ? '#FFFFFF' : theme.colors.darkTextColor};
  ${props => props.theme?.rtl && css`
    text-align: left;
  `}
`

export const SendForm = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  height: 84px;
  align-items: center;
  width: calc(100% - 80px);
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
    width: 80%;
    flex: 1;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 15px
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
  transform: translateX(-300%);
  input {
    display: none;
  }

  svg {
    color: #CFD0D0;
    width: 16px;
    height: 16px;
    cursor: pointer
  }
`

export const WrapperDeleteImage = styled.div`
  margin: 0px 17px;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0;
  transform: translateX(-300%);
  img{
    width: 16px;
    height: 16px;
    &:disabled {
    cursor: not-allowed;
    }
    border-radius: 7.6px;
  }

  svg{
    position: relative;
    color: black;
    font-size: 12px;
    top: -10px;
    right: 0px
  }

  button{
    position: absolute;
    background: white;
    width: 14px;
    height: 14px;
    transform: translate(50%, -30%);
  }
`

export const WrapperSendMessageButton = styled.div`
  white-space: nowrap;

  button{
    padding: 0;
    width: 44px;
    height: 44px;
    img {
       position: relative;
       top: 3px;
       color: white;
       ${props => props.theme?.rtl && css`
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
  padding: 13px 40px 0 40px;
  img, [class='fallback'] {
    margin-left: 15px;
    box-shadow: 0px 1px 4px 0px #0000001A;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
    width: 32px;
    height: 32px;
    border-radius: 7.6px;
    object-fit: cover;
  }
`
