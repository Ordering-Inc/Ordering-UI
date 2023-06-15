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
export const BubbleConsole = styled.div`
  border-radius: 5px;
  padding: 10px 25px;
  margin-bottom: 20px;
  background: ${props => props.theme.colors.secundary};
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  max-width: 80%;
`
export const TimeofSent = styled.p`
  position: relative;
  font-size: 0.8em;
  margin-block-start: 0.2em;
  margin-block-end: initial;
  width: fit-content;
  cursor: pointer;
  font-weight: 600;
  
  ${props => props.theme?.rtl ? css`
    margin-right: auto;
  ` : css`
    margin-left: auto;
  `}
`
export const Reason = styled.p`
  text-align: center;
  margin: 0px;
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
