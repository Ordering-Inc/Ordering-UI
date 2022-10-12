import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  > span {
    padding: 10px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    color: #FFFFFF;
    border-radius: 7.6px;

    span {
      margin: 0;
      font-size: 14px;
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `} 
    }
    svg {
      font-size: 16px;
    }
  }
  ${({ theme }) => theme?.layouts?.header?.components?.cart?.components?.layout?.type === 'pfchangs' && css`
    button {
      margin-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: relative;
        margin-left: ${({ isHideCartText }) => isHideCartText ? '0px' : '7px'};
        top: -2px;
      }
    }
  `}
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 8px;
  line-height: 30px;
  margin-top: 0;
  text-align: center;

  @media (min-width: 576px) {
    text-align: left;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    border-radius: 16px;
    svg{
      margin-right: 5px;
    }
  }

  ${({ theme }) => theme?.layouts?.header?.components?.cart?.components?.layout?.type === 'pfchangs' && css`
    justify-content: flex-end;
    margin: 20px 20px 0 0;
    svg{ 
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  `}
`

export const CartLength = styled.span`
  color: #000;
  background: #fff;
  border-radius: 50%;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  p{
    margin: 0;
    position: relative;
    font-size: 12px;
    bottom: 3px;
  }
`

export const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 1px 0px 8px 2px #ccc;
`
