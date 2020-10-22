import styled from 'styled-components'
import locationIcon from '../../../template/assets/location-marker.svg'

export const FormActions = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    width: 45%;
    height: 45px;
  }
  @media (max-width: 480px) {
    button {
      width: 49%;
    }
  }
`

export const FormControl = styled.form`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    box-sizing: border-box;
    margin: 10px 0px;
    height: 43px;
    width: 100%;
    &.internal_number,
    &.zipcode {
      width: 48%;
    }

    @media (max-width: 620px) {
      &.internal_number,
      &.zipcode  {
        width: 100%;
      }
    }
  }

  textarea {
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
    border: 1px solid #CCC;
    outline: none;
    color: #555;
    resize: none;
    border-radius: 16px;

    &:focus {
      border-color: #555;
    }
  }

  .input-autocomplete {
    width: 100%;
    background: #FFF;
    color: #BBB;
    border: 1px solid #BBB;
    border-radius: 30px;
    font-size: 16px;
    padding: 7px 15px;
    outline: none;
  }

  .google-control {
    button:nth-child(2) {
      position: absolute;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FFF;
      padding: 0;
      width: 40px;
      height: 40px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      border-style: solid;
      border-width: 1px;
      border-color: ${props => props.theme.colors.primary};

      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 20px;
      }
    }
  }
`

export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const WrapAddressInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  i {
    padding: 0px 10px;
  }

  input {
    background-image: url(${locationIcon}) !important;
    background-position: left 10px center !important;
    background-repeat: no-repeat !important;
    background-size: 13px !important;
    padding: 7px 15px 7px 30px !important;
  }
`

export const AddressTagSection = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
    }
  }

  button.active {
    border: 1px solid #D81212;
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 250px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`
