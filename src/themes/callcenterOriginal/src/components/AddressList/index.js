import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import MdClose from '@meronex/icons/md/MdClose'

import {
  Heart,
  Building,
  PlusLg,
  House,
  Pencil,
  Trash
} from 'react-bootstrap-icons'

import {
  AddressList as AddressListController,
  useLanguage,
  useOrder,
  useCustomer,
  useEvent,
  useConfig
} from 'ordering-components'

import {
  AddressListContainer,
  AddressListUl,
  AddressItem,
  AddressItemActions,
  FormActions,
  ContinueButton,
  AddressTitle,
  AddressHalfContainer,
  List,
  AddressFormContainer,
  CloseIcon,
  TitleFormContainer,
  AddressHoverInfo,
  AddressBookMark,
  AddressBookMarkContainer,
  AddressTitleContainer,
  WithoutAddressText,
  WrapperSMS,
  ButtonsContainer
} from './styles'

import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { Confirm } from '../Confirm'
import { useTheme } from 'styled-components'
import { scrollTo } from '../../../../../utils'
import { SpreadForm } from '../AddressForm/SpreadForm'

const getSpreadAddressFormatted = (_address, restValues = {}) => {
  return {
    route: _address?.route,
    street_number: _address?.street_number,
    neighborhood: _address?.neighborhood,
    city: _address?.city,
    state: _address?.state,
    country_code: _address?.country_code,
    country: _address?.country,
    address: _address?.address,
    locality: _address?.locality,
    location: _address?.location,
    zipcode: _address?.zipcode,
    ...restValues
  }
}

