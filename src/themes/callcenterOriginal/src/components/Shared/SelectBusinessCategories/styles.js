import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const AccordionSection = styled.div`
`

const AccordionStyled = styled.div`
  cursor: pointer;
  transition: background-color 0.6s ease;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
    ${props => props.theme?.rtl ? css`
      margin-left: 14px;
    ` : css`
      margin-right: 14px;
    `}
  }

  @media (min-width: 411px){
    flex-direction: row;
  }
`

export const Accordion = (props) => {
  const style = {}
  return (
    <AccordionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionStyled>
  )
}

export const AccordionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;

  > div {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 600;
      margin: 0 12px;
    }
  }

  ${({ isProduct }) => isProduct && css`
    > div {
      span {
        font-weight: 400;
      }
    }
  `}

  ${props => props.theme?.rtl ? css`
    margin-right: ${({ margin }) => `${margin}px` || '0px'};
  ` : css`
    margin-left: ${({ margin }) => `${margin}px` || '0px'};
  `}
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
`

export const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  > * {
    &:not(:first-child) {
      margin: 0 5px;
    }
  }
`
