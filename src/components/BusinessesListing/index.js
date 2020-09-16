import React, { useEffect, useState } from 'react'
import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  NotFoundBusinesses
} from './styles'
import { Redirect } from 'react-router-dom'

import { Button } from '../../styles/Buttons'

import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { BusinessController } from '../BusinessController'

export const BusinessesListing = (props) => {
  const {
    ordering,
    propsToFetch
  } = props

  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  const [paginationProps, setPaginationProps] = useState({ currentPage: null, pageSize: 20, totalPages: null })
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [isRedirect, setIsRedirect] = useState(null)

  const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching || !hasMore) return
    setIsFetching(true)
  }

  const getBusinesses = async () => {
    try {
      setBusinessesList({
        ...businessesList,
        loading: true
      })
      const parameters = {
        location: '40.7539143,-73.9810162', // provide this props from search options component
        type: 1 // provide this props from search options component
        // page: paginationProps.page + 1,
        // page_size: paginationProps.pageSize
      }
      const where = businessTypeSelected ? [{ attribute: businessTypeSelected, value: true }] : []
      const { content: { result, pagination } } = await ordering.businesses().select(propsToFetch).parameters(parameters).where(where).get()
      const businesses = result.filter(prop => prop.reviews.total > 0)
      setBusinessesList({
        ...businessesList,
        loading: false,
        businesses: isFetching ? [...businessesList.businesses, ...businesses] : businesses
      })
      setIsFetching(false)
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages
      })
    } catch (e) {
      setBusinessesList({
        ...businessesList,
        loading: false,
        error: [e]
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    getBusinesses()
  }, [isFetching])

  useEffect(() => {
    getBusinesses()
  }, [businessTypeSelected])

  return (
    <BusinessContainer>
      <BusinessTypeFilter
        ordering={props.ordering}
        handleChangeBusinessType={(val) => setBusinessTypeSelected(val)}
      />
      <BusinessList>
        {isFetching ? (
          businessesList.businesses && businessesList.businesses.length > 0 ? (
            !businessesList.businesses.map((item, i) => (
              <BusinessController
                className='card'
                key={i}
                ordering={props.ordering}
                business={item}
                handleCustomClick={(slug) => setIsRedirect(slug)}
              />
            ))
          ) : (
            <NotFoundBusinesses>
              <h1>Not Found elements </h1>
              <div>
                <h3>Select other address</h3>
                <Button color='primary'>Change</Button>
              </div>
            </NotFoundBusinesses>
          )
        ) : (
          !businessesList.loading && !businessesList.error &&
            !businessesList.businesses && businessesList.businesses.length > 0 ? (
              businessesList.businesses.map((item, i) => (
                <BusinessController
                  className='card'
                  key={i}
                  ordering={props.ordering}
                  business={item}
                  handleCustomClick={(slug) => setIsRedirect(slug)}
                />
              ))
            ) : (
              !businessesList.loading && !businessesList.error && (
                <NotFoundBusinesses>
                  <h1>Not Found elements </h1>
                  <div>
                    <h3>Select other address</h3>
                    <Button color='primary'>Change</Button>
                  </div>
                </NotFoundBusinesses>
              )
            )
        )}
        {businessesList.loading && [...Array(isFetching ? 3 : 8).keys()].map(i => (
          <BusinessController
            className='card'
            business={{}}
            ordering={props.ordering}
            key={i}
            isSkeleton
          />
        ))}
        {businessesList.error && businessesList.error.length > 0 && (
          businessesList.error.map((e, i) => (
            <ErrorMessage key={i}>ERROR: [{e.message}]</ErrorMessage>
          ))
        )}
        {isRedirect && <Redirect to={`/store/${isRedirect}`} />}
      </BusinessList>
    </BusinessContainer>
  )
}
