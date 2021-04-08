import styled from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  background-color: ${props => props.theme.colors.primary};
  padding: 5px 10px;
  border-radius: 20px;

  svg {
    color: ${props => props.theme.colors.white};
    font-size: 20px;
  }

  p {
    margin: 0px;
    color: ${props => props.theme.colors.white};
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
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`
