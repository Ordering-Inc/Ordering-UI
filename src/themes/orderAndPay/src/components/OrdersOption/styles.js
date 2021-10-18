import styled, { css } from 'styled-components'

export const OptionTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  h1{
    text-transform: capitalize;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
  }
`

export const OrdersContainer = styled.div`
  ${({ activeOrders }) => activeOrders && css`
    text-align: center;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: ${({ ordersLength }) => !ordersLength ? 'flex-start' : 'center'};
    width: 100%;
    margin: auto 0px auto auto;
    box-sizing: border-box;
    ${props => props.theme?.rtl && css`
      margin: auto auto auto 0px;
    `}
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    ${({ isSkeleton }) => !isSkeleton && css`   
      ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      }
      ${({ ordersLength, isBusinessesPage }) => !ordersLength && !isBusinessesPage && css`
        > div {
          margin-left: -10px;
          ${props => props.theme?.rtl && css`
            margin-left: 0;
            margin-right: -10px;
          `}
        }
        > div:first-child{
          margin-left: -15px;
          ${props => props.theme?.rtl && css`
            margin-left: 0;
            margin-right: -15px;
          `}
        }
      `}
    `}
    
    @media (min-width: 768px) {
      width: ${({ isBusinessesPage }) => isBusinessesPage ? '100%' : '90%'};
      justify-content: flex-start;
      ${({ isSkeleton, ordersLength }) => !isSkeleton && !ordersLength && css`
      > div:first-child{
        ${({ isBusinessesPage }) => !isBusinessesPage && css`
          margin-left: -10px;
          ${props => props.theme?.rtl && css`
            margin-left: 0;
            margin-right: -10px;
          `}
        `}
      }
      `
    }
  `}

  ${({ activeOrders }) => !activeOrders && css`
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    p{
      margin-block-end: 0;
      margin-block-start: 0;
      color: #9A9A9A
    }

    @media(min-width: 480px){
      div:last-child {
        border-top: none;
      }
    }
  `}
`

export const SkeletonOrder = styled.div`
  display: flex;

  ${({ activeOrders }) => activeOrders && css`
    width: auto;
    text-align: center;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
  `}

  ${({ activeOrders }) => !activeOrders && css`
    width: 100%;
    flex-direction: column;
    margin: 10px 0;
    > * {
      margin: 20px 0;
    }
  `}
`

export const SkeletonCard = styled.div`
  margin: 10px 5px 10px 5px;
`

export const SkeletonMap = styled.div`
  border-radius: 16px;
  span{
    width: 300px;
    height: 88px;
  }
  @media(min-width: 480px){
    span{
      height: 100px;
      width: 400px;
    }
  }
`

export const SkeletonContent = styled.div`
  display: flex;
  width: 100%;
  ${({ activeOrders }) => !activeOrders && css`
    justify-content: space-between;
  `}
`

export const SkeletonText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
`

export const SkeletonButton = styled.div`
    span{
      border-radius: 24px;
      width: 270px;
      height: 36px;
    }
  @media(min-width: 480px){
    span{
      width: 360px;
    }
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

export const ImageNotFound = styled.div`
  
  margin: 0 auto;
  img{
    width: 100%
  }
`

export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 70%;
  padding-left: 5px;
  ${({ activeOrders }) => activeOrders && css`
      width: 30%;
  `}
  ${props => props.theme?.rtl && css`
    padding-right: 5px;
    padding-left: 0;
  `}
  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    margin-block-end: 0;
    margin-block-start: 0;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    color : #9A9A9A;
    white-space: nowrap;
    font-size: 10px;
  }

  p[name='order_number']{
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p[name='view_order'] {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
  }

  p[name='order_status'] {
    color: ${props => props.theme.colors.orderStatus} !important;
  }

  @media (min-width: 480px){
    h2 {
    font-size: 14px;
    }
    p{
      ${({ activeOrders }) => activeOrders && css`
        font-size: 12px;
      `}
    }
    p[name='order_number']{
      width: 230px;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 30px;
  h1{
    text-transform: capitalize;
    font-size: 18px;
    cursor: pointer;
    margin: 0;
    font-weight: 600;
  }
`

export const Container = styled.div`
  padding: 30px 40px;
`
