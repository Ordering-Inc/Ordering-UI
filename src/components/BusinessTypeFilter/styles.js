import styled, { css } from 'styled-components'

export const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  justify-content: stretch;
  text-align: center;
  > div{
    flex: 1;
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
  
`

export const ImageContainer = styled.div`
  width: 150px;
    img{
      border-radius: 50%;
      width: 100%;
      border: 1px solid transparent;
      padding: 4px 2px 0px 2px;
    }
     ${({ active }) => active && css`
      img {
        border-color: #D81313;
      }
  `}
  ${({ load }) => !load && css`
      opacity: 0;
  `}
`
