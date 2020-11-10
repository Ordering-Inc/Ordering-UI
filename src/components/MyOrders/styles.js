import styled, { css } from 'styled-components'

export const MyOrdersContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  img{
    width: 100%
  }
`

export const MyOrdersTitle = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  h1{
    font-size: 18px;
    margin: 18px 0;
  }

  @media (min-width: 768px){
    padding: 0;
    width: 80%
  }
`

export const ActiveOrders = styled.div`
  text-align: center;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: auto;
  > div{
    margin-right: -15px;
    margin-left: -15px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

`

export const Card = styled.div`
  min-width: 290px;
  width: 290px;
  margin: 10px;
  display: inline-block;
  background: white;
  height: 250px;
  border-radius: 16px;
  text-align: left;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  @media (min-width: 360px){
    min-width: 300px;
    width: 300px;
  }

  @media (min-width: 480px){
    min-width: 400px;
    width: 400px;
  }

`

export const Map = styled.div`
  width: 100%;
  height: 40%;
  img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
`
export const Logo = styled.div`
  width: 55px;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  @media (min-width: 480px){
    width: 75px;
   height: 75px;
  }
`

export const PastLogo = styled.div`
  width: 55px;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 17px;
    object-fit: contain;
  }
  @media (min-width: 480px){
    width: 75px;
  }
`

export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;
  font-size: 0.9em;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0;
  `}
  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    margin-block-end: 0;
    margin-block-start: 0;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    color : #9A9A9A;
    white-space: nowrap;
    font-size: 0.9em;
  }
  p[name='view_order'] {
    color: #D81313;
    cursor: pointer;
    text-decoration: none;
  }

  
  @media (min-width: 480px){
    h2 {
    font-size: 14px;
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    }
  }

  @media (min-width: 768px){
    font-size: 0.9em;
    p {
      font-size: 1em;
    }
  } 

`

export const OpenOrder = styled.div`
  height: 15%;
  width: 90%;
  margin: auto;
  button {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }

  @media (min-width: 480px){
    button{
      font-size: 1em
    }
  }
`
export const Price = styled.div`
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;
  h2 {
    font-size: 14px;
    margin-block-end: 1em;
    margin-block-start: 0;
  }
  p {
    margin-block-end: 0;
    margin-block-start: 1em;
    color: #ff9300;
    font-size: 0.8em;
  }

  @media (min-width: 768px){
    p{
      font-size: 1em;
    }
  }
`
export const OrdersPast = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;

  p{
    margin-block-end: 0;
    margin-block-start: 0;
    color: #9A9A9A
  }
  
  @media(min-width: 480px){
    width: 80%;
    padding: 0;
      div:last-child{
      border-top: none;
    }
  }
`
export const IndividualOrderPast = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  border: none;
  @media(min-width: 480px){
    height: 140px;
    border-top: 1px solid #ccc;
  }
`
export const OrderPastContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px 0;
  padding-right: 5px;
  min-width: 220px;
  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0px;
  `}
`

export const WrapperBusinessTitle = styled.div`
  width: 95%
`

export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  margin-right: 25px;

  ${props => props.theme?.rtl && css`
      margin-left: 25px;
      margin-right: 0;
  `}

  p {
    color: #53ad26;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  button {
    margin: 5px 0;
    width: 100%;
    font-size: 0.9em;
    white-space: nowrap;
  }



  @media (min-width: 480px){
    font-size: 1em;
    button{
      width: 90%;
      font-size: 0.9em;
    }
  }

  @media (min-width: 768px){
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
    button{
      width: 80%;
    }
  }

  @media (min-width: 1024px){
    button{
      width: 50%;
    }
  }

  
`

export const SkeletonOrder = styled.div`
  text-align: center;
  display: flex;
  width: auto;
  margin: 0 auto;
  margin-left: 30px;
  ${props => props.theme?.rtl && css`
    margin-right: 30px;
    margin-left: 0;
  `}
`

export const SkeletonCard = styled.div`
  margin: 20px 5px 20px 5px;
`

export const SkeletonMap = styled.div`
  border-radius: 16px;
  span{
    width: 300px;
    height: 100px;
  }
  @media(min-width: 480px){
    span{
      width: 400px;
    }
  }
`

export const SkeletonContent = styled.div`
  display: flex;
  width: 100%;
  > *{
      margin: 5px;
  }
`
export const SkeletonPastContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const SkeletonText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
`

export const SkeletonOrdersPast = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  > *{
    margin: 20px 0;
  }
`

export const SkeletonInformation = styled.div`
  display: flex;
  > *{
      margin: 5px;
    }
`

export const SkeletonReorder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  margin-right: 25px;
  ${props => props.theme?.rtl && css`
    margin-left: 25px;
    margin-right: 0;
  `}
  span:first-child span{
    width: 40px;
  }
  span:last-child{
    width: 75px;
    height: 30px;
  }
  @media(min-width: 480px){
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
    span:first-child span{
      width: 80px;
    }
    span:last-child{
      width: 150px;
    }    
  }
`
