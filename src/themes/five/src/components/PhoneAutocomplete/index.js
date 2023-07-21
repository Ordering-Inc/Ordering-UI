import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import {
  PhoneAutocomplete as PhoneAutocompleteController,
  useLanguage,
  useOrder,
  useCustomer,
  useConfig
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
  SelectContainer,
  TypesContainer,
  TypeButton,
  IconTypeButton,
  AdditionalTypesContainer,
  PhoneAutocompleteContainer,
  ImageWrapper,
  ContinueButton
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
    onRedirectPage,
    urlPhone,
    orderTypes,
    localPhoneCode
  } = props
  const allOrderTypes = [1, 2, 3, 4, 5]
  const pickupTypes = [2, 3, 4, 5]
  const [orderState, { changeType }] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [, { deleteUserCustomer }] = useCustomer()
  const [configState] = useConfig()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [inputValue, setInputValue] = useState(urlPhone ?? '')
  const [optSelected, setOptSelected] = useState(null)
  const [isOpenUserData, setIsOpenUserData] = useState(false)
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false)
  const [isPickupSelected, setIsPickupSelected] = useState(pickupTypes.includes(orderState?.options?.type))
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').filter(value => (allOrderTypes.includes(Number(value)))).map(value => Number(value)) || []
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

  const handleChangeType = (value) => {
    if (!orderState?.loading) {
      changeType(value)
      if (value === 1) {
        setIsPickupSelected(false)
      }
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
    setOptSelected(option)
    setInputValue(option ? option?.value : '')
    if (!option) { onChangeNumber(''); return }
    const user = customersPhones.users?.find(user => user.cellphone === option?.value || user.phone === option?.value)
    if (user) {
      setCustomerState({ ...customerState, result: user })
      setOpenModal({ signup: false, customer: true })
    } else {
      setCustomerState({ ...customerState, result: { error: false } })
      setOpenModal({ customer: false, signup: true })
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
    setOpenModal({ ...openModal, customer: false })
    setCustomerState({ ...customerState, result: { error: false } })
    deleteUserCustomer(true)
  }

  const handleChangeToPickup = () => {
    const firstEnabledPickupType = orderTypes.find(type => configTypes?.includes(type.value) && type.value !== 1)?.value
    handleChangeType(firstEnabledPickupType)
    setIsPickupSelected(true)
  }

  const optionsToSelect = customersPhones.users.map(user => {
    const obj = {}
    obj.value = user.cellphone || user.phone
    obj.label = `${user?.country_phone_code ? `(${user?.country_phone_code})` : ''} ${user?.phone && !user?.cellphone ? `${user?.phone}` : ''} ${user?.cellphone ? `${user.cellphone}` : ''} - {${user.name}}`
    return obj
  }) || []

  useEffect(() => {
    if (!urlPhone) return
    onInputChange(urlPhone, { action: 'url' })
    onChange({ value: urlPhone, label: urlPhone })
  }, [urlPhone, customersPhones?.users?.length])

  useEffect(() => {
    if (pickupTypes.includes(orderState?.options?.type)) {
      setIsPickupSelected(true)
    }
  }, [orderState?.options?.type])

  const OrderTypesComponent = () => {
    return (
      <>
        {orderTypes && (configTypes ? orderTypes.filter(type => configTypes?.includes(type.value) && type.value !== 1) : orderTypes).map((item, i) => (
          <Button
            key={item.value}
            onClick={() => handleChangeType(item.value)}
            color={orderState?.options?.type === item?.value ? 'primary' : 'secondary'}
            disabled={orderState?.loading}
            className={orderState?.options?.type !== item?.value ? 'activated' : ''}
          >
            {item.text}
          </Button>
        ))}
      </>
    )
  }

  return (
    <>
      <PhoneContainer>
        <ContentWrapper>
          <Title>{t('TITLE_HOME_CALLCENTER', 'Welcome to your Ordering Call Center.')}</Title>
          <Slogan>{t('SUBTITLE_HOME_CALLCENTER', 'Start first by selecting a delivery type')}</Slogan>
          {!(userCustomer && orderState?.options?.address?.address) && (
            <TypesContainer>
              {configTypes.includes(1) && (
                <TypeButton onClick={() => handleChangeType(1)} disabled={orderState?.loading} activated={!isPickupSelected}>
                  <IconTypeButton activated={!isPickupSelected}>
                    <img
                      src={theme?.images?.general?.deliveryIco}
                      width={20}
                      height={20}
                    />
                  </IconTypeButton>
                  <p>{t('DELIVERY', 'Delivery')}</p>
                </TypeButton>
              )}
              {configTypes.some(type => pickupTypes.includes(type)) && (
                <TypeButton
                  disabled={orderState?.loading}
                  activated={isPickupSelected}
                  onClick={() => handleChangeToPickup()}
                >
                  <IconTypeButton activated={isPickupSelected}>
                    <img
                      src={theme?.images?.general?.pickupIco}
                      width={22}
                      height={22}
                    />
                  </IconTypeButton>
                  <p>{t('PICKUP', 'Pickup')}</p>
                </TypeButton>
              )}
            </TypesContainer>
          )}
          {isPickupSelected && (
            <>
              <p>{t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?')}</p>
              <AdditionalTypesContainer>
                <OrderTypesComponent />
              </AdditionalTypesContainer>
            </>
          )}
          {configTypes.includes(orderState?.options?.type) && (
            <>
              {!userCustomer && (
                <PhoneAutocompleteContainer>
                  <h2>
                    {t('ADDING_CUSTOMERS_PHONE_NUMBER', 'Adding the customers’ phone number')}
                  </h2>
                  <WrappBtn>
                    <Button
                      color={(inputValue || (userCustomer && orderState?.options?.address?.address)) ? 'primary' : 'secundary'}
                      onMouseDown={() => !(userCustomer && orderState?.options?.address?.address) ? createNewUser() : handleFindClick()}
                      disabled={(!inputValue && !(userCustomer && orderState?.options?.address?.address))}
                    >
                      {
                        !(userCustomer && orderState?.options?.address?.address)
                          ? t('CREATE_CUSTOMER', 'Create new customer')
                          : `${t('CONTINUE_WITH', 'Continue with')} ${userName}`
                      }
                    </Button>
                  </WrappBtn>
                  <SelectContainer>
                    <MdcCellphoneAndroid size={18} color={theme?.colors?.primary} />
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
                    {optSelected && (
                      <ContinueButton>
                        <Button onClick={() => onChange(optSelected)} color='primary'>
                          {t('CONTINUE', 'Continue')}
                        </Button>
                      </ContinueButton>
                    )}
                  </SelectContainer>
                </PhoneAutocompleteContainer>
              )}
            </>
          )}
        </ContentWrapper>
        <ImageWrapper bgimage={theme?.images?.general?.phoneHero} />
      </PhoneContainer>
      <Modal
        open={openModal.signup}
        width='80%'
        onClose={() => setOpenModal({ ...openModal, signup: false })}
      >
        <SignUpForm
          externalPhoneNumber={`${localPhoneCode || countryCallingCode} ${optSelected?.value || phone}`}
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
                  phone,
                  urlPhone
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
  const [, t] = useLanguage()
  const phoneProps = {
    UIComponent: PhoneAutocompleteUI,
    ...props,
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
