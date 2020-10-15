import React from 'react'
import styled from 'styled-components'

const AccordionSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #BFBFBF;
  padding: 10px 0px;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
`

export const AccordionSection = (props) => {
  const style = {}
  if (props.isClosed) {
    style.filter = 'brightness(0.4)'
    style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
  } else {
    style.background = '#F8F8F8 0% 0% no-repeat padding-box'
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
  cursor: ${({ isClosed }) => isClosed ? 'not-allowed' : 'pointer'};
  transition: background-color 0.6s ease;
  position: relative;
  margin: 0px 20px;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

const BusinessLogoStyled = styled.div`
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

export const BusinessLogo = (props) => {
  return (
    <BusinessLogoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </BusinessLogoStyled>
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
    display: flex;
    align-items: center;
    svg {
      margin-right: 3px;
    }
  }

  @media (max-width: 410px) {
    h1 {
      font-size: 18px;
    }
  }
`

export const AccordionContent = styled.div`
  overflow: auto;
  transition: max-height 0.6s ease;
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const BusinessTotal = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 20px;
    margin: 0px 5px;

    &:nth-child(1) {
      font-weight: bold;
    }
  }

  @media (max-width: 410px) {
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 360px) {
    p {
      font-size: 14px;
    }
  }
`

export const BusinessActions = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    font-size: 28px;

    &:not(:last-child) {
      margin-right: 5px;
    }

    &:nth-child(1) {
      color: #CCC;
    }

    &:nth-child(2) {
      color: #D81212;
    }
  }
`
