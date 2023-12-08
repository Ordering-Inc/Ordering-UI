import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-bottom: 40px;

  p.order-status {
    text-align: center;
    color: ${props => props.theme.colors.primary || 'black'};
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
  }
`

export const OrderTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div.left {
    grid-column: 1;
  }
  div.center {
    grid-column: 2;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0;
    margin: 0;
  }

  p {
    justify-content: left;

    a {
      text-decoration: underline !important;
      color: #0000EE !important;
    }
  }
`

export const StatusBarContainer = styled.div`
  position: relative;
  height: 12px;
  margin: 18px 0px 8px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%);
  `}
`

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  font-size: 35px;
  transform: translateY(-50%);
  color: #FFFFFF;
  left: calc(${props => props.position}% - 25px);

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  width: 50px;
  height: 50px;
  background-color: ${props => props.bgColor || props.theme.colors.disabled};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DelayedTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  div.ring1 {
    border: 6px solid ${props => props.theme.colors.primary};
    padding: 5px;
    border-radius: 50%;
  }
  div.ring2 {
    border: 9px solid ${props => props.theme.colors.primary};
    padding: 5px;
    border-radius: 50%;
  }
  div.time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    padding: 10px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    color: #FFF;
    text-align: center;

    p {
      margin: 0;
      padding: 0;
      font-size: 14px;
    }

    span {
      font-size: 18px;
    }
  }
`

export const ReviewedText = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7.6px;
  padding: 20px;
  box-shadow: 0px 4px 10px 0px #0000001F;
  margin: 55px 0 30px;

  p {
    font-weight: bold;
    text-align: center;
  }
`

export const MapWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`

export const Map = styled.div`
  margin-bottom: 10px;
  width: 100%;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }

  img {
    object-fit: cover;
  }
`
