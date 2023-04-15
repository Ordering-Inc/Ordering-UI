import styled, { css } from 'styled-components'

export const WraaperLogs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  border-radius: 97px;

  > button {
    margin-bottom: 15px;
    font-size: 14px;
    padding: 0 25px;
  }
`
export const SkeletonHitory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 20px;

  span {
    border-radius: 5px;
  }

  @media (max-width: 576px) {
    span {
      width: 250px !important;
    }
  }
`
export const BubbleConsole = styled.div`
  border-radius: 5px;
  padding: 5px 15px;
  max-width: 90%;
  margin-bottom: 15px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;

  @media (min-width: 1024px){
    max-width: 60%
  }
`

export const UppercaseText = styled.span`
  text-transform: uppercase;

  ${({ title }) => title && css`
    font-weight: 500;
    font-size: 16px;
    opacity: 0.8;
  `}
`
