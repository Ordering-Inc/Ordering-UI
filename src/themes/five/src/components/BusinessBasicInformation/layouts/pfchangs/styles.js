import styled, { css } from 'styled-components'
export const BusinessInfoContainer = styled.div`
  margin-bottom: ${({ bgimage }) => bgimage ? '420px' : '0px'};
`

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 400px;
  height: 400px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 0;
  position: absolute;
  left: 0;
  border-bottom: 1px solid #fff;
  ${props => props.isSkeleton && css`
    background-color: #cccccc;
  `}

  ${props => props.bgimage && !props.isClosed && css`
    background-image: url(${props.bgimage});
  `}

  ${props => props.bgimage && props.isClosed && css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage});
  `}

  ${props => !props.bgimage && css`
    display: none;
  `}
  @media (min-width: 490px) {
    justify-content: flex-start;
  }
`

export const DeliveryPickupContainer = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  border-radius: 0px;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  height: 52px;
  background-color: transparent;
  width: 300px;
  margin-bottom: 10px;
  button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    z-index: 1;
  }

  &::after {
    ${({ orderTypeSelected }) => orderTypeSelected === 1 ? css`
      content: "";
      background:  ${({ theme }) => theme.colors.gold};
      position: absolute;
      transition: all 0.2s linear 0s;
      left: 6px;
      bottom: 5px;
      height: calc(100% - 10px);
      width: calc(50% - 6px);
    ` : css`
      content: "";
      background: ${({ theme }) => theme.colors.gold};
      position: absolute;
      transition: all 0.2s linear 0s;
      bottom: 5px;
      height: calc(100% - 10px);
      width: calc(50% - 6px);
      left: 50%;
      
    `
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  h2{
    color: #fff;
    font-size: 20px;
  }
  svg {
    font-size: 34px;
    color: ${({ theme }) => theme.colors.gold};
    cursor: pointer;
  }

  span {
    position: relative;
    bottom: 5px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
`
