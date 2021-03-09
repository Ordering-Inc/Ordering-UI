import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: none;
  width: 30%;

  @media (min-width: 992px) {
    display: block;
    border-left: 1px solid ${props => props.theme.colors.secondary};
  }
`
export const InnerContainer = styled.div`
  padding: 30px 15px;
  position: sticky;
  top: 60px;
  max-height: calc(100vh - 60px);
  overflow-x: hidden;
`
export const CartHeader = styled.div`
  h3 {
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0px;
  }
  p {
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
  }

  button {
    margin: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  ${({ isSkeleton }) => isSkeleton && css`
    display: flex;
    flex-direction: column;
  `}
`
export const NoCarts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;

  img {
    width: 200px;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
  h1 {
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`
export const PickupOrderCartHeader = styled.div`
  p {
    font-size: 18px;
    text-align: center;
    &:first-child {
      font-weight: 600;
    }
    &:not(:first-child) {
      color: ${props => props.theme.colors.grayTextColor};
    }
  }
`
export const WrapBusinessMap = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;
  overflow: hidden;

  #map {
    width: 100% !important;
    border-radius: initial !important;
  }
`
export const BusinessAddress = styled.div`
  margin: 10px auto;
  text-align: center;

  span {
    font-size: 18px;
    font-weight: 600;

    &:first-child {
      color: ${props => props.theme.colors.darkTextColor};
      padding-right: 5px;
    }

    &:not(:first-child) {
      color: ${props => props.theme.colors.primary};
    }
  }
`
