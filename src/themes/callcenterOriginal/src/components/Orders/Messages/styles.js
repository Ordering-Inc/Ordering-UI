import styled, { css } from 'styled-components'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const WrapperContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`

export const NotSendMessage = styled.div`
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

export const HeaderProfile = styled.div`
  display: flex;
  padding: 20px 0px;

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

  @media (max-width: 576px) {
    padding: 10px 0;
  }
`
export const WrapperHeader = styled.div`
  width: 91%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    justify-content: center;
    width: 90%;
  }

  ${({ messageDashboardView }) => messageDashboardView && css`
    width: 92%;
    border-bottom: 1px solid #D8D8D8;
    padding-bottom: 5px;
    flex-wrap: wrap;
    row-gap: 10px;
  `}

  ${({ historyView }) => historyView && css`
    width: 92%;
  `}
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

export const ImageContainer = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  flex-wrap: wrap;

  > * {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}

    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
      ` : css`
        margin-right: 0px;
      `}
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  }

  svg {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    padding: 6px;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  }
  ${({ isCircle }) => isCircle && css`
    img, svg {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    svg {
      padding: 3px;
    }

    ${({ isReceived }) => !isReceived && css`
      justify-content: flex-end;
    `}
  `}

`

export const OrderNumber = styled.div`
  color: ${props => props.theme.colors.headingColor};
  font-size: 16px;
  font-weight: 600;
`

export const Chat = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  > :first-child{
    margin-top: 10px;
  }
  @media (min-width: 768px){
  }
`

export const MessageConsole = styled.div`
  display: inline-flex;
  justify-content: center;
  font-size: 0.8em;
  margin-bottom: 20px;
`

export const MessageBusiness = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8em;
  width: 91%;
  margin: 0 auto;
  margin-bottom: 20px;
`

export const MessageCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.8em;
  width: 91%;
  margin: 0 auto;
  margin-bottom: 20px;
`

export const BubbleConsole = styled.div`
  border-radius: 5px;
  padding: 10px 25px 10px 25px;
  margin-bottom: 8px;
  background: ${props => props.theme.colors.secundary};
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  max-width: 80%;

  @media (min-width: 1024px){
    max-width: 80%;
  }
`

export const BubbleBusines = styled.div`
  border-radius: 8px;
  ${props => props.theme?.rtl ? css`
    border-bottom-right-radius: 0;
  ` : css`
    border-bottom-left-radius: 0;
  `}
  padding: 10px 25px 10px 25px;
  max-width: 80%;
  min-width: 80px;
  margin-bottom: 8px;
  background: ${props => props.theme.colors.secundary};
  overflow: hidden;
  overflow-wrap: break-word;
  &[name=image]{
    width: 100%;
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 8px;
  ${props => props.theme?.rtl ? css`
    border-bottom-left-radius: 0;
  ` : css`
    border-bottom-right-radius: 0;
  `}
  padding: 10px 25px 10px 25px;
  max-width: 80%;
  min-width: 80px;
  height: auto;
  margin-bottom: 10px;
  background: ${props => props.theme.colors.primary};
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;

  p:last-child {
    left: 10px;
  }

  &[name=image]{
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
    border-radius: 40px 40px 40px 0px;

    p:last-child {
      left: initial;
      right: 10px;
    }
  `}
`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 5px;
  }
`

export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 5px;
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
  font-size: 0.8em;
  margin-block-start: 0.2em;
  margin-block-end: initial;
  width: fit-content;
  cursor: pointer;
  font-weight: 600;

  ${props => props.theme?.rtl ? css`
    margin-right: auto;
  ` : css`
    margin-left: auto;
  `}
`

export const SendForm = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  padding: 13px;
`

export const Send = styled.form`
  align-items: center;
  display: flex;
  margin-top: 8px;
  height: auto;
  max-width: 1200px;
  justify-content: space-between;
  width: 100%;
  input {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    flex: 1;
  }
`

export const WrapperSendInput = styled.div`
  flex: 1;
  position: relative;
  box-sizing: border-box;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}

  > input {
    border: 1px solid ${props => props.theme.colors.borderColor};
    padding-right: 45px;
    -webkit-appearance: none;
    ${props => props.theme.rtl && css`
      padding-left: 45px;
      padding-right: 15px;
    `}
  }
`

export const SendImage = styled.label`
  width: 25px;
  height: 25px;
  
  position: absolute;
  top: 10px;
  right: 10px;

  input {
    display: none;
  }

  svg {
    color: #B1BCCC;
    font-size: 20px;
    cursor: pointer;
  }
`

export const WrapperDeleteImage = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;

  img {
    width: 30px;
    height: 30px;
    &:disabled {
    cursor: not-allowed;
    }
    border-radius: 8px;
  }

  svg {
    color: black;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    width: 20px;
    height: 20px;
    transform: translate(100%, -50%);
  }
`

export const WrapperSendMessageButton = styled.div`
  white-space: nowrap;
  width: 80px;

  button {
    height: 43px;
    width: 100%;
    svg {
       width: 1.5em;
       height: 1.5em; 
       vertical-align: middle;
       color: white;
       ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
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

  @media (min-width: 480px) {
    width: fit-content;
    button {
      svg {
        margin-right: 10px;
      }
      span {
        display: inline;
      }
    }
  }
`
export const WrapperHitoryHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const TabItem = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  text-align: center;
  color: #909BA9;
  
  ${({ active }) => active && css`
    border-bottom: 1px solid ${props => props.theme.colors?.headingColor};
    color: ${props => props.theme.colors?.headingColor};
    font-weight: 600;
  `}

  @media (max-width: 576px) {
    padding: 5px 10px;
    font-size: 14px;
  }
`
export const SkeletonHitory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 20px;

  @media (max-width: 576px) {
    span {
      width: 250px !important;
    }
  }
`
export const WrapperLogistics = styled.div``

export const WrapperLogisticInformation = styled.div``

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 15px;
`

export const SearchAndDetailControlContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`
export const MessagesSearch = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 13px;
    left: 14px;
  }

  input {
    width: 200px;
    border: 1px solid #1C202E;
    border-radius: 22px;
    outline: none;
    padding: 8px;
    padding-left: 40px;
    font-size: 15px;
    background: transparent;

    &::placeholder {
      color: #182964;
    }
  }
`
export const OrderDetailIconButton = styled.button`
  outline: none;
  border: none;
  background: #b9bcc7;
  &:active {
    background: '#b9bcc7';
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;

  svg {
    font-size: 30px;
  }
`

export const ChatContactInfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;

  ${({ disabled }) => disabled && css`
    opacity: 0.2;
  `}
`

export const InfoBlock = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
  > p {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 190px;

    &:first-child {
      color: ${props => props.theme.colors.headingColor};
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
    }
    &:last-child {
      color: ${props => props.theme.colors.lightGray};
      font-size: 12px;
    }
  }
`

export const SendToContainer = styled.div`
  p {
    color: ${props => props.theme.colors.secundaryContrast};
    margin-bottom: 2px;
    text-align: end;
    font-size: 12px;
  }

  ${({ isReceived }) => isReceived && css`
    text-align: initial;
  `}
`

export const MessageSender = styled.p`
  margin-bottom: 5px;
  text-align: center;
`

export const QuickMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  button {
    margin-bottom: 6px;
    margin-right: 12px;
    line-height: 22px;
    font-size: 12px;
    padding: 0 10px;

    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 12px;
    `}
  }
`
