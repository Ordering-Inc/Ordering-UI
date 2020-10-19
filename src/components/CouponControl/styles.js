import styled from 'styled-components'

export const CouponContainer = styled.div`
  /* width: 80%; */
  /* margin: auto; */
  display: flex;
  justify-content: flex-start;
  button {
    margin-left: 5px;
    &:disabled {
      opacity: 0.5;
    }
  }

  input {
    width: 50%;
  }
`
