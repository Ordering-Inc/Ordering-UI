import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -20px 10px -20px;
  
  @media (min-width: 681px) {
    margin: 0 0 10px 0;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const WrappMap = styled.div`
  width: 100%;
  margin: auto;
`

export const Map = styled.div`
  font-size: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;

  h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin: 0px;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.grayDark};
  }
`

export const ChangeButton = styled.a`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-size: 14px;
`
