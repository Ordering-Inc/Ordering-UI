import styled from 'styled-components'

export const ReviewOrderContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  margin: 0 auto;
`

export const Reviews = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`
export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`
export const Stars = styled.div`
    > label {
      > input {
      display: none;
      }
    }
`
export const Comments = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h2 {
    text-transform: capitalize;
  }
`
export const Send = styled.div`
  width: 100%;
  margin: 20px 0;
`

export const InvisibleInput = styled.input`
  opacity: 0;
  position: fixed;
`
