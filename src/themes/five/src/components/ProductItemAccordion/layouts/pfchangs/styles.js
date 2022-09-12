import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: #FFF;
  border-bottom: 1px solid #D9D9D9;
  background: ${readOnlyMode => readOnlyMode ? 'transparent' : '#FFF'};
  box-sizing: border-box;
  ${({ readOnlyMode }) => readOnlyMode && css`
    color: #fff;
  `}
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  width: 100%;

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}

  h3 {
    font-size: 14px;
    margin: 0px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gold};
  }

  > div {
    > p {
      font-size: 10px;
      color: ${props => props.theme?.colors.darkGray};
      overflow-wrap: break-word;
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    margin: 0px;

    p {
      margin: 0px;
      font-size: 14px;
    }

    div {
      display: flex;

      span {
        height: 20px;
        svg {
          font-size: 20px;
          &:nth-child(1) {
            margin-right: 3px;
            ${props => props.theme?.rtl && css`
              margin-left: 3px;
              margin-right: 0px;
            `}
          }
        }
      }
    }
  }
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const ProductComment = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  p {
    font-size: 14px;
  } 
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h1,
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 20px;
    margin: 0px 5px;
  }
`

export const ProductError = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 18px;
    text-align: center;
  }

  @media (min-width: 411px){
    width: 35%;

    span{
      text-align: right;
    }
  }
`

export const ProductPrice = styled.p`
  font-weight: 500;
`

export const ProductNotAvailable = styled.span`
  color: #D81212;
`

export const ProductOptionsList = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  p:nth-child(1) {
    margin-bottom: 0;
  }

  p {
    font-weight: 400;
    margin: 0px;
    font-size: 12px;
  }

  li span {
    font-weight: 300;
  }

  li.ingredient {
    padding-left: 15px;
    ${props => props.theme?.rtl && css`
      padding-right: 15px;
      padding-left: 0px;
    `}
  }
`

export const ProductOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 10px;
    cursor: pointer;
  }
  h3:hover {
    text-decoration: underline;
  }
  p {
    font-size: 14px;
  }
  @media (min-width: 768px){
    h3{
        max-width: 250px;
    }
  }
  ${({ readOnlyMode }) => readOnlyMode && css`
    h3, p, div {
      color: white;
    }
  `}
`

export const PriceContainer = styled.div`
  svg{
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`
