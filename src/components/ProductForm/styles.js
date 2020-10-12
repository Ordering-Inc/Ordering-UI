import React from 'react'
import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  height: 80vh;
  padding: 10px 0px;
  padding-left: 15px;
  position: relative;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    overflow: auto;
  }

  @media (max-width: 576px) {
    padding-left: 0px;
  }

  @media (max-width: 480px) {
    height: 90vh;
  }
`

export const WrapperImage = styled.div`
  width: calc(50% - 10px);
  border-radius: 16px;

  @media (max-width: 1200px) {
    height: 300px;
    width: 100%;
  }
`

const ProductImageStyled = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  background-position: center;
  object-fit: cover;
  border-radius: 10px;
`
export const ProductImage = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <ProductImageStyled {...props} style={style}>
      {props.children}
    </ProductImageStyled>
  )
}

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
  padding: 10px;

  h1 {
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0px;
  }

  p {
    font-size: 16px;
    font-weight: 200;
    text-align: left;
    margin-top: 0px;

    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}

  @media (max-width: 1200px) {
    width: 100%;
    h1 {
      text-align: center;
    }
  }

  @media (max-width: 410px) {
    padding: 10px 0px;
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`

export const ProductEdition = styled.div`
  overflow: auto;
  .error {
    background-color: #FFC917;
  }
`

export const SectionTitle = styled.h3`
  font-size: 20px;
  padding: 15px;
  margin: 0px;
  text-transform: capitalize;
  background-color: #F7F7F7;
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 300;
    margin-bottom: 5px;
  }
  textarea{
    font-size: 1.5em;
    padding: 5px;
    margin: 1px;
    border: 1px solid #000
  }
`

export const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  width: 100%;

  div {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button.incdec {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000;
      color: #000;
    }
  }

  button:disabled,
  button.disabled {
    opacity: 0.5;
  }

  button.add {
    width: 65%;
    padding: 5px 10px;
    span:last-child {
      float: right;
      margin-right: 10px;
    }
    &.soldout {
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    > * {
      margin: 10px 0;
    }
    div {
      width: 60%;
      margin: 10px 0;
      button.incdec {
        width: 50px;
        height: 50px;
        font-size: 2em;
        padding-bottom: 2px
      }
      span{
        font-size: 2em;
      }
    }
  }

  @media (max-width: 576px) {
    div {
      button.incdec {
        width: 35px;
        height: 35px;
      }
      span{
        font-size: 1.5em;
      }
    }
    button.add {
      width: 100%;
    }
  }

  @media (max-width: 480) {
    div {
      width: 80%;
    }
  }
`
