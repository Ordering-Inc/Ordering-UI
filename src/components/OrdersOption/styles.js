import styled, { css } from 'styled-components'

export const OptionTitle = styled.div`
  width: ${({ isBusinessesPage }) => isBusinessesPage ? '80%' : '100%'};
  margin: ${({ isBusinessesPage }) => isBusinessesPage ? '10px 20px 0' : '0 auto'};
  padding: ${({ isBusinessesPage }) => !isBusinessesPage && '0 15px'};
  display: flex;
  flex-direction: row;
  h1{
    text-transform: capitalize;
    font-size: 18px;
    margin: 18px 0;
    cursor: pointer;
  }

  h1:nth-child(1){
    color: ${({ isActive }) => isActive === 'preorders' ? '#ccc' : '#333'};
    margin-right: 10px
  }

  h1:nth-child(2){
    color: ${({ isActive }) => isActive === 'preorders' ? '#333' : '#ccc'};
  }

  @media (min-width: 768px){
    padding: 0;
    width: 80%
  }
`

export const OrdersContainer = styled.div`
  ${({ activeOrders }) => activeOrders && css`
    padding: 0 10px;
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
    width: 98%;
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

  ${({ activeOrders }) => activeOrders && css`
    > * {
      margin: 5px;
    }
  `}

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

export const ImageNotFound = styled.div`
  
  margin: 0 auto;
  img{
    width: 100%
  }
`

export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;
  font-size: 0.9em;
  ${({ activeOrders }) => activeOrders && css`
      width: 30%;
  `}
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
    ${({ activeOrders }) => activeOrders && css`
      font-size: 0.8em;
    `}
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

  @media (min-width: 480px){
    h2 {
    font-size: 14px;
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    }
    p{
      ${({ activeOrders }) => activeOrders && css`
        font-size: 0.9em;
      `}
    }
    p[name='order_number']{
      width: 230px;
    }
  }

  @media (min-width: 768px){
    font-size: 0.9em;
    p {
      font-size: 1em;
    }
  }
`
