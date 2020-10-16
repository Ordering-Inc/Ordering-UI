import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
`
export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

  h3 {
    margin: 0px;
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: normal;
  }
  span:not(:last-child) {
    margin-right: 10px;
  }
  span svg {
    font-size: 23px;
    color: #D81212;
  }
`

export const WrapperActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;

  span {
    svg {
      color: #D81212;
      font-size: 20px;
      &.reverse {
        transform: rotate(180deg);
      }
    }
  }

  div:not(:last-child) {
    margin-right: 10px;
  }

  div:nth-child(1) {
    button.incdec {
      width: 20px;
      height: 20px;
      border: 1px solid #000;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button.disabled {
      opacity: 0.5;
    }
  }
`

export const WrapperIncrementsDecrements = styled.div`
  display: flex;

  button, span {
    margin-right: 5px;
  }
`
