import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import VscEdit from '@meronex/icons/vsc/VscEdit'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import IosRadioButtonOn from '@meronex/icons/ios/IosRadioButtonOn'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'

import {
  AddressList as AddressListController,
  useLanguage,
  useOrder,
  useCustomer,
  useEvent
} from 'ordering-components'

import {
  AddressListContainer,
  AddressListUl,
  AddressItem,
  AddressItemActions,
  WrappNotAddresses,
  FormActions,
  ContinueButton
} from './styles'

import { NotFoundSource } from '../../../../../components/NotFoundSource'
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
    onCancel,
    onAccept,
    userId,
    userCustomerSetup,
    isEnableContinueButton,
    setCustomerModalOpen,
    isCustomerMode,
    isFromCheckout
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [curAddress, setCurAddress] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const theme = useTheme()
  const [{ user }] = useCustomer()

  const uniqueAddressesList = (addressList.addresses && addressList.addresses.filter(
    (address, i, self) =>
      i === self.findIndex(obj => (
        address.address === obj.address &&
        address.address_notes === obj.address_notes &&
        address.zipcode === obj.zipcode &&
        address.internal_number === obj.internal_number
      )))) || []

  const openAddress = (address) => {
    setCurAddress(address)
    setAddressOpen(true)
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
    setAddressOpen(false)
  }

  const handleSetAddress = (address) => {
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

    setAddressOpen(false)
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

  /**
   * Close modals and alerts
   */
  useEffect(() => {
    return () => {
      setConfirm({ ...confirm, open: false })
      setAddressOpen(false)
    }
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AddressListContainer id='address_control' isLoading={actionStatus?.loading || orderState?.loading}>
        {
          (!isPopover || !addressOpen) && (
            <Button
              className='add'
              outline
              color={isEnableContinueButton && addressList?.addresses?.length > 0 ? 'secondary' : 'primary'}
              onClick={() => openAddress({})}
              disabled={orderState?.loading || actionStatus.loading}
            >
              {(orderState?.loading || actionStatus.loading) ? t('LOADING', 'Loading') : t('ADD_NEW_ADDRESS', 'Add New Address')}
            </Button>
          )
        }
        {
          isPopover && addressOpen && (
            <AddressForm
              userId={userId}
              addressesList={addressList?.addresses}
              useValidationFileds
              address={curAddress}
              onCancel={() => setAddressOpen(false)}
              onSaveAddress={handleSaveAddress}
              userCustomerSetup={userCustomerSetup}
            />
          )
        }
        {
          !isPopover && (
            <Modal
              title={t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?')}
              open={!isPopover && addressOpen}
              onClose={() => setAddressOpen(false)}
            >
              <AddressForm
                userId={userId}
                addressesList={addressList?.addresses}
                useValidationFileds
                address={curAddress}
                onCancel={() => setAddressOpen(false)}
                onSaveAddress={handleSaveAddress}
                userCustomerSetup={userCustomerSetup}
              />
            </Modal>
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
              {uniqueAddressesList.map(address => (
                <AddressItem key={address?.id}>
                  <div className='wrapAddress' onClick={() => handleSetAddress(address)}>
                    <span className='radio'>
                      {checkAddress(address) ? <IosRadioButtonOn /> : <IosRadioButtonOff />}
                    </span>
                    <span className='tag'>
                      {address?.tag === 'home' && <HouseIcon />}
                      {address?.tag === 'office' && <BuildingIcon />}
                      {address?.tag === 'favorite' && <HeartIcon />}
                      {address?.tag === 'other' && <PlusIcon />}
                    </span>
                    <div className='address'>
                      <span>{address.address}</span>
                      <span>{address.internal_number} {address.zipcode}</span>
                    </div>
                  </div>
                  <AddressItemActions className='form'>
                    <a className={actionStatus.loading ? 'disabled' : ''} onClick={() => openAddress(address)}>
                      <VscEdit />
                    </a>
                    <a className={actionStatus.loading || address.default ? 'disabled' : ''} onClick={() => handleDeleteClick(address)}>
                      <VscTrash />
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

        {onCancel && onAccept && typeof orderState.options?.address === 'object' && (
          <FormActions>
            <Button
              outline
              type='button'
              disabled={(addressList.loading || actionStatus.loading || orderState.loading)}
              onClick={() => onCancel()}
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

export const HouseIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d='M3 20.25V10.5H4.5V20.25C4.5 20.4489 4.57902 20.6397 4.71967 20.7803C4.86032 20.921 5.05109 21 5.25 21H18.75C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25V10.5H21V20.25C21 20.8467 20.7629 21.419 20.341 21.841C19.919 22.2629 19.3467 22.5 18.75 22.5H5.25C4.65326 22.5 4.08097 22.2629 3.65901 21.841C3.23705 21.419 3 20.8467 3 20.25ZM19.5 3.75V9L16.5 6V3.75C16.5 3.55109 16.579 3.36032 16.7197 3.21967C16.8603 3.07902 17.0511 3 17.25 3H18.75C18.9489 3 19.1397 3.07902 19.2803 3.21967C19.421 3.36032 19.5 3.55109 19.5 3.75Z' fill='#2C7BE5' />
      <path fillRule='evenodd' clipRule='evenodd' d='M10.9395 2.24997C11.2208 1.96876 11.6022 1.81079 12 1.81079C12.3977 1.81079 12.7792 1.96876 13.0605 2.24997L23.031 12.219C23.1718 12.3598 23.2509 12.5508 23.2509 12.75C23.2509 12.9491 23.1718 13.1401 23.031 13.281C22.8901 13.4218 22.6991 13.5009 22.5 13.5009C22.3008 13.5009 22.1098 13.4218 21.969 13.281L12 3.31047L2.03097 13.281C1.89014 13.4218 1.69913 13.5009 1.49997 13.5009C1.30081 13.5009 1.1098 13.4218 0.968971 13.281C0.828141 13.1401 0.749023 12.9491 0.749023 12.75C0.749023 12.5508 0.828141 12.3598 0.968971 12.219L10.9395 2.24997Z' fill='#2C7BE5' />
    </svg>
  )
}

export const BuildingIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d='M22.1445 0.112324C22.2531 0.179515 22.3428 0.273342 22.405 0.384908C22.4673 0.496475 22.4999 0.622083 22.5 0.749824V23.2498C22.5 23.4487 22.421 23.6395 22.2803 23.7802C22.1397 23.9208 21.9489 23.9998 21.75 23.9998H17.25C17.0511 23.9998 16.8603 23.9208 16.7197 23.7802C16.579 23.6395 16.5 23.4487 16.5 23.2498V20.9998H15V23.2498C15 23.4487 14.921 23.6395 14.7803 23.7802C14.6397 23.9208 14.4489 23.9998 14.25 23.9998H0.75C0.551088 23.9998 0.360322 23.9208 0.21967 23.7802C0.0790176 23.6395 0 23.4487 0 23.2498V14.9998C0.00011947 14.8425 0.0497221 14.6892 0.141787 14.5616C0.233853 14.434 0.363717 14.3385 0.513 14.2888L9 11.4598V6.74982C9 6.61066 9.03873 6.47423 9.11185 6.35582C9.18496 6.23741 9.28958 6.14167 9.414 6.07932L21.414 0.0793236C21.5285 0.0220324 21.6557 -0.00501211 21.7835 0.00076422C21.9114 0.00654055 22.0357 0.0449455 22.1445 0.112324ZM9 13.0408L1.5 15.5398V22.4998H9V13.0408ZM10.5 22.4998H13.5V20.2498C13.5 20.0509 13.579 19.8601 13.7197 19.7195C13.8603 19.5788 14.0511 19.4998 14.25 19.4998H17.25C17.4489 19.4998 17.6397 19.5788 17.7803 19.7195C17.921 19.8601 18 20.0509 18 20.2498V22.4998H21V1.96332L10.5 7.21332V22.4998Z' fill='#B1BCCC' />
    </svg>
  )
}

export const HeartIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path d='M12 4.12207L10.9245 3.01657C8.39996 0.421573 3.77096 1.31707 2.09996 4.57957C1.31546 6.11407 1.13846 8.32957 2.57096 11.1571C3.95096 13.8796 6.82196 17.1406 12 20.6926C17.178 17.1406 20.0475 13.8796 21.429 11.1571C22.8615 8.32807 22.686 6.11407 21.9 4.57957C20.229 1.31707 15.6 0.420073 13.0755 3.01507L12 4.12207ZM12 22.5001C-10.9995 7.30207 4.91846 -4.55993 11.736 1.71457C11.826 1.79707 11.9145 1.88257 12 1.97107C12.0846 1.88265 12.1727 1.79759 12.264 1.71607C19.08 -4.56293 34.9995 7.30057 12 22.5001Z' fill='#B1BCCC' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>

  )
}

export const PlusIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 0C12.3978 0 12.7794 0.158036 13.0607 0.43934C13.342 0.720645 13.5 1.10218 13.5 1.5V10.5H22.5C22.8978 10.5 23.2794 10.658 23.5607 10.9393C23.842 11.2206 24 11.6022 24 12C24 12.3978 23.842 12.7794 23.5607 13.0607C23.2794 13.342 22.8978 13.5 22.5 13.5H13.5V22.5C13.5 22.8978 13.342 23.2794 13.0607 23.5607C12.7794 23.842 12.3978 24 12 24C11.6022 24 11.2206 23.842 10.9393 23.5607C10.658 23.2794 10.5 22.8978 10.5 22.5V13.5H1.5C1.10218 13.5 0.720645 13.342 0.43934 13.0607C0.158036 12.7794 0 12.3978 0 12C0 11.6022 0.158036 11.2206 0.43934 10.9393C0.720645 10.658 1.10218 10.5 1.5 10.5H10.5V1.5C10.5 1.10218 10.658 0.720645 10.9393 0.43934C11.2206 0.158036 11.6022 0 12 0Z' fill='#B1BCCC' />
    </svg>

  )
}
