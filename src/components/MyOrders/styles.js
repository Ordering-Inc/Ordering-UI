import styled from 'styled-components'

export const MyOrdersContainer = styled.div`
  background-color: #f8f8f8;
 
`

export const ImageContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  > img{
    width: 100%
  }
`

export const MyOrdersTitle = styled.div`
  margin: 0 auto;
  width: 80%;
`

export const ActiveOrders = styled.div`
  text-align: center;
  display: flex;
  overflow: auto;
  width: auto;
  > :first-child {
    margin-left: 30px;
  };
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
`

export const Card = styled.div`
  min-width: 400px;
  margin: 10px;
  display: inline-block;
  background: white;
  height: 250px;
  border-radius: 16px;
  text-align: left;
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
  display: inline-flex;
  width: 95%;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
`
export const Logo = styled.div`
  width: 20%;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: contain;
  }
`
export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0 10px;
  width: 70%;
  > h5 {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
  }
  > p {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    color : #9A9A9A;
  }
  a{
    text-decoration: none;
  }
  p[name]{
    color: #D81313;
    cursor: pointer;
    text-decoration: none;
  }
  
`

export const OpenOrder = styled.div`
  height: 15%;
  width: 95%;
  margin: auto;
  > a {
    > button {
    width: 100%;
    height: 100%;
  }
  }
`
export const Price = styled.div`
  > h5 {
    margin-block-end: 1em;
    margin-block-start: 0;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 1em;
    color: #ff9300;
  }
`
export const OrdersPast = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  div[name]{
    height: 80%;
  }
  div:last-child{
    border-bottom: none;
  }
  p{
    margin-block-end: 0;
    margin-block-start: 0;
    color: #9A9A9A

  }
`
export const IndividualOrderPast = styled.div`
  width: 100%;
  display: flex;
  height: 140px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  
`
export const OrderPastContent = styled.div`
  display: inline-flex;
  width: 45%;
  align-items: center;
  padding: 10px 0;
  img{
  }
`
export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  > p {
    color: #53ad26;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  > button {
    margin: 5px 0;
    width: 80%
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
`

export const SkeletonContent = styled.div`
    display: inline-flex;
    width: 100%;
    > *{
      margin: 5px;
    }
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

export const SkeletonReorder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  left: 60%;
`
