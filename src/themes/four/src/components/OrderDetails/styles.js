import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const WrapperContainer = styled.div`
  margin: auto;
  width: 91%;
  @media (min-width: 768px) {
    width: ${({ isLoading }) => isLoading ? '100%' : '80%'};
  }
`

export const Header = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 10;
    top: 10px;
    left: 10px;
    color: #000;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
`

export const HeaderImg = styled.div`
  margin: 0 20px;
  img {
    width: 150px;
    display: block;
    object-fit: cover;
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const HeaderInfo = styled.div`
  background-color: #DCFFDB;
  display: flex;
  padding: 20px;
  
  @media (min-width: 678px) {
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderText = styled.div`
  display: flex;
  color: #000;

  ${({ column }) => column && css`
    flex-direction: column;
  `};
  ${({ column }) => !column && css`
    justify-content: space-between;
    align-items: center;
  `};

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }

  @media (min-width: 480px) {
    margin: 0px 20px;
  }

  @media (min-width: 769px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 18px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`

export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BusinessWrapper = styled.div`
  width: 90%;
  display: flex;
`

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  h1,
  p {
    margin: 3px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
    opacity: 0.8;
  }

  @media (min-width: 380px) {
    width: 75%;
  }
`

export const ActionsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > * {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
  `}
  }
  svg {
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 380px) {
    flex-direction: row;

    svg {
      font-size: 24px;
    }
  }
`

export const OrderCustomer = styled.div`
  display: flex;
  width: 100%;
`

export const InfoBlock = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  h1,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 18px;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  span {
    color: #344050;
    margin: 0px;
  }
`

export const Map = styled.div`
  width: 100%;
  min-height: 200px;
  height: 30vh;
  margin-bottom: 40px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
`

export const OrderDriver = styled(OrderCustomer)`
  justify-content: space-between;
  align-items: center;
`

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 70px;
      height: 70px;
      margin: 0px 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

`

export const OrderProducts = styled(OrderCustomer)`
  flex-direction: column;
`

export const OrderBill = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  table {
    margin: 10px 0;
    flex: 1;
    font-size: 12px;
    td span {
      unicode-bidi: bidi-override;
    }
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }

  table.comments {
    margin-top: 20px;
    align-items: center;
    tr {
      td:nth-child(1) {
        font-weight: bold;
      }
    }
  }


  @media (min-width: 768px) {
    flex-direction: row;
    table {
      font-size: 18px;
    }
  }
`

export const ReviewsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  button {
    width: 100%;
    padding: 5px 20px;
    color: #FFF;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    button {
      width: 70%;
    }
  }
`

export const FootActions = styled.div`
  margin-top: 10px;
  button {
    border-radius: 30px;
    padding: 3px 30px;
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
  span:nth-child(2),span:nth-child(5){
      span{
        height: 100px;
      }
    }
  @media (min-width: 768px){
    span:nth-child(2), span:nth-child(5){
      span{
        height: 200px;
      }
    }
  }
`

export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
`

export const ShareOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  h1 {
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 15px;
  }

  p {
    font-size: 13px;
    margin: 0px;
    color: #344050;
  }

  button {
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 14px;
    align-items: center;
    background: ${props => props.theme.colors.backgroundPage};

    svg {
      left: 0;
      margin-right: 6px;
      color: ${props => props.theme.colors.primary};
    }

    &:hover {
      svg {
        color: #FFFFFF;
      }
    }
  }

  div.text {
    flex: 1;
  }

  div.wrap {
    display: flex;
    align-items: center;

    & > div:first-child {
      width: 100%;
      position: relative;
      > svg {
        color: ${props => props.theme.colors.primary};
      }
      div {
        right: 0px;
        left: initial;
        top: 35px;
      }
    }
  }

  @media (min-width: 1201px) {
    div.wrap {
      & > div:first-child {
        left: 0;
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }

    button {
      font-size: 18px;
      width: 100%;
      svg {
        position: absolute;
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 425px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
`

export const MessagesIcon = styled.span`
  position: relative;
  cursor: pointer;
`

export const ExclamationWrapper = styled.div`
  position: absolute;
  transform: translate(75%, -25%);
  svg{
    font-size: 16px;
    color: ${props => props.theme?.colors?.primary}
  }
`

export const OrderPayInfoWrapper = styled.div`
  margin: 10px 0;
  ${props => props.theme?.rtl ? css`
    padding-left: 20px;
  ` : css`
    padding-right: 20px;
  `}
  h3 {
    font-size: 18px;
    margin: 0px;
  }
`

export const OrderPayInfoContent = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  > div {
    display: flex;
    flex-direction: column;
    span {
      color: #344050;
    }
    span.total {
      margin-top: 8px;
      font-weight: 600;
    }
  }
`

export const OrderPayMethodIcon = styled.div`
  border: 1px solid #B1BCCC;
  padding: 3px 10px;
  border-radius: 2px;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
  svg {
    font-size: 20px;
  }
`

export const OrderBillDivider = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 1px;
    background: #DEE2E6;
    margin: 0 40px;
  }
`

export const SectionContainer = styled.div`
  background: #FFF;
  margin-bottom: ${({ marginBottom }) => marginBottom || '25px'};
  padding: 15px 0px;

  div.accordion {
    margin: 0px;
  }
`

export const OrderBusinessHeaderImage = styled.div`
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 300px;
    display: block;
    object-fit: cover;
  }
`

export const ReviewWrapper = styled.div`
  .review-sent {
    border-radius: 7.6px;
  }
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`
