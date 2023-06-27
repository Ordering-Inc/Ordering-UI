import styled from 'styled-components'
import React from 'react'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 0;
    margin-bottom: 24px;
  }
  > p {
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
  }
`
export const GiftCardsListContainer = styled.div`
  padding: 30px 20px;
`
export const GiftCardsWrapper = styled.div`
  margin-bottom: 10px;
`
export const GiftCardItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
  padding: 20px 0;

  > span {
    font-size: 16px;
  }
`
export const IconControl = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primary};
  svg {
    font-size: 24px;
  }

  svg[disabled] {
    color: ${props => props.theme.colors.lightGray};
  }
`
export const ActionButtonContainer = styled.div`
  position: sticky;
  bottom: 0px;
  background-color: ${props => props.theme.colors.backgroundPage};
  padding: 15px 20px;
  > button {
    height: 44px;
    width: 100%;
  }
`

export const CardImageStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 38px;
  width: 38px;
  min-width: 38px;
  min-height: 38px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0,0,0,0.1);
  margin: 0 12px;
`
export const CardImage = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)'
  }
  return (
    <CardImageStyled {...props} style={style}>
      {props.children}
    </CardImageStyled>
  )
}
