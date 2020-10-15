import React from 'react'
import styled from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
`

const AccordionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.6s ease;
  margin: 0px 20px;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  div.info {
    display: flex;
    align-items: center;
    width: 65%;
    h1 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 20px;
      margin: 0px 5px;
    }
  }

  div.price {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div {
      display: flex;
    }
    span {
      font-weight: bold;
      font-size: 20px;
    }
    p {
      font-size: 20px;
      margin: 0px 5px;
    }
    svg {
      cursor: pointer;
    }

    @media (max-width: 512px) {
      span,
      p {
        font-size: 16px;
      }
    }

    @media (max-width: 360px) {
      span,
      p {
        font-size: 14px;
      }
    }
  }

  div.actions {
    display: flex;
    justify-content: flex-end;
    span svg {
      font-size: 20px;
      margin-right: 5px;
      cursor: pointer;
    }
    span.delete svg {
      color: #D81212;
    }
    span.edit svg {
      color: #F2BB40;
    }
  }

  div.error {
    width: 35%;
    display: flex;
    flex-direction: column;

    span {
      font-size: 18px;
      text-align: right;
    }
  }
`

export const Accordion = (props) => {
  const style = {}
  if (!props.isValid) {
    style.opacity = '0.5'
  }
  return (
    <AccordionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionStyled>
  )
}

export const WrapperProductImage = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;

  @media (max-width: 410px) {
    max-width: 65px;
    max-height: 65px;
    height: 65px;
    width: 65px;
  }
`

const ProductImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`

export const ProductImage = (props) => {
  return (
    <ProductImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ProductImageStyled>
  )
}

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  margin-left: 10px;
  width: 65%;
  h1.name, span {
    margin: 0px;
  }

  h1.name {
    font-size: 20px;
  }

  span {
    font-size: 18px;
    opacity: 0.8;
  }

  @media (max-width: 512px) {
    h1.name {
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  ul {
    list-style-type: none;
    p {
      font-weight: bold;
      margin-bottom: 0px;
    }

    li.ingredient {
      padding-left: 40px;
    }
  }
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const ProductActions = styled.div`
  display: flex;
  justify-content: center;

  button:disabled {
    opacity: 0.5;
  }
  > * {
    margin: 5px;
  }
`

export const ProductComment = styled.div`
  padding-left: 40px;

  p {
    font-weight: bold;
    margin: 0px;
  }

  h3 {
    font-weight: normal;
    text-transform: capitalize;
    margin: 0px 20px 0px 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
