import styled, { css } from 'styled-components'
export const BusinessContainer = styled.div`
  position: relative;  
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  ${props => props.isClosed && css`
    background-color: #B8B8B8;
  `}
  ${props => props.isSkeleton && css`
    background-color: transparent ;
    span {
      margin: 2px 0;
    }
  `}
  h1 {
    color: #FFF;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 10px;
    padding: 0;
  }
  @media (min-width: 381px) {
    padding: 10px 35px;
  }
  @media (min-width: 1024px) {
    padding: 0;
  }
`
export const BusinessContent = styled.div`
  display: flex;
  position: relative;
`
export const BusinessInfo = styled.div`
  display: flex;
`
export const BusinessInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    h2 {
      margin-top: 0;
      margin-bottom: 5px;
    }
    p {
      align-items: center;
      margin: 0px;
      overflow: hidden;
      /* white-space: nowrap; */
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
      svg {
        margin-right: 4px;
        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
        `}
        &.start {
          color: #FFC917;
        }
      }
      &.bold {
        font-weight: 600;
      }
      &.type {
        margin-bottom: 5px;
        ${props => props.theme?.colors.fontSecundary
            ? css`
                color: ${props => props.theme?.colors.fontSecundary};
            `
            : css`
                color: #b5b4b4;;
            `
        }        
      }
    }
    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
  .meta {
    width: 300px;
    @media (min-width: 381px) {
      width: 350px;
    }
  }
`

export const BusinessInfomation = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  svg {
    font-size: 20px;
  }

  &:hover svg{
    font-size: 21px;
  }
`
