import React, { useEffect, useState, useCallback } from 'react'

import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  WrapperSearch
} from './styles'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'

import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { SearchBar } from '../SearchBar'

import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { BusinessController } from '../BusinessController'
import {
  useOrder,
  useSession,
  useLanguage,
  BusinessList as BusinessListController
} from 'ordering-components'

const PIXELS_TO_SCROLL = 300

const BusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    handleChangeSearch,
    handleChangeBusinessType,
    handleBusinessClick
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  console.log(orderState)

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  return (
    <BusinessContainer>
      <BusinessTypeFilter
        handleChangeBusinessType={handleChangeBusinessType}
      />
      <WrapperSearch>
        <SearchBar
          onSearch={handleChangeSearch}
          search={searchValue}
          placeholder={t('SEARCH_BUSINESS', 'Search Businesses')}
        />
      </WrapperSearch>
      <BusinessList>
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
          businessesList.businesses?.map((business) => (
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
          [...Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()].map(i => (
            <BusinessController
              key={i}
              className='card'
              business={{}}
              isSkeleton
              orderType={orderState?.type}
            />
          ))
        )}
        {businessesList.error && businessesList.error.length > 0 && (
          businessesList.error.map((e, i) => (
            <ErrorMessage key={i}>ERROR: [{e?.message || e}]</ErrorMessage>
          ))
        )}
      </BusinessList>

      <Modal
        title={t('ADDRESS')}
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
        title={t('ADDRESSES')}
        open={modals.listOpen}
        onClose={() => setModals({ ...modals, listOpen: false })}
        onCancel={() => setModals({ ...modals, listOpen: false })}
        onAccept={() => handleFindBusinesses()}
      >
        <AddressList
          changeOrderAddressWithDefault
        />
      </Modal>

      <Alert
        title={t('SEARCH')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </BusinessContainer>
  )
}

export const BusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI
  }

  return <BusinessListController {...businessListingProps} />
}
