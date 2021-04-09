import React, { useState } from 'react'
import { useOrder, useLanguage, useSession, BusinessList as BusinessListController } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Modal } from '../../../../../components/Modal'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { Alert } from '../../../../../components/Confirm'

import {
  Container,
  ErrorMessage
} from './styles'
const FeaturedBuinessesListingUI = (props) => {
  const {
    defaultShowNumber,
    businessesList,
    paginationProps,
    handleBusinessClick
  } = props
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
  }
  return (
    <Container>
      {
        !businessesList.loading && businessesList.businesses.length === 0 && (
          <NotFoundSource
            content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
          >
            <Button
              outline
              color='primary'
              onClick={() => handleClickAddress()}
            >
              {t('CHANGE_ADDRESS', 'Select other Address')}
            </Button>
          </NotFoundSource>
        )
      }
      {
        businessesList.businesses?.slice(0, !defaultShowNumber ? paginationProps?.totalItems : defaultShowNumber).map((business) => (
          <BusinessController
            key={business.id}
            className='card'
            business={business}
            handleCustomClick={handleBusinessClick}
            orderType={orderState?.options?.type}
          />
        ))
      }
      {businessesList.loading && (
        [...Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 3).keys()].map(i => (
          <BusinessController
            key={i}
            className='card'
            business={{}}
            isSkeleton
            orderType={orderState?.options?.type}
          />
        ))
      )}
      {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
        businessesList.error.map((e, i) => (
          <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
        ))
      )}

      <Modal
        title={t('ADDRESS_FORM', 'Address Form')}
        open={modals.formOpen}
        onClose={() => setModals({ ...modals, formOpen: false })}
      >
        <AddressForm
          useValidationFileds
          address={orderState?.options?.address || {}}
          onClose={() => setModals({ ...modals, formOpen: false })}
          onCancel={() => setModals({ ...modals, formOpen: false })}
          onSaveAddress={() => setModals({ ...modals, formOpen: false })}
        />
      </Modal>

      <Modal
        title={t('ADDRESSES', 'Address List')}
        open={modals.listOpen}
        width='70%'
        onClose={() => setModals({ ...modals, listOpen: false })}
      >
        <AddressList
          isModal
          changeOrderAddressWithDefault
          userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
          onCancel={() => setModals({ ...modals, listOpen: false })}
          onAccept={() => handleFindBusinesses()}
        />
      </Modal>
      <Alert
        title={t('SEARCH', 'Search')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => handleCloseAlerts()}
        onAccept={() => handleCloseAlerts()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
export const FeaturedBuinessesListing = (props) => {
  const FeaturedBusinessesListingProps = {
    ...props,
    isFeatured: true,
    UIComponent: FeaturedBuinessesListingUI
  }
  return <BusinessListController {...FeaturedBusinessesListingProps} />
}
