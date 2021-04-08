import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: 500;
  }
  a {
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
    font-weight: 600;
  }

  @media (min-width: 425px) {
    font-size: 18px;
    span {
      font-size: 18px;
    }
  }
`
