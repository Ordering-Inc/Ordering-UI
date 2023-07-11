import styled, { css } from 'styled-components'

export const Contatiner = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  > button {
    height: 41px;
  }
  justify-content: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  > span:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 6px;
    ` : css`
      margin-right: 6px;
    `}
  }
`

export const WebsocketStatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;

  ${({ status }) => status === 0 && css`
    background-color: #FF9922;
  `}
  ${({ status }) => status === 1 && css`
    background-color: #00D27A;
  `}
  ${({ status }) => status === 2 && css`
    background-color: #E63757;
  `}
`
export const DateWrapper = styled.div`
  font-size: 12px;
  text-align: center;
`
export const InfoWrapper = styled.div`
  position: relative;
  ${props => props.theme?.rtl ? css`
    margin-left: 4px;
  ` : css`
    margin-right: 4px;
  `}

  > button {
    height: 25px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`

export const InfoContent = styled.div`
  position: absolute;
  bottom: 100%;
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 150px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  /* display: none; */
  color: ${props => props.theme?.colors?.darkTextColor};
  left: -100px;
    ${props => props.theme.rtl && css`
      right: -100px;
      left: initial;
    `}

  a {
    color: ${props => props.theme.colors.primary};
    transition: all 0.3s linear;
    cursor: pointer;
    margin-left: 5px;
    ${props => props.theme.rtl && css`
      margin-left: 0px;
      margin-right: 5px;
    `}
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 576px) {
    min-width: 350px;
    padding: 12px 15px;
    left: -200px;
    ${props => props.theme.rtl && css`
      right: -200px;
      left: initial;
    `}
  }

  @media (min-width: 993px) {
    min-width: 535px;
    left: -330px;
    ${props => props.theme.rtl && css`
      right: -330px;
      left: initial;
    `}
  }

`
export const DetailContainer = styled.div`
  margin-top: 10px;
  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  > p {
    font-size: 14px;
  }
`
export const StatusItemWrapper = styled.div`
  > div {
    display: flex;
    align-items: center;

    > span:first-child {
      margin: 0 16px;
    }
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.lightGray};

    ${props => props.theme?.rtl ? css`
      margin-right: 40px;
    ` : css`
      margin-left: 40px;
    `}
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  > button {
    border-radius: 8px;
    height: 40px;
    &:last-child {
      margin: 0 10px;
    }
  }
`

export const ButtonWrapper = styled.div`
  button{
    height: 41px;
      width: 175px;
      width: 175px;
    width: 175px;
  }

`
