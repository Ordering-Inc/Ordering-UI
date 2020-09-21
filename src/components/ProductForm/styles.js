import React from 'react'
import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  height: 500px;
  padding: 10px 0px;
`

export const WrapperImage = styled.div`
  width: 50%;
  border-radius: 10px;
  margin-right: 10px;
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
  width: 50%;
  padding: 0px 10px;

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

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
  margin: 10px 0px;
  p {
    font-weight: bold;
    margin-bottom: 5px;
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
`
