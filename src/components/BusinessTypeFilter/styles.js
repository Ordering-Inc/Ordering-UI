import styled, { css } from 'styled-components'

export const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  justify-content: flex-start;
  text-align: center;

  ::-webkit-scrollbar {
      opacity: 0
  }
  
  > div {
    margin: 0 auto;   
    > span {
      column-gap: 10px;
    }
    > div {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
  }

  .category{
    padding: 10px 7px;
  }

  ${({ noAutoScroll }) => noAutoScroll && css`
    > div {
      flex-wrap: wrap;
      column-gap: 20px;
      > div {
        width: inherit;
      }
    }
  `}

  @media (min-width: 480px){
    .category{
      padding: 10px 15px;
      column-gap: 50px;
    }
  }
`

export const ImageContainer = styled.div`
  width: 120px;
  height: 125px;
    img{
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
      padding: 4px 2px 0px 2px;
    }

  ${({ load }) => !load && css`
    opacity: 0;
  `}

  ${({ noAutoScroll }) => noAutoScroll && css`
    width: 70px;
    height: 75px;
  `}

  @media (max-width: 992px) {
    width: 75px;
    height: 80px;
  }

  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`
