import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  button {
    width: 46%;
    margin-top: 20px;
  }
  
  @media (min-width: 768px){
    justify-content: flex-start;
    height: auto;
    button {
      width: 46%;
      margin-top: 20px;
    }
  }
`
export const UpsellingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
`

export const Item = styled.div`
  display: flex;
  border: 1px solid #eee;
  width: 70%;
  min-width: 150px;
  padding: 20px;
  margin: 15px 0;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 9px;
  box-sizing: border-box;

  @media (min-width: 490px) {
    width: 43%;
  }

  @media (min-width: 769px) {
    width: 27%;
    padding: 11px;
  }

  @media (min-width: 1024px) {
    width: 20%;
    margin: 10px 15px;
  }
`

export const Image = styled.div`
  width: 100%;
  img{
    width: 100%;
    height: auto;
    border-radius: 16px;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  div {
    width: 100%;
     h3 {
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
    }
  }
  p{
    color: ${props => props.theme.colors.primary};
    margin: 2px auto;
  }
  button {
    width: auto;
    margin: 8px auto 0;
    padding: 0 20px;
    font-size: 1em;
    line-height: 22px;

  }

  @media (min-width: 480px){
    div{
      h3{
        font-size: 14px;
      }
    }
  }

`

export const CloseUpselling = styled.div`
  width: 100%;
  text-align: center;

  button{
    width: 90%;
    font-size: 1.4em;
    padding: 10px 0;
  }

  @media (min-width: 720px){
    button{
      width: 40%;
      padding: 2px;
      font-size: 1em;
    }
  }
`

export const SkeletonContainer = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 9px;
  overflow: hidden;
`

export const HorizontalUpsellingContainer = styled.div`
  display: flex;
`

export const HorizontalItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 7.6px;
  margin-right: 15px;
  border: 2px solid #E9ECEF;
  box-sizing: border-box;
  padding: 10px 10px 6px 10px;

  ${props => props.theme.rtl && css`
    margin-left: 15px;
    margin-right: 0px;
  `}
`

export const HorizontalImage = styled.div`
  img {
    border-radius: 7.6px;
    width: 78px;
    height: 78px;
    margin-left: 5px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

  }
`

export const HorizontalDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 110px;
  h3 {
    width: 95px;
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  span {
    font-size: 12px;
    color: ${props => props.theme.colors.darkTextColor};

    &.discount {
      font-size: 10px;
      color: #909BA9;
      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }

  button {
    line-height: 22px;
    padding-left: 9px;
    padding-right: 9px;
    font-size: 12px;
    margin-top: 3px;
    border-radius: 50px;
    color: ${props => props.theme?.colors.primary};
    background: ${props => props.theme?.colors.primaryContrast}
  }
`
export const WrapAutoScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  margin-left: 10px;
`
