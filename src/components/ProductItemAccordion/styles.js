import React from 'react'
import styled from 'styled-components'

const AccordionSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
`

export const AccordionSection = (props) => {
  const style = {}
  if (!props.isValid) {
    style.opacity = '0.5'
  }
  return (
    <AccordionSectionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionSectionStyled>
  )
}

export const Accordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.6s ease;

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
    span.delete,
    span.edit {
      svg {
        font-size: 20px;
        margin-right: 5px;
      }
    }
    span.delete svg {
      color: #D81212;
    }
    span.edit svg {
      color: #F2BB40;
    }
    p {
      font-size: 20px;
      margin: 0px 5px;
    }
    svg {
      cursor: pointer;
    }
  }

  div.error {
    width: 35%;
    display: flex;
    flex-direction: column;

    span {
      margin-right: 15px;
      font-size: 18px;
      text-align: right;
      svg {
        font-size: 24px;
        color: #D81212;
        cursor: pointer;
      }
    }
  }
`

export const WrapperProductImage = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

const ProductImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
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
  h1, span {
    margin: 0px;
  }

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 18px;
    opacity: 0.8;
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const ProductActions = styled.div`
  display: flex;
  justify-content: center;
  > * {
    margin: 5px;
  }
`
