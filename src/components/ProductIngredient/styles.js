import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  span {
    text-transform: capitalize;
  }

  span:nth-child(1) {
    margin-right: 10px;
    svg {
      color: #D81212;
      font-size: 25px;
    }
  }
`
