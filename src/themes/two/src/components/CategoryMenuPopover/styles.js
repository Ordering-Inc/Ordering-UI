import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-right: 10px;
  overflow: hidden;

  .special {
    display: none;
  }
`

export const HeaderItem = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.darkTextColor};
  display: flex;
  align-items: center;
  padding-left: 15px;

  svg {
    font-size: 24px;
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  box-shadow: 0px 3px 6px #00000065;
  border-radius: 10px;
  padding: 15px;
  width: 300px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`

export const PopoverArrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Menu = styled.div`
  margin: 5px 0;
  padding-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${props => props.theme.colors.grayTextColor};

  ${({ active }) => active && css`
    border-left: 2px solid;
    font-weight: 500;
    color: ${props => props.theme.colors.darkTextColor};
  `}
`
export const TitleAndTime = styled.div`
  padding-bottom: 20px;
  h3 {
    margin: 0px;
  }
  p {
    font-size: 14px;
    margin: 0px;
    color: ${props => props.theme.colors.grayTextColor};
  }

  button {
    display: flex;
    align-items: center;
  }
`
