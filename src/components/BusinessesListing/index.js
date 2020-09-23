import React, { useEffect, useState, useCallback } from 'react'
import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  NotFoundBusinesses
} from './styles'

import { Button } from '../../styles/Buttons'

import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { BusinessController } from '../BusinessController'
import { useOrder, useApi } from 'ordering-components'

export const BusinessesListing = (props) => {
  const {
    propsToFetch,
    onBusinessClick
  } = props

  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  const [paginationProps, setPaginationProps] = useState({ currentPage: 0, pageSize: 10, totalItems: null, totalPages: null })
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)
  const [orderState] = useOrder()
  const [ordering] = useApi()

  const getBusinesses = async (newFetch) => {
    try {
      setBusinessesList({ ...businessesList, loading: true })
      const parameters = {
        location: `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`,
        type: orderState.options?.type || 1,
        page: newFetch ? 1 : paginationProps.currentPage + 1,
        page_size: paginationProps.pageSize
      }
      const where = []
      if (businessTypeSelected) {
        where.push({ attribute: businessTypeSelected, value: true })
      }

      const { content: { result, pagination } } = await ordering.businesses().select(propsToFetch).parameters(parameters).where(where).get()

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
    } catch (e) {
      setBusinessesList({
        ...businessesList,
        loading: false,
        error: [e.message]
      })
    }
  }

  const handleScroll = useCallback(() => {
    const badScrollPosition = window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (orderState.loading || !orderState.options?.address?.location) return
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

  return (
    <BusinessContainer>
      <BusinessTypeFilter
        ordering={props.ordering}
        handleChangeBusinessType={handleChangeBusinessType}
      />
      <BusinessList>
        {
          !businessesList.loading && !businessTypeSelected && businessesList.businesses.length === 0 && (
            <NotFoundBusinesses>
              <h1>Not Found elements</h1>
              <div>
                <h3>Select other address</h3>
                <Button color='primary'>Change</Button>
              </div>
            </NotFoundBusinesses>
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
    </BusinessContainer>
  )
}
