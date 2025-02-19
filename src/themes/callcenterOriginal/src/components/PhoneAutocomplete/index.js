import React, { useState, useEffect } from 'react'
import Select, { components } from 'react-select'
import {
  PhoneAutocomplete as PhoneAutocompleteController,
  useLanguage,
  useOrder,
  useConfig,
  useEvent,
  useCustomer
} from 'ordering-components'
import { useTheme } from 'styled-components'
import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { AddressList } from '../AddressList'
import { UserDetails } from '../UserDetails'

import {
  PhoneContainer,
  ContentWrapper,
  Title,
  Slogan,
  UserEdit,
  WrappBtn,
  SelectContainer,
  PhoneAutocompleteContainer,
  ImageWrapper,
  NotFoundUser,
  OptionContainer
} from './styles'

import MdcCellphoneAndroid from '@meronex/icons/mdc/MdcCellphoneAndroid'
import { OrderTypesSquares } from '../../../../five/src/components/OrderTypesSquares'

const countriesElevenPhoneLength = ['GB']

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
    onRedirectPage,
    urlPhone,
    orderTypes,
    localPhoneCode,
    isFromUrlPhone,
    onRedirectPhoneUrlPage,
    franchiseId,
    getUsers
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [configState] = useConfig()
  const [events] = useEvent()
  const [, { deleteUserCustomer }] = useCustomer()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isOpenUserData, setIsOpenUserData] = useState(false)
  const [userConfirmPhone, setUserConfirmPhone] = useState({ open: false, result: null })
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false)
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [inputValue, setInputValue] = useState(urlPhone ?? userCustomer?.cellphone ?? '')
  const [isSavedAddress, setIsSavedAddress] = useState(false)
  const [disabledSms, setDisableSms] = useState(false)
  const allOrderTypes = [1, 2, 3, 4, 5]

  const countryPhoneCode = userCustomer?.country_phone_code ?? userCustomer?.country_code

  const [optSelected, setOptSelected] = useState(userCustomer ? {
    value: userCustomer.cellphone || userCustomer.phone,
    label: `${countryPhoneCode ? `(${countryPhoneCode})` : ''} ${userCustomer?.phone && !userCustomer?.cellphone ? `${userCustomer?.phone}` : ''} ${userCustomer?.cellphone ? `${userCustomer.cellphone}` : ''} - {${userCustomer.name}}`,
    flag: userCustomer?.imported_address_text && userCustomer?.addresses?.length === 0,
    lastname: `${userCustomer.name} ${userCustomer.lastname}`
  } : null)
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').filter(value => (allOrderTypes.includes(Number(value)))).map(value => Number(value)) || []
  const userName = userCustomer?.lastname
    ? `${userCustomer?.name} ${userCustomer?.lastname}`
    : userCustomer?.name ?? optSelected?.lastname

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const saveCustomerUser = (user) => {
    setCustomersPhones({ ...customersPhones, users: [...customersPhones.users, user] })
    setCustomerState({ ...customerState, result: user })
    setOpenModal({ ...openModal, customer: true, signup: false })
  }

  const handleFindClick = () => {
    if (optSelected) {
      onChange(optSelected)
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
    if (action === 'menu-close' || action === 'input-blur' || action === 'set-value') {
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

  const onChange = (option, triggeredAction) => {
    if (triggeredAction?.action === 'clear') {
      setOptSelected(null)
      setCustomersPhones({ ...customersPhones, users: [] })
      setInputValue('')
      onChangeNumber('')
      return
    }
    let user
    if (option) {
      user = customersPhones.users?.find(user => user.cellphone === option?.value || user.phone === option?.value)
    }
    setOptSelected({
      ...option,
      lastname: `${user?.name} ${user?.lastname}`
    })
    setInputValue(option ? option?.value : '')
    if (!option) {
      onChangeNumber('')
      if (isFromUrlPhone) {
        onRedirectPhoneUrlPage && onRedirectPhoneUrlPage('home')
      }
      return
    }
    if (user) {
      setCustomerState({ ...customerState, result: user })
      setOpenModal({ ...openModal, signup: false, customer: true })
    } else {
      if (!customersPhones?.fetched && option?.value?.length >= 7) {
        getUsers()
        return
      }
      setOpenModal({ ...openModal, signup: true })
    }
  }

  const createNewUser = () => {
    const lengthIntervals = countriesElevenPhoneLength.includes(configState?.configs?.default_country_code?.value) ? [10, limitPhoneLength] : [limitPhoneLength]
    if ((optSelected && lengthIntervals.includes(optSelected?.value?.length)) ||
      (!optSelected && lengthIntervals.includes(phone.length))) {
      setOpenModal({ ...openModal, signup: true })
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_MIN_CHARACTERS_PHONE', 'The Phone / Mobile must be :length: characters').replace(':length:', limitPhoneLength)
      })
    }
  }

  const handleCloseAddressList = () => {
    setOpenModal({ ...openModal, customer: false })
    setCustomerState({ ...customerState, result: { error: false } })
    if (isFromUrlPhone) {
      onRedirectPhoneUrlPage && onRedirectPhoneUrlPage('home')
    }
  }

  const handleDeleteUser = () => {
    deleteUserCustomer(true)
  }

  const handleOnPaste = (e) => {
    const regex = /\D/
    const textCellphone = e?.clipboardData?.getData?.('text')?.replace?.(/[^0-9]/g, '')
    const value = parseInt(textCellphone)
    if (!regex.test(value) && textCellphone?.length >= 7 && !optSelected) {
      getUsers(value)
      setInputValue(textCellphone)
      onChangeNumber(textCellphone)
    }
  }

  const handleSetInitialValues = () => {
    setOptSelected(null)
    setInputValue('')
    setCustomersPhones({ ...customersPhones, users: [] })
  }

  const handleCloseSignupForm = () => {
    setOpenModal({ ...openModal, signup: false })
    if (onRedirectPhoneUrlPage) {
      onRedirectPhoneUrlPage('home')
    } else {
      onRedirectPage('home')
    }
  }

  const optionsToSelect = customersPhones.users.map(user => {
    const countryPhoneCode = user?.country_phone_code ?? user?.country_code
    const obj = {}
    obj.value = user.cellphone || user.phone
    obj.label = `${countryPhoneCode ? `(${countryPhoneCode})` : ''} ${user?.phone && !user?.cellphone ? `${user?.phone}` : ''} ${user?.cellphone ? `${user.cellphone}` : ''} - {${user.name} ${user?.lastname ?? ''}}`
    obj.flag = (user?.imported_address_text && user?.addresses?.length === 0) ||
      (user?.addresses?.length === 1 && (!user?.addresses?.[0]?.location?.lat || !user?.addresses?.[0]?.location?.lng))
    return obj
  }) || []

  const Option = (props) => {
    return (
      <OptionContainer style={{ display: 'flex' }}>
        <components.Option {...props} /> {props?.data?.flag && <img src={theme?.images?.general?.bookmark} width={20} height={20} />}
      </OptionContainer>
    )
  }

  const ClearIndicator = (props) => {
    const clearValue = () => {
      props.clearValue()
      handleDeleteUser()
    }
    const innerProps = {
      ...props.innerProps,
      onMouseDown: clearValue,
      onTouchEnd: clearValue
    }
    return (
      <div style={{ display: 'flex' }}>
        <components.ClearIndicator {...props} innerProps={innerProps} />
      </div>
    )
  }

  useEffect(() => {
    if (customersPhones?.loading) return
    if (!urlPhone && isFromUrlPhone) {
      onRedirectPhoneUrlPage && onRedirectPhoneUrlPage('home')
    }
    if (!urlPhone) return
    onInputChange(urlPhone, { action: 'url' })
    onChange({ value: urlPhone, label: urlPhone })
  }, [urlPhone, customersPhones?.loading])

  useEffect(() => {
    if (isSavedAddress &&
      userCustomer?.id === orderState?.options?.user_id &&
      orderState?.options?.address?.address
    ) {
      events.emit('go_to_page', { page: 'search' })
    }
  }, [isSavedAddress, userCustomer?.id, orderState?.options?.user_id, orderState?.options?.address?.address])

  useEffect(() => {
    if (!userCustomer?.id && !orderState?.loading) {
      handleSetInitialValues()
    }
  }, [userCustomer?.id, orderState?.loading])

  useEffect(() => {
    let timeout = null
    if (userConfirmPhone?.result) {
      setDisableSms(true)
      timeout = setTimeout(() => {
        setDisableSms(false)
      }, 30000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [userConfirmPhone?.result])

  return (
    <>
      <PhoneContainer>
        <ContentWrapper>
          <Title>{t('TITLE_HOME_CALLCENTER', 'Welcome to your Ordering Call Center.')}</Title>
          <Slogan>{t('SUBTITLE_HOME_CALLCENTER', 'Start first by selecting a delivery type')}</Slogan>
          <OrderTypesSquares
            hideTitle
            orderTypes={orderTypes}
          />
          {configTypes.includes(orderState?.options?.type) && (
            <>
              <PhoneAutocompleteContainer>
                <h2>
                  {t('ADDING_CUSTOMERS_PHONE_NUMBER', 'Adding the customers’ phone number')}
                </h2>
                <WrappBtn>
                  <Button
                    color={((inputValue || phone) || (userCustomer && orderState?.options?.address?.address)) ? 'primary' : 'secundary'}
                    onMouseDown={() => !(userCustomer && orderState?.options?.address?.address) && !optSelected ? createNewUser() : handleFindClick()}
                    disabled={((!inputValue && !phone) && !(userCustomer && orderState?.options?.address?.address) && !optSelected)}
                  >
                    {
                      !(userCustomer && orderState?.options?.address?.address) && !optSelected
                        ? t('CREATE_CUSTOMER', 'Create new customer')
                        : `${t('CONTINUE_WITH', 'Continue with')} ${userName}`
                    }
                  </Button>
                </WrappBtn>
                <SelectContainer onPaste={handleOnPaste}>
                  <MdcCellphoneAndroid size={18} color={theme?.colors?.primary} />
                  <Select
                    isSearchable
                    isClearable
                    className='basic-single'
                    classNamePrefix='select'
                    placeholder={t('PHONE_NUMBER', 'Phone number')}
                    value={optSelected}
                    noOptionsMessage={() => inputValue?.length > 6 ? t('NO_OPTIONS', 'No options') : t('TYPE_AT_LEAST_NUMBER_SUGGEST', 'Type at least 7 numbers for suggesstions')}
                    inputValue={!optSelected ? phone || inputValue : ''}
                    onChange={onChange}
                    onInputChange={onInputChange}
                    isLoading={customersPhones?.loading}
                    options={optionsToSelect.filter(opt => inputValue ? opt.value.toString().includes(inputValue) : opt)}
                    components={{ Option, ClearIndicator }}
                  />
                </SelectContainer>
              </PhoneAutocompleteContainer>
            </>
          )}
        </ContentWrapper>
        <ImageWrapper bgimage={theme?.images?.general?.phoneHero} />
      </PhoneContainer>
      <Modal
        open={openModal.signup}
        width='80%'
        onClose={() => handleCloseSignupForm()}
      >
        <SignUpForm
          externalPhoneNumber={`${countryCallingCode || localPhoneCode} ${optSelected?.value || phone}`}
          saveCustomerUser={saveCustomerUser}
          fieldsNotValid={props.fieldsNotValid}
          useChekoutFileds
          isCustomerMode
          isPopup
        />
      </Modal>
      <Modal
        open={openModal.customer}
        width='80%'
        onClose={() => handleCloseAddressList()}
        hideCloseDefault
        padding='20px'
      >
        <UserEdit isOpenUserData={isOpenUserData}>
          {!customerState?.loading && !customersPhones?.loading && (
            <>
              <UserDetails
                isAddressFormOpen={isAddressFormOpen}
                userData={customerState?.result}
                userId={customerState?.result?.id}
                isOpenUserData={isOpenUserData}
                isCustomerMode
                isModal
                setIsOpenUserData={setIsOpenUserData}
                onClose={() => handleCloseAddressList()}
                franchiseId={franchiseId}
                userConfirmPhone={userConfirmPhone}
                setUserConfirmPhone={setUserConfirmPhone}
              />
              <AddressList
                isModal
                userId={customerState?.result?.id}
                changeOrderAddressWithDefault
                userCustomerSetup={{
                  ...customerState?.result,
                  phone,
                  urlPhone
                }}
                isOpenUserData={isOpenUserData}
                isEnableContinueButton
                setIsOpenUserData={setIsOpenUserData}
                setIsSavedAddress={setIsSavedAddress}
                setIsAddressFormOpen={setIsAddressFormOpen}
                userConfirmPhone={userConfirmPhone}
                setUserConfirmPhone={setUserConfirmPhone}
                franchiseId={franchiseId}
                disabledSms={disabledSms}
                isHeader
              />
            </>
          )}
        </UserEdit>
      </Modal>
      <Modal
        open={openModal.error}
        width='50%'
        onClose={() => handleCloseAddressList()}
        padding='20px'
      >
        <NotFoundUser>
          <h2>{t('NO_USER_FOUND', 'No user found')}</h2>
        </NotFoundUser>
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
  const [, t] = useLanguage()
  const [configState] = useConfig()
  const phoneProps = {
    UIComponent: PhoneAutocompleteUI,
    ...props,
    limitPhoneLength: countriesElevenPhoneLength.includes(configState?.configs?.default_country_code?.value) ? 11 : props.limitPhoneLength || 10,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery'),
        description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description')
      }
    ]
  }

  return <PhoneAutocompleteController {...phoneProps} />
}

PhoneAutocompleteUI.defaultProps = {
  limitPhoneLength: 10
}
