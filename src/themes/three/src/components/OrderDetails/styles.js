import styled, { css } from 'styled-components'
export const OrderDetailsContainer = styled.div`
  padding-top: 110px;

  h1 {
    width: 91%;
    margin: 0 auto;
    font-size: 24px;
  }

  @media (min-width: 992px) {
    padding-top: 65px;
  }
`
export const MapContainer = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 40px;
  position: relative;

  > div {
    &: first-child {
      position: relative !important;
      width: 100% !important;
      height: 100% !important;
      border-radius: 15px;
    }
  }
`
export const WrapperContainer = styled.div`
  width: ${({ isLoading }) => isLoading ? '100%' : '80%'};
  margin: auto;
`
export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
  span:nth-child(2),span:nth-child(5){
      span{
        height: 100px;
      }
    }
  @media (min-width: 768px){
    span:nth-child(2), span:nth-child(5){
      span{
        height: 200px;
      }
    }
  }
`

export const DeliveryDate = styled.div`
  background: ${props => props.theme.colors.primary};
  display: inline-block;
  position: absolute;
  right: 10%;
  bottom: -20px;
  padding: 20px;
  color: #fff;
`

export const StatusBar = styled.div`
  width: 91%;
  margin: 30px auto;
  position: relative;
  height: 7px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)
  `}

  > div {
    position: absolute;
    top: -11px;
    width: 100%;
    display: flex;

    div {
      width: calc(100% / 3);
      text-align: right;
    }
  }
`

export const Step = styled.span`
  background: #fff;
  padding: 0 5px;
  display: inline-block;
  height: 30px;
  img {
    color: ${props => props.theme.colors.disabled};
    font-size: 24px;
    height: 100%;
    opacity: 0.5;
  }

  ${({ active }) => active && css`
    img {
      opacity: 1;
    }
  `}
`
