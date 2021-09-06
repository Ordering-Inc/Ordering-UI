import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  ${props => props.isSkeleton && css`
    background-color: #F8F8F8;
  `}
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const BusinessName = styled.div`
  position: relative;
  padding: 50px 20px;
  background-color: ${props => props.theme.colors.primary};
  
  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    color: #fff;
    box-sizing: border-box;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  ${props => props.isClosed && css`
    h2 {
      opacity: 0.5;
    }
  `}

  @media (min-width: 768px) {
    display: flex;
    width: 35%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 3%;

  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 32px;
      line-height: 42px; 
    }
  }
`
export const BusinessHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-height: 260px;
  height: 260px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  border-radius: 0px;
  ${props => props.bgimage && !props.isClosed && css`
    background-image: url(${props.bgimage});
  `}
  ${props => props.bgimage && props.isClosed && css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${props.bgimage});
  `}
  @media (min-width: 768px) {
    width: 65%;
  }
`
export const CloseOverall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000082;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #FFF;
    opacity: 0.7;
  }
`

export const BuinessMeta = styled.div`
  font-size: 14px;
  line-height: 26px;
  color: #fff;
  margin:0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const MetaItem = styled.div`
  display: flex;
  span {
    margin-right: 7px;
    ${props => props.theme?.rtl && css`
        margin-right: 0px;
        margin-left: 7px;
    `}
  }
`

export const ScheduleDate = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`
export const ScheduleTime = styled.p`
  margin: 0px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ScheduleTitle = styled.span`
  margin-right: 7px;
  ${props => props.theme?.rtl && css`
    margin-right: 0px;
    margin-left: 7px;
 `}
`
