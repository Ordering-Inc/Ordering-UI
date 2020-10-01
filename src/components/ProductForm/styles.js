import React from 'react'
import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 10px 0px;
  padding-left: 15px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    overflow: auto;
  }
`

export const WrapperImage = styled.div`
  width: calc(50% - 10px);
  border-radius: 16px;
  /*margin-right: 10px;*/

  @media (max-width: 1200px) {
    height: 300px;
    width: 100%;
    /*margin-bottom: 10px;*/
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
    white-space: nowrap;
    margin-top: 0px;
  }

  p {
    font-size: 16px;
    font-weight: 200;
    text-align: left;
    margin-top: 0px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
}

  @media (max-width: 1200px) {
    width: 100%;
    h1 {
      text-align: center;
    }
  }
`

export const ProductEdition = styled.div`
  overflow: auto;
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
      border: 1px solid #000;
      color: #000;
    }
  }

  button.add {
    width: 65%;
    padding: 5px 10px;
    span:last-child {
      float: right;
      margin-right: 10px;
    }
  }

  button.disabled {
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    > * {
      margin: 10px 0;
    }
    div{
      width: 80%;
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
`
