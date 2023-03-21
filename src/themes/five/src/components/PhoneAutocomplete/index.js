import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import {
  PhoneAutocomplete as PhoneAutocompleteController,
  useLanguage,
  useOrder,
  useCustomer
} from 'ordering-components'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { UserDetails } from '../UserDetails'
import { AddressList } from '../AddressList'

import {
  PhoneContainer,
  ContentWrapper,
  Title,
  Slogan,
  UserEdit,
  WrappBtn,
  SelectContainer
} from './styles'

import MdcCellphoneAndroid from '@meronex/icons/mdc/MdcCellphoneAndroid'

const PhoneAutocompleteUI = (props) => {
  const {
    phone,
    customerState,
    customersPhones,
    setCustomersPhones,
    openModal,
    limitPhoneLength,
    setOpenModal,
    onChangeNumber,
    setCustomerState,
    countryCallingCode,
    onRedirectPage
  } = props
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [, { deleteUserCustomer }] = useCustomer()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [inputValue, setInputValue] = useState('')
  const [optSelected, setOptSelected] = useState(null)
  const [isOpenUserData, setIsOpenUserData] = useState(false)
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false)
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const userName = userCustomer?.lastname
    ? `${userCustomer?.name} ${userCustomer?.lastname}`
    : userCustomer?.name

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const saveCustomerUser = (user) => {
    setCustomersPhones({ ...customersPhones, users: [...customersPhones.users, user] })
    setCustomerState({ ...customerState, result: user })
    setOpenModal({ customer: true, signup: false })
  }

  const handleFindClick = () => {
    if (userCustomer?.id && orderState?.options?.address?.address) {
      onRedirectPage && onRedirectPage('search')
    } else {
      setAlertState({ open: true, content: t('SELECT_ADDRESS_CUSTOMER', 'Please select an address for the selected customer') })
    }
  }

  useEffect(() => {
    if (customersPhones?.error) {
      setAlertState({ open: true, content: [customersPhones?.error] })
    }
  }, [customersPhones?.error])

  const onInputChange = (inputValue, { action }) => {
    if (action === 'menu-close' || action === 'input-blur' || action === 'set-value' || inputValue.charAt(0) === '0') {
      return
    }
    if (!inputValue) {
      setInputValue(inputValue)
      onChangeNumber(inputValue)
    }
    if ((inputValue && inputValue.length > limitPhoneLength) || !(/^[0-9]+$/.test(inputValue))) {
      return
    }
    setInputValue(inputValue)
    onChangeNumber(inputValue)
  }

  const onChange = (option) => {
    if (!option) { onChangeNumber('') }
    setOptSelected(option)
    setInputValue(option ? option?.value : '')
    const user = customersPhones.users?.find(user => user.cellphone === option?.value || user.phone === option?.value)
    if (user) {
      setCustomerState({ ...customerState, result: user })
      setOpenModal({ ...openModal, customer: true })
    }
  }

  const createNewUser = () => {
    if ((optSelected && optSelected?.value?.length === limitPhoneLength) || (!optSelected && phone.length === limitPhoneLength)) {
      setOpenModal({ ...openModal, signup: true })
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_MIN_CHARACTERS_PHONE', 'The Phone / Mobile must be :length: characters').replace(':length:', limitPhoneLength)
      })
    }
  }

  const handleCloseAddressList = () => {
    setOpenModal({ openModal, customer: false })
    setCustomerState({ ...customerState, result: { error: false } })
    deleteUserCustomer(true)
  }

  const optionsToSelect = customersPhones.users.map(user => {
    const obj = {}
    obj.value = user.cellphone || user.phone
    obj.label = `${user?.country_phone_code ? `(${user?.country_phone_code})` : ''} ${user?.phone && !user?.cellphone ? `${user?.phone}` : ''} ${user?.cellphone ? `${user.cellphone}` : ''} - {${user.name}}`
    return obj
  }) || []

  return (
    <>
      <PhoneContainer bgimage={theme.images?.general?.homeHero}>
        <ContentWrapper>
          <Title>{t('TITLE_HOME_CALLCENTER', 'Welcome to your Ordering Call Center.')}</Title>
          <Slogan>{t('SUBTITLE_HOME_CALLCENTER', 'Start First by adding the customers\' phone number')}</Slogan>
          {!userCustomer && (
            <SelectContainer>
              <MdcCellphoneAndroid size={26} />
              <Select
                isSearchable
                isClearable
                className='basic-single'
                classNamePrefix='select'
                placeholder={t('PHONE_NUMBER', 'Phone number')}
                value={optSelected}
                noOptionsMessage={() => inputValue?.length > 6 ? t('NO_OPTIONS', 'No options') : t('TYPE_AT_LEAST_NUMBER_SUGGEST', 'Type at least 7 numbers for suggesstions')}
                inputValue={!optSelected ? inputValue : ''}
                onChange={onChange}
                onInputChange={onInputChange}
                isLoading={customersPhones?.loading}
                options={optionsToSelect}
              />
            </SelectContainer>
          )}
          <WrappBtn>
            <Button
              color={inputValue || (userCustomer && orderState?.options?.address?.address) ? 'primary' : 'secundary'}
              onMouseDown={() => !(userCustomer && orderState?.options?.address?.address) ? createNewUser() : handleFindClick()}
              disabled={!inputValue && !(userCustomer && orderState?.options?.address?.address)}
            >
              {
                !(userCustomer && orderState?.options?.address?.address)
                  ? t('CREATE_CUSTOMER', 'Create new customer')
                  : `${t('CONTINUE_WITH', 'Continue with')} ${userName}`
              }
            </Button>
          </WrappBtn>
        </ContentWrapper>
      </PhoneContainer>
      <Modal
        open={openModal.signup}
        width='80%'
        onClose={() => setOpenModal({ openModal, signup: false })}
      >
        <SignUpForm
          externalPhoneNumber={`${countryCallingCode} ${optSelected?.value || phone}`}
          saveCustomerUser={saveCustomerUser}
          fieldsNotValid={props.fieldsNotValid}
          useChekoutFileds
          isCustomerMode
        />
      </Modal>
      <Modal
        open={openModal.customer}
        width='80%'
        onClose={() => handleCloseAddressList()}
        hideCloseDefault
        padding='20px'
      >
        <UserEdit>
          {!customerState?.loading && (
            <>
              <UserDetails
                isAddressFormOpen={isAddressFormOpen}
                isOpenUserData={isOpenUserData}
                userId={customerState?.result?.id}
                isCustomerMode
                isModal
                setIsOpenUserData={setIsOpenUserData}
                onClose={() => handleCloseAddressList()}
              />
              <AddressList
                isModal
                userId={customerState?.result?.id}
                changeOrderAddressWithDefault
                userCustomerSetup={{
                  ...customerState?.result,
                  phone
                }}
                isEnableContinueButton
                isCustomerMode
                isOpenUserData={isOpenUserData}
                setIsOpenUserData={setIsOpenUserData}
                setIsAddressFormOpen={setIsAddressFormOpen}
              />
            </>
          )}
        </UserEdit>
      </Modal>
      <Alert
        title={t('ERROR', 'Error')}
        open={alertState.open}
        content={alertState.content}
        onClose={handleCloseAlert}
        onAccept={handleCloseAlert}
      />
    </>
  )
}

export const PhoneAutocomplete = (props) => {
  const phoneProps = {
    UIComponent: PhoneAutocompleteUI,
    ...props
  }

  return <PhoneAutocompleteController {...phoneProps} />
}

PhoneAutocompleteUI.defaultProps = {
  limitPhoneLength: 10
}
