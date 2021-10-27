import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: 768px){
    justify-content: flex-start;
    height: auto;
  }
`
export const UpsellingContainer = styled.div`
  ${({ isCustomMode }) => isCustomMode ? css`
    width: 100%;
    > h1 {
      font-size: 20px;
      padding: 0 20px;
      color: ${props => props.theme.colors.grayDark};
    }
  ` : css`
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    width: 100%;
    justify-content: space-around;
  `}

  @media (min-width: 681px) {
    ${({ isCustomMode }) => isCustomMode && css`
      > h1 {
        padding: 0px;
      }
    `}
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  padding: 20px 15px 30px 15px;
  margin: 15px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  box-sizing: border-box;
  user-select: none;
  ${({ isCustomMode }) => !isCustomMode ? css`
    width: calc(100% - 30px);
  ` : css`
    width: 300px;
  `}

  @media (min-width: 768px) {
    ${({ isCustomMode }) => !isCustomMode && css`
      width: calc(50% - 30px);
    `}
  }

  @media (min-width: 1200px) {
    ${({ isCustomMode }) => !isCustomMode && css`
      width: calc(33% - 30px);
    `}
  }
`

export const Image = styled.div`
  width: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img{
    width: 100%;
    height: auto;
    border-radius: 7.6px;
    aspect-ratio: attr(width) / attr(height)
  }
  > button {
    position: absolute;
    font-size: 12px;
    padding: 0px 15px;
    bottom: -15px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  width: calc(100% - 95px);
  div {
    width: 100%;
     h3 {
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      color: ${props => props.theme.colors.secundary};
      text-align: initial;
    }
  }
  p {
    color: ${props => props.theme.colors.grayDark};
    font-weight: 500;
    margin: 0;
    text-align: initial;
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
        font-size: 16px;
      }
    }
  }

`

export const CloseUpselling = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;

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
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 9px;
  overflow: hidden;

  span {
    border-radius: 7.6px;
  }
`
