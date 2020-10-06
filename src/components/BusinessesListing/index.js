import React, { useEffect, useState, useCallback } from 'react'
import { CancelToken } from 'ordering-api-sdk'
import { isADateValid } from '../../utils'

import {
  BusinessContainer,
  BusinessList,
  ErrorMessage
} from './styles'

import { Button } from '../../styles/Buttons'

import { NotFoundSource } from '../NotFoundSource'

import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { BusinessController } from '../BusinessController'
import { useOrder, useApi, useSession, useLanguage } from 'ordering-components'

const PIXELS_TO_SCROLL = 300

export const BusinessesListing = (props) => {
  console.log('Move BusinessesListing to ordering-componenets')
  const {
    propsToFetch,
    onBusinessClick
  } = props

  const [{ auth }] = useSession()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  const [paginationProps, setPaginationProps] = useState({ currentPage: 0, pageSize: 10, totalItems: null, totalPages: null })
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)
  const [orderState] = useOrder()
  const [ordering] = useApi()
  const requestsState = {}

  const getBusinesses = async (newFetch) => {
    try {
      setBusinessesList({ ...businessesList, loading: true })
      const parameters = {
        location: `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`,
        type: orderState.options?.type || 1,
        page: newFetch ? 1 : paginationProps.currentPage + 1,
        page_size: paginationProps.pageSize
      }

      if (orderState.options?.moment && isADateValid(orderState.options?.moment)) {
        const parts = orderState?.options?.moment?.split(' ')
        const dateParts = parts[0]?.split('-')
        const timeParts = parts[1]?.split(':')
        const moment = Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1], timeParts[2]) / 1000
        parameters.timestamp = moment
      }
      const where = []
      if (businessTypeSelected) {
        where.push({ attribute: businessTypeSelected, value: true })
      }

      const source = CancelToken.source()
      requestsState.businesses = source
      const { content: { result, pagination } } = await ordering.businesses().select(propsToFetch).parameters(parameters).where(where).get({ cancelToken: source.token })
      businessesList.businesses = newFetch ? result : [...businessesList.businesses, ...result]
      setBusinessesList({
        ...businessesList,
        loading: false
      })
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - businessesList.businesses.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        nextPageItems
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessesList({
          ...businessesList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  useEffect(() => {
    return () => {
      if (requestsState.businesses) {
        requestsState.businesses.cancel()
      }
    }
  }, [paginationProps])

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

  /**
   * Listening order option and filter changes
   */
  useEffect(() => {
    if (orderState.loading || !orderState.options?.address?.location) return
    console.log(orderState.options)
    getBusinesses(true)
  }, [orderState, businessTypeSelected])

  const handleBusinessClick = (business) => {
    onBusinessClick && onBusinessClick(business)
  }

  const handleChangeBusinessType = (businessType) => {
    setBusinessesList({
      ...businessesList,
      businesses: []
    })
    setBusinessTypeSelected(businessType)
  }

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    // onFindBusiness && onFindBusiness()
  }

  return (
    <BusinessContainer>
      {!businessesList.loading && businessesList.businesses.length > 0 && (
        <BusinessTypeFilter
          ordering={props.ordering}
          handleChangeBusinessType={handleChangeBusinessType}
        />
      )}
      <BusinessList>
        {
          !businessesList.loading && !businessTypeSelected && businessesList.businesses.length === 0 && (
            <NotFoundSource
              content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change address.')}
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
            />
          ))
        )}
        {businessesList.error && businessesList.error.length > 0 && (
          businessesList.error.map((e, i) => (
            <ErrorMessage key={i}>ERROR: [{e.message}]</ErrorMessage>
          ))
        )}
      </BusinessList>

      <Modal
        title={t('ADDRESS')}
        open={modals.formOpen}
        closeOnBackdrop={false}
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
        closeOnBackdrop={false}
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
