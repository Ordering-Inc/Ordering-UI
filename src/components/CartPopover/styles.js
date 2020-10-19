import styled from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  span {
    display: flex;
    align-items: flex-end;
    position: relative;
    p {
      position: absolute;
      right: 0;
      height: 15px;
      width: 15px;
      margin: 0;
      background: ${props => props.theme.colors.primary};
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 30px;
    }
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;

  @media (max-width: 479px) {
    width: 90vw !important;
  }
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`

export const WrappNotCarts = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;

  img {
    width: 200px;
  }
  h1 {
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`

export const WrapperCarts = styled.div`
  max-height: 500px;
  margin-bottom: 10px;
`
