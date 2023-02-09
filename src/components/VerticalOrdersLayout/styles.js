import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const SingleCard = styled.div`
  width: 100%;
  display: flex;
  max-height: 100px;
  height: auto;
  border-radius: 16px;
  padding: 10px;
  transition: all 0.3s ease;
  border-bottom: 1px solid #F5F6F6;
  cursor: pointer;

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    margin-bottom: 15px;
  `}

  @media(min-width: 480px){
    height: 140px;
    ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
      border-top: none !important;
    `}
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;
  }
`

export const OrderPastContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px 0;
  padding-right: 5px;
  min-width: 220px;

  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0px;
  `}
`

export const FavoriteWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${props => props.theme.colors.danger500};
    font-size: 16px;
  }
`

export const PastLogo = styled.div`
  width: 75px;
  height: 100%;
  ${({ isMulti }) => isMulti && css`
      width: 55px;
      min-width: 55px;
      height: 55px;
      min-height: 55px;
      margin: 3px;
    `}
  img {
    width: 100%;
    height: 100%;
    border-radius: 17px;
    object-fit: contain;
  }
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;
`

export const WrapperBusinessTitle = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;

  @media (min-width: 480px) {
    width: 95%;
  }
`

export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;

  button {
    border-radius: 8px;
    font-size: 10px;
    line-height: 15px;
    padding: 10px;
    overflow: inherit;
    text-overflow: inherit;
    border: 1px solid ${props => props.theme.colors.primaryContrast};
    margin: 5px 0;

    &.reorder {
      background: ${props => props.theme.colors.primaryContrast};
      &:hover {
        background: ${props => props.theme.colors.primary};
      }
    }
  }

  ${props => props.theme?.rtl && css`
      margin-left: 25px;
      margin-right: 0;
  `}

  p {
    color: #53ad26;
    margin-block-start: 0;
    margin-block-end: 0;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  @media (min-width: 480px){
    font-size: 1em;
    button{
      width: 90%;
      font-size: 0.9em;
    }
    flex-direction: row;
    gap: 10px;
    margin-right: 25px;
  }

  @media (min-width: 768px){
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
    button{
      width: 80%;
    }
  }

  @media (min-width: 1024px){
    button{
      width: 50%;
    }
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .dot {
    display: none;
  }

  @media (min-width: 480px){
    flex-direction: row;
    align-items: center;
    .dot {
      display: block;
    }
  }
`

export const WrappButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 20px auto;

  button {
    padding: 10px 0px;
    width: 100%;
  }

  button:hover{
    color: ${props => darken(0.07, props.theme.colors.primary)};
  }

  @media (min-width: 768px) {
    button {
      width: 60%;
    }
  }
`
export const ReviewWrapper = styled.div`
  .review-sent {
    border-radius: 7.6px;
  }
`

export const MultiLogosContainer = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 480px) {
    display: flex;
  }
`
