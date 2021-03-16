import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  ${({ isCartView }) => isCartView && css`
    padding: 0px;
  `}

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const UserAddress = styled.div`
  width: 200px;
  h1 {
    font-size: 20px;
    margin: 0px;
    text-transform: uppercase;
  }

  span {
    cursor: pointer;
    margin: 0px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    column-gap: 10px;
    padding-bottom: 10px;
    h1 {
      font-size: 18px;
    }
  }
`

export const WrappMap = styled.div`
  margin: auto;
  flex: 1;
`

export const Map = styled.div`
  font-size: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin: 20px 0 10px 0;

    &:not(:first-child) {
      margin: 0px;
    }
  }

  span {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  @media (min-width: 425px) {
    font-size: 18px;
  }
`
