import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
    
  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    padding: 30px 30px 10px 30px;
    margin-bottom: 0;
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background: ${({ theme }) => theme?.colors?.tertiaryContrast ?? '#000'};
  `}
`

export const Header = styled.div``

export const WrappMap = styled.div`
  width: 100%;
  margin: auto;
`

export const Map = styled.div`
  font-size: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  h1{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: 600;
    font-size: 16px;
  }

  span {
    font-size: 13px!important;
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
    color: ${props => props.theme.colors.primary};
    margin-left: 10px;
    font-weight: normal;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: initial;
    `}
    ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
        color: ${theme?.colors?.gold};
        font-size: 16px!important;
      `}
  }
`
