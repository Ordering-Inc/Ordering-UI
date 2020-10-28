import styled from 'styled-components'

export const MyOrdersContainer = styled.div`
  @media(max-width: 768px){
    padding: 0 10px
  }
`

export const ImageContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  img{
    width: 100%
  }
`

export const MyOrdersTitle = styled.div`
  margin: 0 auto;
  width: 80%;
  @media(max-width: 768px){
    width: 100%;
  }
`

export const ActiveOrders = styled.div`
  text-align: center;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: auto;
  > :first-child {
    margin-left: 30px;
  };
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
  @media(max-width: 768px){
    > :first-child{
      margin-left: 0;
    }
  }
`

export const Card = styled.div`
  min-width: 400px;
  width: 400px;
  margin: 10px;
  display: inline-block;
  background: white;
  height: 250px;
  border-radius: 16px;
  text-align: left;
  @media(max-width: 480px){
    min-width: 300px;
    width: 300px;
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
  width: 75px;
  height: 75px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
  @media (max-width: 480px){
    width: 55px;
    height: 55px;
  }
`

export const PastLogo = styled.div`
  width: 75px;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 17px;
    object-fit: contain;
  }
  @media (max-width: 480px){
    width: 55px;
  }
`

export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;
  h5 {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    color : #9A9A9A;
    white-space: nowrap;
  }
  p[name='view_order'] {
    color: #D81313;
    cursor: pointer;
    text-decoration: none;
  }
  @media(max-width: 768px){
    font-size: 0.9em;
  } 
  @media(max-width: 480px){
    h5 {
    margin-block-end: 0;
    margin-block-start: 0;
    }
    p{
      font-size: 0.9em;
    }
  }
`

export const OpenOrder = styled.div`
  height: 15%;
  width: 95%;
  margin: auto;
  button {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 480px){
    button{
      font-size: 0.8em;
    }
  }
`
export const Price = styled.div`
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;
  h5 {
    margin-block-end: 1em;
    margin-block-start: 0;
  }
  p {
    margin-block-end: 0;
    margin-block-start: 1em;
    color: #ff9300;
  }
  @media (max-width: 640px){
    p{
      font-size: 0.8em;
    }
  }
`
export const OrdersPast = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
  div:last-child{
    border-top: none;
  }
  p{
    margin-block-end: 0;
    margin-block-start: 0;
    color: #9A9A9A
  }
  @media(max-width: 768px){
    width: 100%;
  }
  @media(max-width: 480px){
    div{
      border: none;
    }
  }
`
export const IndividualOrderPast = styled.div`
  width: 100%;
  display: flex;
  height: 140px;
  border-top: 1px solid #ccc;
  @media(max-width: 768px){
    height: 100px;
  }
`
export const OrderPastContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px 0;
  white-space: nowrap;
`
export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  p {
    color: #53ad26;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  button {
    margin: 5px 0;
    width: 60%
  }
  @media (max-width: 1024px){
    button{
      width: 80%;
    }
  }
  @media (max-width: 768px){
    button{
      width: 90%;
    }
  }
  @media (max-width: 578px){
    button{
      width: 100%;
    }
  }
  @media (max-width: 480px){
    width: 90px;
    font-size: 0.8em;
    button{
      width: 90%;
      font-size: 0.9em;
    }
  }
`

export const SkeletonOrder = styled.div`
  text-align: center;
  display: flex;
  width: auto;
  margin: 0 auto;
`

export const SkeletonCard = styled.div`
  margin: 20px 10px 20px 10px;
`

export const SkeletonMap = styled.div`
  border-radius: 16px;
  span{
    width: 400px;
    height: 100px;
  }
  @media(max-width: 480px){
    span{
      width: 300px;
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
  span:first-child span{
    width: 80px;
  }
  span:last-child{
    width: 150px;
    height: 30px;
  }
  @media(max-width: 480px){
    span:first-child span{
      width: 40px;
    }
    span:last-child{
      width: 75px;
    }    
  }
`
