import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const SingleCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  max-height: 100px;
  height: auto;
  box-sizing: border-box;
  padding: 10px;
  min-width: 220px;

  @media (min-width: 768px){
    margin: 10px;
    width: calc(50% - 20px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    border-radius: 7.6px;
  }

  @media (min-width: 1024px){
    width: calc(33.3% - 20px);
  }
`

export const PastLogo = styled.div`
  width: 64px;
  height: 64px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  border-radius: 7.6px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 768px){
    width: 75px;
    height: 75px;
    filter: none;
  }
`

export const WrapperBusinessTitle = styled.div`
  width: 95%;
  h2 {
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: #344050;
  }
`

export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;

  p {
    color: #53ad26;
    margin-block-start: 0;
    margin-block-end: 0;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  button {
    margin: 5px 0;
    width: 100%;
    font-size: 0.9em;
    white-space: nowrap;
  }

  @media (min-width: 480px){
    font-size: 1em;
    button{
      width: 90%;
      font-size: 0.9em;
    }
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
export const OrderDate = styled.div`
  display: flex;
  p {
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: auto;
    max-width: 95%;
    display: block;
    overflow: hidden
  }

`

export const OrderState = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  color: ${props => props.theme.colors.primary};
  margin-top: 5px;
`
export const Floting = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 64px;
  ${props => props.theme?.rtl && css`
    right: unset;
    left: 10px;
 `}

 button {
  background: ${props => lighten(0.35323, props.theme.colors.primary)};
  border: none;
  border-radius: 50px;
  font-size: 10px;
  line-height: 15px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.primary};
  &.review {
    background: transparent;
    border: 1px solid ${props => lighten(0.35323, props.theme.colors.primary)};
  }
 }
`

export const OrderPrice = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: #344050;
`
