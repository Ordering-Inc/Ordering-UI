import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 15px;

  @media (min-width: 769px) {
    padding: 0 40px;
  }

  ${({ profileMessages }) => profileMessages && css`
    padding: 0 !important;
  `};
`

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #EEEEEE;
  height: 70px;
  box-sizing: border-box;

  ${({ active }) => active && css`
    background: ${props => props.theme?.colors.grayDividerColor};
  `}

  ${({ isCursor }) => isCursor && css`
    cursor: pointer;
  `}

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
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7.6px;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #F5F5F5;
  }

  img[name]{
    border: 1px solid #D81212;
    border-radius: 50%;
  }

  svg {
    width: 36px;
    height: 36px;
  }
`

export const HeaderOnline = styled.div`
  display: flex;
  flex-direction: column;
  height: 36px;
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
    font-weight: 600;
    font-size: 14px;
  }

  span {
    font-size: 10px;
    font-weight: 300;
  }

  ${({ theme, rightContainer }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    span, h1 {
      color: ${rightContainer ? '#fff' : '#000'};
    }
  `}
`

export const Chat = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 490px);
  min-height: 400px;
  flex-direction: column;
  padding: 0 20px;
  > :first-child{
    margin-top: 10px;
  }
  @media (min-width: 769px){
    height: calc(60vh - 90px);
    ${({ profileMessages }) => profileMessages && css`
      height: calc(100vh - 266px);
    `};
  }
`

export const MessageConsole = styled.div`
  width: 100%;
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
    
  ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    color: #000;
  `}
`

export const BubbleBusines = styled.div`
  border-radius: 7.6px 7.6px 7.6px 0px;
  padding: 10px 25px 10px 25px;
  max-width: 60%;
  min-width: 80px;
  margin-bottom: 10px;
  background: #EFEFEF;
  overflow: hidden;
  overflow-wrap: break-word;
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
  max-width: 60%;
  min-width: 80px;
  height: auto;
  margin-bottom: 10px;
  background: ${props => props.theme?.colors.primary};
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;

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
    max-height: 300px;
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

export const TimeofSentByAdmin = styled.p`
    position: relative;
  text-align: left;
  font-size: 0.8em;
  margin-block-start: 0.2em;
  margin-block-end: initial;

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
`

export const SendForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #DEE2E6;

  @media (min-width: 480px){
    padding: 5px 20px;
  }

  @media (min-width: 769px) {
    padding: 10px 20px;
    position: sticky;
    width: auto;
    background-color: #F8F8F8 ;
  }
`

export const Send = styled.form`
  align-items: center;
  display: flex;
  margin-top: 3px;
  height: auto;
  width: 100%;
  input {
    padding-top: 13px;
    padding-bottom: 13px;
    width: 100%;
    background: #F8F9FA;
    border-radius: 7.6px;
    border: none;
    font-size: 12px;
    box-sizing: border-box;
    ${props => props.theme?.rtl ? css`
      padding-left: 30px;
      padding-right: 15px;
    ` : css`
      padding-left: 15px;
      padding-right: 30px;
    `}
      
  ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    border: 1px solid #000;
  `}
  }
`

export const SendImage = styled.label`
  width: 15px;
  height: 15px;
  position: ${props => props.hidden ? 'fixed' : 'absolute'};
  opacity: ${props => props.hidden && '0'};
  right: 16px;
  top: 11px;

  ${props => props.theme?.rtl && css`
    left: 16px;
    right: initial;
  `}

  input {
    display: none;
  }



  svg {
    color: #CFD0D0;
    width: 15px;
    height: 15px;
    cursor: pointer
  }
`

export const WrapperDeleteImage = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 9px;
  ${props => props.theme?.rtl ? css`
    left: 12px;
  ` : css`
    right: 12px;
  `}
  > div {
    position: relative;

    img{
      width: 25px;
      height: 25px;
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
      width: 18px;
      height: 18px;
      transform: translate(100%, -50%);
    }
  }

`

export const WrapperSendMessageButton = styled.div`
  white-space: nowrap;
  margin-left: 20px;
  ${props => props.theme?.rtl && css`
    margin-right: 20px;
    margin-left: 0;
  `}

  button{
    padding-top: 6px;
    padding-bottom: 6px;
      svg {
        display: inline;
        width: 20px;
        height: 20px; 
        vertical-align: middle;
        color: white;
        ${props => props.theme?.rtl && css`
        transform: rotate(270deg);
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
        display: none;
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
  @media (min-width: 769px){
    right: 5px;
    ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  }
`

export const MessagesLayoutWrapper = styled.div`
  display: flex;
  border-left: 1px solid #DEE2E6;
  border-right: 1px solid #DEE2E6;
  position: relative;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const MessagesLeftLayout = styled.div`
  width: 100%;
  border-right: 1px solid #DEE2E6;
  min-width: 250px;

  ${props => props.theme?.rtl && css`
    border-left: 1px solid #DEE2E6;
    border-right: none;
  `}

  @media (min-width: 769px) {
    width: 30%;
  }
`

export const MessagesRightLayout = styled.div`
  width: 100%;
  border-top: 1px solid #DEE2E6;
  margin-top: 30px;
  ${({ profileMessages }) => profileMessages && css`
    margin-top: 0px;
  `}

  @media (min-width: 769px) {
    width: 70%;
    border: none;
    margin-top: 0;
    ${({ profileMessages }) => profileMessages && css`
      width: 100%;
    `}
  }
`

export const MessagesTitle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #DEE2E6;
  padding: 15px 20px;
  height: 70px;
  box-sizing: border-box;

  h1 {
    font-weight: 600;
    font-size: 20px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
  }
`

export const CustomerList = styled.div`
  > div {
    border: none;
  }
`

export const MessagesClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  ${props => props.theme?.rtl && css`
    left: 10px;
    right: initial;
  `}
  cursor: pointer;

  svg {
    font-size: 24px;
  }
`

export const InputWrapper = styled.div`
  width: 60%;
  flex: 1;
  position: relative;
`

export const MessageContentWrapper = styled.div``

export const MessageCreatedDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  span {
    font-size: 12px;
    color: ${props => props.theme?.colors.darkGray}
  }
`

export const NotSendMessage = styled(SendForm)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: #909BA9;
  background: #F8F9FA;

  svg {
    font-size: 20px;
  }

  p {
    font-size: 14px;
    color: #909BA9;
    margin: 6px 0;
  }
`

export const QuickMessageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    margin-bottom: 5px;
    border-radius: 50px;
    color: #414954;
    background: #E9ECEF;
    border: none;
    margin-right: 12px;
    font-size: 12px;
    line-height: 25px;
    padding: 0px 12px;
    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 12px;
    `}

    &:active {
      background: ${() => darken(0.05, '#E9ECEF')};
    }
  }
`
export const ProfileMessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #EEEEEE;
  height: 62px;
  box-sizing: border-box;
`
export const MessagesTypes = styled.div`
  display: flex;
`

export const OrderData = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 14px;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #344050;
  }
`

export const MessageType = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  >div {
    margin-right: 5px;
    box-shadow: none;
  }

  ${({ active }) => active && css`
    >div {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  `}
`
