import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Map = styled.div`
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 15px;
  }
`

export const Text = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  svg {
    color: #F2BB40;
    margin-left: 5px;
    font-size: 24px;
  }
  span {
    font-size: 18px;
    color: #D81212;
    margin-left: 5px;
  }

  @media (max-width: 580px) {
    font-size: 18px;
  }

  @media (max-width: 410px) {
    font-size: 16px;
    span {
      font-size: 16px;
    }
  }
  @media (max-width: 370px) {
    font-size: 14px;
    span {
      font-size: 14px;
    }
  }
`
