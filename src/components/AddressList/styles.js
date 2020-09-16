import styled from 'styled-components'

export const AddressListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  button.add {
    height: 50px;
  }
`

export const AddressListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 40px;
`

export const AddressItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  border-top: 1px solid #00000029;

  label {
    font-size: 15px;
    margin-left: 5px;
    font-weight: bold;
  }

  .wrapAddress {
    display: flex;
    align-items: center;

    span {
      cursor: pointer;
      margin-right: 10px;
      &.radio {
        color: #D81212;
        font-size: 24px;
      }
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    line-height: 1.5;

    span:last-child {
      opacity: 0.5;
      font-size: 12px;
    }
  }

  &:last-child {
    border-bottom: 1px solid #00000029;
  }
`

export const AddressItemActions = styled.div`
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    margin: 0px 5px;
    font-size: 30px;

    &:nth-child(1) {
      svg {
        color: #F2BB40;
      }
    }

    &:nth-child(2) {
      svg {
        color: #D81212;
      }
    }
  }
  a.disabled {
    pointer-events: none;
  }
`
