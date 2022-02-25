import styled, { css } from 'styled-components'

export const AddressListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  width: 100%;
  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}

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
  border-top: 1px solid #E9ECEF;

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
      font-size: 14px;
      display: flex;
      cursor: pointer;
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
      `}
      &.radio {
        color: ${props => props.theme.colors.lightGray};
        font-size: 20px;

        > svg.address-checked {
          color: ${props => props.theme.colors.primary};
        }
      }

      &.selected-tag {
        > svg {
          color: ${props => props.theme.colors.primary};
        }
      }

      &.tag {
        font-size: 24px;
        color: ${props => props.theme.colors.lightGray};
      }

      @media (min-width: 768px) {
        font-size: 16px;
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
    border-bottom: 1px solid #E9ECEF;
  }
`

export const AddressItemActions = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    cursor: pointer;
    margin: 0px 5px;
    font-size: 20px;
    
    svg {
      color: #B1BCCC;
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
  margin: 20px auto 10px;

  img {
    width: 200px;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
  h1 {
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`

export const FormActions = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    height: 45px;
    flex: 1;

    &:last-child#second-btn {
      margin-left: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 0;
        margin-right: 10px;
      `}
    }
  }

  @media (min-width: 769px) {
    button {
      &:last-child#second-btn {
        margin-left: 25px;
        ${props => props.theme?.rtl && css`
          margin-left: 0;
          margin-right: 25px;
      `}
      }
    }
  }
`

export const ContinueButton = styled.div`
  width: 100%;
  position: sticky;
  bottom: 1px;
  
  button {
    width: 100%;
    white-space: nowrap;
    height: 50px;
  }
`

export const AddressTitle = styled.span`
  font-size: 16px;
  margin-bottom: 25px;
  text-align: left;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
`

export const AddressHalfContainer = styled.div`
  display: flex;
  width: 100%;
`

export const List = styled.div`
  width: ${({ halfWidth }) => halfWidth ? '50%' : '100%'};
  padding-right: 10px;
  button { 
    width: 100%;
  }
`

export const AddressFormContainer = styled.div`
  width: 50%;
  position: sticky;
  right: 0;
  top: 0;
  margin-top: ${({ isOpenUserData }) => isOpenUserData ? '-30px' : '-165px'};
  height: 100%;
  padding-left: 10px;
`

export const CloseIcon = styled.div`
  svg{
    width: 30px;
    height: 30px;
  }
`
