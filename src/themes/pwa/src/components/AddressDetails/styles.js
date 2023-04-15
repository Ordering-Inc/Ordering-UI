import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (min-width: 1024px) {
    display: none;
  }
`

export const WrappMap = styled.div`
  width: 100%;
  margin: auto;
`

export const Map = styled.div`
  margin-bottom: 15px;

  img {
    width: 100%;
    height: auto;
    display: block;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const Text = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #344050;
  margin: 0px 0px 15px 0px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 425px) {
    font-size: 18px;
  }

`
