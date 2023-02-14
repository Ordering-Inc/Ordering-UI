import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import MdClose from '@meronex/icons/md/MdClose'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

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
  useOrderingTheme
} from 'ordering-components'

import {
  AddressListContainer,
  AddressListUl,
  AddressItem,
  AddressItemActions,
  WrappNotAddresses,
  ContinueButton,
  AddressTitle,
  AddressHalfContainer,
  List,
  AddressFormContainer,
  TitleFormContainer,
  CloseIcon,
  TitleAddress
} from './styles'

import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { Confirm } from '../Confirm'
import { useTheme } from 'styled-components'
import { scrollTo } from '../../../../../utils'

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
    userId,
    userCustomerSetup,
    isEnableContinueButton,
    setCustomerModalOpen,
    isCustomerMode,
    isFromCheckout,
    setIsAddressFormOpen,
    isProfile,
    isMobile,
    onCancel
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [curAddress, setCurAddress] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const theme = useTheme()
  const [orderingTheme] = useOrderingTheme()
  const [{ user }] = useCustomer()
  const { width } = useWindowSize()
  const isCompletedLayout = width < 769 || isProfile
  const uniqueAddressesList = (addressList.addresses && addressList.addresses.filter(
    (address, i, self) => address.address &&
      i === self.findIndex(obj => (
        address.address === obj.address &&
        address.address_notes === obj.address_notes &&
        address.zipcode === obj.zipcode &&
        address.internal_number === obj.internal_number
      )))) || []

  const showAddress = !theme?.profile?.components?.address_list?.components?.address?.hidden
  const showIcons = !theme?.profile?.components?.address_list?.components?.icons?.hidden
  const showZipcode = !theme?.profile?.components?.address_list?.components?.zipcode?.hidden
  const showInternalNumber = !theme?.profile?.components?.address_list?.components?.internal_number?.hidden
  const notFoundImage = theme?.profile?.components?.address_list?.components?.image
  const openAddress = (address) => {
    setCurAddress(address)
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
    handleCloseAddressForm()
  }

  const handleSetAddress = async (address) => {
    if (
      checkAddress(address) &&
      isCustomerMode &&
      userCustomerSetup?.id === user?.id &&
      !isFromCheckout
    ) {
      events.emit('go_to_page', { page: 'search' })
      handleSetDefault(address, userCustomerSetup, true)
      setCustomerModalOpen && setCustomerModalOpen(false)
      return
    }

    handleCloseAddressForm()
    await handleSetDefault(address, userCustomerSetup)
    onCancel && onCancel()
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

  const AddressListCallcenterLayout = ({ children }) => {
    return (
      <AddressHalfContainer>
        <List halfWidth={addressOpen}>
          {children}
        </List>
        {addressOpen && (
          <AddressFormContainer isCustomerMode={isCustomerMode}>
            <TitleFormContainer>
              <CloseIcon>
                <MdClose onClick={() => handleCloseAddressForm()} />
              </CloseIcon>
              <h1>{t('ADD_NEW_ADDRESS', 'Add new address')}</h1>
            </TitleFormContainer>
            <AddressForm
              userId={userId}
              addressesList={addressList?.addresses}
              useValidationFileds
              address={curAddress}
              onCancel={() => handleCloseAddressForm()}
              onSaveAddress={handleSaveAddress}
              userCustomerSetup={userCustomerSetup}
            />
          </AddressFormContainer>
        )}
      </AddressHalfContainer>
    )
  }

  const AddressListContent = () => {
    return (
      <>
        {
          (!isPopover || !addressOpen) && (
            <>
              {!isCompletedLayout && (
                <TitleAddress>
                  {t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
                </TitleAddress>
              )}
              <Button
                className='add'
                outline
                color={isEnableContinueButton && addressList?.addresses?.length > 0 ? 'secondary' : 'primary'}
                onClick={() => openAddress({})}
                disabled={orderState?.loading || actionStatus.loading}
                style={(isCompletedLayout && !isMobile) ? { flex: 1, width: 'fit-content' } : {}}
              >
                {(orderState?.loading || actionStatus.loading) ? t('LOADING', 'Loading') : t('ADD_NEW_ADDRESS', 'Add New Address')}
              </Button>
            </>
          )
        }
        {
          isPopover && addressOpen && (
            <AddressForm
              userId={userId}
              addressesList={addressList?.addresses}
              useValidationFileds
              address={curAddress}
              onCancel={() => handleCloseAddressForm()}
              onSaveAddress={handleSaveAddress}
              userCustomerSetup={userCustomerSetup}
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
          ((!addressOpen && isPopover) || isModal) && (
            <AddressListUl id='list'>
              <AddressTitle>{t('SELECT_ONE_OF_SAVED_PLACES', 'Select one of your saved places')}</AddressTitle>
              {uniqueAddressesList.map(address => (
                <AddressItem key={address?.id}>
                  <div className='wrapAddress' onClick={() => handleSetAddress(address)}>
                    <span className='radio'>
                      {checkAddress(address) ? <RiRadioButtonFill className='address-checked' /> : <IosRadioButtonOff />}
                    </span>
                    {showIcons && (
                      <span className={checkAddress(address) ? 'selected-tag tag' : 'tag'}>
                        {address?.tag === 'home' && <House />}
                        {address?.tag === 'office' && <Building />}
                        {address?.tag === 'favorite' && <Heart />}
                        {address?.tag === 'other' && <PlusLg />}
                      </span>
                    )}
                    {(showAddress || showInternalNumber || showZipcode) && (
                      <div className='address'>
                        {
                          showAddress && (
                            <span>{address.address}</span>
                          )
                        }
                        <span>{showInternalNumber && address.internal_number} {showZipcode && address.zipcode}</span>
                      </div>
                    )}
                  </div>
                  <AddressItemActions className='form'>
                    <a className={actionStatus.loading ? 'disabled' : ''} onClick={() => openAddress(address)}>
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

        {!(addressList.loading || actionStatus.loading || orderState.loading) &&
          !addressList.error &&
          addressList?.addresses?.length === 0 &&
          !isProductForm &&
          (
            <WrappNotAddresses>
              <img src={theme.images?.general?.notFound} alt='Not Found' width='200px' height='112px' loading='lazy' />
              <h1>{t('NOT_FOUND_ADDRESS', 'Sorry, You don\'t seem to have any addresses.')}</h1>
            </WrappNotAddresses>
          )}

        {!(addressList.loading || actionStatus.loading || orderState.loading) && addressList.error && (
          addressList.error.length > 0 && (
            <NotFoundSource
              image={notFoundImage}
              content={addressList.error[0]?.message || addressList.error[0]}
            />
          )
        )}

        {!(addressList.loading || actionStatus.loading || orderState.loading) && (typeof orderState.options?.address !== 'object') && !addressList.error && (
          <NotFoundSource
            content={t('NETWORK_ERROR', 'Network error, please reload the page')}
          />
        )}

        {(addressList.loading || actionStatus.loading || orderState.loading) && !isProductForm && (
          <AddressListUl>
            <Skeleton height={50} count={3} style={{ marginBottom: '10px' }} />
          </AddressListUl>
        )}
      </>
    )
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AddressListContainer id='address_control' isLoading={actionStatus?.loading || orderState?.loading} isCompletedLayout={isCompletedLayout}>
        {!isCompletedLayout ? (
          <AddressListCallcenterLayout>
            <AddressListContent />
          </AddressListCallcenterLayout>
        ) : (
          <AddressListContent />
        )}
        {
          !isPopover && addressOpen && (
            <Modal
              title={t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
              open={!isPopover && addressOpen && isCompletedLayout}
              onClose={() => handleCloseAddressForm()}
            >
              <AddressForm
                userId={userId}
                addressesList={addressList?.addresses}
                useValidationFileds
                address={curAddress}
                onSaveAddress={handleSaveAddress}
                userCustomerSetup={userCustomerSetup}
                onCancel={() => handleCloseAddressForm()}
              />
            </Modal>
          )
        }
        <Confirm
          title={t('SEARCH', 'Search')}
          content={confirm.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={confirm.open}
          onClose={() => setConfirm({ ...confirm, open: false })}
          onCancel={() => setConfirm({ ...confirm, open: false })}
          onAccept={confirm.handleOnAccept}
          closeOnBackdrop={false}
        />
      </AddressListContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const AddressList = (props) => {
  const addressListProps = {
    ...props,
    UIComponent: AddressListUI
  }

  return <AddressListController {...addressListProps} />
}
