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
    font-size: 20px;
    margin-left: 5px;
    font-weight: bold;
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
      color: #F2BB40;
    }

    &:nth-child(2) {
      color: #D81212;
    }
  }
`
