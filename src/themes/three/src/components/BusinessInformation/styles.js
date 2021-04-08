import styled, { css } from 'styled-components'

export const BusinessInformationContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`
export const BussinessTitle = styled.div`
  z-index: 1000;
  display: inline-flex;
  width: 50%;
  background: #ffffff;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  padding: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}
`

export const HeaderImage = styled.div`
  width: 20%;
  margin-top: auto;
  > img {
    width: 100%;
    height: 100%;
  }
`
export const Information = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  > h5 {
    margin-block-end: 0.8em;
    margin-block-start: 0.8em;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 0.3em;
    > svg {
      vertical-align: middle;
    }
  }
`

export const BusinessContent = styled.div`
  background: #FFF;
`

export const BusinessInnerContent = styled.div`
  padding: 20px;
`

export const SectionTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin-top: 0px;
  margin-bottom: 10px;
`

export const Map = styled.div`
  width: 100%;
  height: 40vh;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const ScheduleSection = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
  svg {
    margin-top: 5px;
  }
`

export const ScheduleContainer = styled.div`

`

export const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0px 0px 3px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors?.darkTextColor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    margin: 0px;
    font-size: 14px;
    color: ${props => props.theme.colors?.darkGray};
  }
`

export const BusinessMediaContent = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    > img,
    > iframe {
      object-fit: cover;
      border-radius: 10px;
      margin: 10px 10px;
      width: calc(100% - 12px);
      cursor: pointer;

      @media (min-width: 481px) {
        width: calc(50% - 20px);
      }

      @media (min-width: 681px) {
        width: calc(33% - 20px);
      }

      @media (min-width: 993px) {
        width: calc(25% - 20px);
      }
    }
  }
`

export const ModalIcon = styled.span`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  left: 5px;
  top: 5px;
  z-index: 1;
  background: rgba(0,0,0,0.3);
  ${props => props.theme?.rtl && css`
    right: 5px;
    left: initial;
  `}
  @media (min-width: 578px){
    left: 10px;
    ${props => props.theme?.rtl && css`
    right: 10px;
    left: initial;
  `}
  }
  @media (min-width: 768px){
    left: 5px;
    ${props => props.theme?.rtl && css`
    right: 5px;
    left: initial;
  `}
  }
`

export const Description = styled.p`
  margin: 0 10px;
`

export const ImageContainer = styled.div` 
  max-height: 500px;
  img{
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
export const BusinessAddressContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  border-top: 1px solid #CCC;
  border-bottom: 1px solid #CCC;

  div {
    width: 100%;
    &:last-child {
      h5:not(:last-child) {
        margin-top: 0px;
      }
    }
  }

  @media (min-width: 769px) {
    flex-wrap: nowrap;
    div {
      width: 50%;
      &:last-child {
        h5:not(:last-child) {
          margin-top: 22.1776px;
        }
      }
    }
  }
`