const AddressListUI = (props) => {
  const {
    actionStatus,
    addressList,
    handleDelete,
    setAddressList,
    handleSetDefault,
    isModal,
    isPopover,
    isProductForm,
    onCancel,
    onAccept,
    userId,
    userCustomerSetup,
    isEnableContinueButton,
    setCustomerModalOpen,
    isCustomerMode,
    isFromCheckout,
    isOpenUserData,
    setIsAddressFormOpen,
    isHeader,
    notUseCustomerInfo,
    franchiseId,
    setIsSavedAddress,
    isFromPhoneAutocomplete,
    setUserConfirmPhone,
    userConfirmPhone,
    disabledSms
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [curAddress, setCurAddress] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, title: null, content: null, handleOnAccept: null, handleOnCancel: null })
  const theme = useTheme()
  const [{ user }] = useCustomer()
  const [addressSpreadForm, setAddressSpreadForm] = useState(null)
  const [editSpreadAddress, setEditSpreadAddress] = useState(false)
  const [tabSelected, setTabSelected] = useState('general')

  const addFormRestrictions = userCustomerSetup?.imported_address_text && addressList.addresses?.length === 0 && !addressList?.loading && !addressList?.error
  const uniqueAddressesList = (addressList.addresses && addressList.addresses.filter(
    (address, i, self) =>
      i === self.findIndex(obj => (
        address.address === obj.address &&
        address.address_notes === obj.address_notes &&
        address.zipcode === obj.zipcode &&
        address.internal_number === obj.internal_number
      )))) || []
  const unaddressedTypes = configs?.unaddressed_order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isAllowUnaddressOrderType = unaddressedTypes.includes(orderState?.options?.type) && user?.id === orderState?.options?.user_id
  const countryAutocomplete = configs?.country_autocomplete?.value?.toUpperCase() ?? '*'

  const openAddress = (address) => {
    setCurAddress(address)
    address?.location && setAddressSpreadForm(getSpreadAddressFormatted(address))
    setAddressOpen(true)
    setIsAddressFormOpen && setIsAddressFormOpen(true)
    const container = window.document.getElementsByClassName('form_edit')[0]
    container && scrollTo(container, 0, 500)
  }

  const handleSaveAddress = (address) => {
    let found = false
    const addresses = addressList.addresses.map(_address => {
      if (_address?.id === address?.id) {
        Object.assign(_address, address)
        found = true
      } else if (address.default) {
        _address.default = false
      }
      return _address
    })
    if (!found) {
      addresses.push(address)
    }
    setAddressList({
      ...addressList,
      addresses
    })
    if (userCustomerSetup) {
      handleSetAddress(address)
      return
    }
    setIsSavedAddress && setIsSavedAddress(true)
    handleCloseAddressForm()
  }

  const handleSetAddress = (address, options) => {
    if (
      checkAddress(address) &&
      isCustomerMode &&
      userCustomerSetup?.id === user?.id &&
      !isFromCheckout
    ) {
      if (!address?.location?.lat || !address?.location?.lng) {
        openAddress(address)
        return
      }
      setIsSavedAddress && setIsSavedAddress(true)
      handleSetDefault(address, userCustomerSetup, true)
      setCustomerModalOpen && setCustomerModalOpen(false)
      if (!isFromPhoneAutocomplete) {
        events.emit('go_to_page', { page: 'search' })
      }
      return
    }
    if (!address?.location?.lat || !address?.location?.lng) {
      openAddress(address)
      return
    }
    (!options?.avoidRedirect && setIsSavedAddress) && setIsSavedAddress(true)
    handleCloseAddressForm()
    handleSetDefault(address, userCustomerSetup)
  }

  const handleDeleteClick = (address) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ADDRESS', 'Are you sure that you want to delete the address?'),
      handleOnAccept: () => {
        handleDelete(address)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const checkAddress = (address) => {
    const props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number']
    const values = []
    if (userCustomerSetup) {
      return address.default
    }
    props.forEach(prop => {
      if (address?.[prop]) {
        if (prop === 'location') {
          values.push(address?.[prop].lat === orderState?.options?.address?.[prop]?.lat &&
            address?.[prop].lng === orderState?.options?.address?.[prop]?.lng)
        } else {
          values.push(address?.[prop] === orderState?.options?.address?.[prop])
        }
      } else {
        values.push(orderState?.options?.address?.[prop] === null || orderState?.options?.address?.[prop] === '')
      }
    })
    return values.every(value => value)
  }

  const handleCloseAddressForm = () => {
    setAddressOpen(false)
    setIsAddressFormOpen && setIsAddressFormOpen(false)
    setEditSpreadAddress(false)
  }

  const handleOnCancel = () => {
    setConfirm({ ...confirm, open: false })
  }

  /**
   * Close modals and alerts
   */
  useEffect(() => {
    return () => {
      setConfirm({ ...confirm, open: false })
      handleCloseAddressForm()
    }
  }, [])

  useEffect(() => {
    if (isOpenUserData) {
      handleCloseAddressForm()
    }
  }, [isOpenUserData])

  useEffect(() => {
    const addressValidation = addressList.addresses?.length === 0 && !addressList?.loading && !addressList?.error
    if (userCustomerSetup?.imported_address_text && addressValidation && !isOpenUserData) {
      openAddress({
        address: userCustomerSetup?.imported_address_text
      })
    }
    if (!userCustomerSetup?.imported_address_text && addressValidation && !isOpenUserData) {
      openAddress({})
    }
  }, [userCustomerSetup?.imported_address_text, addressList.addresses, addressList?.loading, addressList?.error, isOpenUserData])

  useEffect(() => {
    if (!addressList?.addedBySocket) return
    setConfirm({
      open: true,
      title: t('NEW_ADDRESS_REGISTERED', 'New address registered'),
      content: t('NEW_ADDRESS_REGISTERED_CONTENT', 'The user has sent the address'),
      handleOnAccept: () => setConfirm({ ...confirm, open: false }),
      handleOnCancel: ''
    })
    handleSetAddress(addressList?.addresses[addressList?.addresses?.length - 1], { avoidRedirect: true })
  }, [addressList?.addedBySocket])

  return (
    <AddressListContainer id='address_control' isLoading={actionStatus?.loading || orderState?.loading}>
      <AddressHalfContainer>
        <List
          halfWidth={addressOpen}
          isOpenUserData={isOpenUserData}
          isHeader={isHeader}
          notUseCustomerInfo={notUseCustomerInfo}
          addFormRestrictions={addFormRestrictions}
        >
          {!addFormRestrictions && !addressOpen && !isOpenUserData && (
            <>
              <ButtonsContainer>
                <Button
                  className='add'
                  outline
                  color={addressList?.addresses?.length > 0 ? 'secondary' : 'primary'}
                  onClick={() => openAddress({})}
                  disabled={orderState?.loading || actionStatus.loading}
                  hoverColor='#CCC'
                >
                  {(orderState?.loading || actionStatus.loading) ? t('LOADING', 'Loading') : t('ADD_NEW_ADDRESS', 'Add New Address')}
                </Button>
                <Button
                  className='add sms'
                  color={disabledSms ? 'secondary' : 'primary'}
                  onClick={() => setUserConfirmPhone({ open: true, result: null })}
                  disabled={orderState?.loading || actionStatus.loading || disabledSms}
                >
                  {t('SEND_SMS_TO_CLIENT', 'Send SMS to client')}
                </Button>
              </ButtonsContainer>
              {(userConfirmPhone?.result) && (
                <WrapperSMS>
                  <p>
                    {userConfirmPhone?.result}
                  </p>
                </WrapperSMS>
              )}
            </>
          )}
          {
            isPopover && addressOpen && (
              <AddressForm
                userId={userId}
                addressesList={addressList?.addresses}
                tabSelected={tabSelected}
                setTabSelected={setTabSelected}
                addressSpreadForm={addressSpreadForm}
                setAddressSpreadForm={setAddressSpreadForm}
                editSpreadAddress={editSpreadAddress}
                setEditSpreadAddress={setEditSpreadAddress}
                useValidationFileds
                address={curAddress}
                onCancel={() => handleCloseAddressForm()}
                onSaveAddress={handleSaveAddress}
                userCustomerSetup={userCustomerSetup}
                isAllowUnaddressOrderType={isAllowUnaddressOrderType}
                userConfirmPhone={userConfirmPhone}
                setUserConfirmPhone={setUserConfirmPhone}
              />
            )
          }

          {
            !addressList.loading &&
            !actionStatus.loading &&
            !orderState.loading &&
            !addressList.error &&
            addressList?.addresses?.length > 0 &&
            typeof orderState.options?.address === 'object' &&
            !addressOpen &&
            user?.id === orderState?.options?.user_id &&
            ((!addressOpen && isPopover) || isModal) && (
              <AddressListUl id='list'>
                <AddressTitleContainer style={{ display: 'flex' }}>
                  <AddressTitle>{t('SELECT_ONE_OF_SAVED_PLACES', 'Select one of your saved places')}</AddressTitle>

                  {isAllowUnaddressOrderType && (
                    <>
                      <span>{' '}{t('OR', 'or')}{' '}</span>
                      <WithoutAddressText onClick={() => events.emit('go_to_page', { page: 'search' })}>{t('CONTINUE_WITHOUT_ADDRESS', 'Continue without address')}</WithoutAddressText>
                    </>
                  )}
                </AddressTitleContainer>
                {uniqueAddressesList.map(address => (
                  <AddressItem key={address?.id}>
                    <div className='wrapAddress' onClick={() => handleSetAddress(address)}>
                      <span className='radio'>
                        {checkAddress(address) ? <RiRadioButtonFill className='address-checked' /> : <IosRadioButtonOff />}
                      </span>
                      <span className={checkAddress(address) ? 'selected-tag tag' : 'tag'}>
                        {address?.tag === 'home' && <House />}
                        {address?.tag === 'office' && <Building />}
                        {address?.tag === 'favorite' && <Heart />}
                        {address?.tag === 'other' && <PlusLg />}
                      </span>
                      <div className='address'>
                        <span>{address.address}</span>
                        <span>{address.internal_number} {address.zipcode}</span>
                      </div>
                      {(!address?.location?.lat || !address?.location?.lng) && (
                        <AddressBookMarkContainer>
                          <AddressBookMark>
                            <img
                              src={theme?.images?.general?.bookmark}
                              width={20}
                              height={20}
                            />
                          </AddressBookMark>
                          <AddressHoverInfo className='hover-info'>
                            <p>{t('PLEASE_VERIFY_CUSTOMER_ADDRESS', 'Please verify the address with the customer.')}</p>
                          </AddressHoverInfo>
                        </AddressBookMarkContainer>
                      )}
                    </div>
                    <AddressItemActions className='form'>
                      <a className={actionStatus.loading || isOpenUserData ? 'disabled' : ''} onClick={() => openAddress(address)}>
                        <Pencil />
                      </a>
                      <a className={actionStatus.loading || address.default ? 'disabled' : ''} onClick={() => handleDeleteClick(address)}>
                        <Trash />
                      </a>
                    </AddressItemActions>
                  </AddressItem>
                ))}
                {isEnableContinueButton && uniqueAddressesList.map(address => address.default && (
                  <ContinueButton key={address.id}>
                    <Button color='primary' onClick={() => handleSetAddress(address)}>
                      {t('CONTINUE_WITH', 'Continue with')}: {address.address}
                    </Button>
                  </ContinueButton>
                ))}
              </AddressListUl>
            )
          }
          {!(addressList.loading || actionStatus.loading || orderState.loading) && addressList.error && (
            addressList.error.length > 0 && (
              <NotFoundSource
                content={addressList.error[0]?.message || addressList.error[0]}
              />
            )
          )}

          {!(addressList.loading || actionStatus.loading || orderState.loading) && (typeof orderState.options?.address !== 'object') && !addressList.error && (
            <NotFoundSource
              content={t('NETWORK_ERROR', 'Network error, please reload the page')}
            />
          )}
          {!isPopover && addressOpen && (
            <AddressFormContainer>
              <AddressForm
                userId={userId}
                addressesList={addressList?.addresses}
                tabSelected={tabSelected}
                setTabSelected={setTabSelected}
                addressSpreadForm={addressSpreadForm}
                setAddressSpreadForm={setAddressSpreadForm}
                editSpreadAddress={editSpreadAddress}
                setEditSpreadAddress={setEditSpreadAddress}
                useValidationFileds
                address={curAddress}
                onCancel={() => handleCloseAddressForm()}
                onSaveAddress={handleSaveAddress}
                userCustomerSetup={userCustomerSetup}
                notUseCustomerInfo={notUseCustomerInfo}
                franchiseId={franchiseId}
                addFormRestrictions={addFormRestrictions}
                isAllowUnaddressOrderType={isAllowUnaddressOrderType}
                userConfirmPhone={userConfirmPhone}
                setUserConfirmPhone={setUserConfirmPhone}
              />
            </AddressFormContainer>
          )}
        </List>
        {addressOpen && !notUseCustomerInfo && (
          <AddressFormContainer
            width='50%'
            addFormRestrictions={addFormRestrictions}
          >
            <TitleFormContainer>
              {!addFormRestrictions && (
                <CloseIcon>
                  <MdClose onClick={() => handleCloseAddressForm()} />
                </CloseIcon>
              )}
              <h1>{t('ADD_NEW_ADDRESS', 'Add new address')}</h1>
            </TitleFormContainer>
            {tabSelected === 'country' && (
              <SpreadForm
                address={curAddress?.address && getSpreadAddressFormatted(curAddress)}
                countryAutocomplete={countryAutocomplete}
                editSpreadAddress={editSpreadAddress}
                setEditSpreadAddress={setEditSpreadAddress}
                onCancel={() => handleCloseAddressForm()}
                onChangeAddress={setAddressSpreadForm}
              />
            )}
          </AddressFormContainer>
        )}
      </AddressHalfContainer>

      {(addressList.loading || actionStatus.loading || orderState.loading || (user?.id !== orderState?.options?.user_id)) && !isProductForm && !addressOpen && (
        <AddressListUl>
          <Skeleton height={50} count={3} style={{ marginBottom: '10px' }} />
        </AddressListUl>
      )}

      {onCancel && onAccept && typeof orderState.options?.address === 'object' && !notUseCustomerInfo && (
        <FormActions>
          <Button
            outline
            type='button'
            disabled={(addressList.loading || actionStatus.loading || orderState.loading)}
            onClick={() => onCancel()}
            hoverColor='#CCC'
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button
            disabled={(addressList.loading || actionStatus.loading || orderState.loading)}
            id='second-btn'
            color='primary'
            onClick={() => onAccept()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
        </FormActions>
      )}

      {
        !isPopover && (
          <Modal
            title={t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
            open={isPopover}
            onClose={() => handleCloseAddressForm()}
          >
            <AddressForm
              userId={userId}
              addressesList={addressList?.addresses}
              tabSelected={tabSelected}
              setTabSelected={setTabSelected}
              addressSpreadForm={addressSpreadForm}
              setAddressSpreadForm={setAddressSpreadForm}
              editSpreadAddress={editSpreadAddress}
              setEditSpreadAddress={setEditSpreadAddress}
              useValidationFileds
              address={curAddress}
              onCancel={() => handleCloseAddressForm()}
              onSaveAddress={handleSaveAddress}
              userCustomerSetup={userCustomerSetup}
              isAllowUnaddressOrderType={isAllowUnaddressOrderType}
              userConfirmPhone={userConfirmPhone}
              setUserConfirmPhone={setUserConfirmPhone}
            />
          </Modal>
        )
      }
      <Confirm
        title={confirm.title || t('SEARCH', 'Search')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={confirm.handleOnCancel ?? handleOnCancel}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </AddressListContainer>
  )
}

export const AddressList = (props) => {
  const addressListProps = {
    ...props,
    UIComponent: AddressListUI
  }

  return <AddressListController {...addressListProps} />
}
