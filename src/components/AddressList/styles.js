import styled, { css } from 'styled-components'

export const AddressListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;

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
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0;    
  `}
  }

  .wrapAddress {
    display: flex;
    align-items: center;

    span {
      display: flex;
      cursor: pointer;
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
      `}
      &.radio {
        color: ${props => props.theme.colors.primary};
        font-size: 24px;
      }

      @media (max-width: 380px) {
        font-size: 14px;
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
    display: flex;
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
    svg {
      color: #CCC;
    }
    pointer-events: none;
  }
`

export const WrappNotAddresses = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 5px auto 0px;

  img {
    width: 200px;
  }
  h1 {
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`
