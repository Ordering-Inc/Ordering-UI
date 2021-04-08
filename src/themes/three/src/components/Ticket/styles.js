import styled, { css } from 'styled-components'
import React from 'react'

export const TicketContainer = styled.div`
  width: 100%;
`
export const HeroContainerStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 90%;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

`

export const HeroContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const HeroInnerContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const TitleConatiner = styled.div`
  h1 {
    margin: 0px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const OrderBillInfo = styled.div`
  > div {
    display: flex;
    column-gap: 5px; 
    align-items: baseline;

    strong {
      font-size: 20px;
    }
  }
`

export const BusinessInfo = styled.div`
  font-size: 20px;
  font-weight: 500;
`

export const TicketContent = styled.div`
  padding: 20px;

  @media print {
    .accordion {
      flex-direction: row;
    }
  }
`

export const ExportMethodsContainer = styled.div`
  padding: 0 20px;
`

export const MethodWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.secundary};
  padding-bottom: 10px;

  span {
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    text-decoration: underline;
  }
`
