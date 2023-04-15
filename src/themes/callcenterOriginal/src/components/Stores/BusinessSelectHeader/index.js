import React, { useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils,
  DashboardBusinessList as BusinessListController
} from 'ordering-components-'
import { Button } from '../../../styles'
import {
  PopMenuContatiner,
  BusinessSearch,
  OptionItem,
  BusinessList,
  WrapperPagination,
  SelectHeaderContent
} from './styles'
import { Pagination, SearchBar } from '../../Shared'

const BusinessessListingUI = (props) => {
  const {
    businessList,
    pagination,
    searchValue,
    onSearch,
    getPageBusinesses,
    isOpen,
    close,
    changeBusinessState,
    handleOpenAddBusiness
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const dropdownReference = useRef()

  const handleChangePage = (page) => {
    getPageBusinesses(pagination.pageSize, page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getPageBusinesses(pageSize, expectedPage)
  }

  const closeSelect = (e) => {
    if (isOpen) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        close()
      }
    }
  }

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('mouseup', closeSelect)
    return () => document.removeEventListener('mouseup', closeSelect)
  }, [isOpen])

  return (
    <PopMenuContatiner ref={dropdownReference}>
      <SelectHeaderContent>
        <BusinessSearch>
          <SearchBar
            isCustomLayout
            lazyLoad
            onSearch={onSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </BusinessSearch>
        <BusinessList>
          {businessList.loading ? (
            [...Array(pagination.pageSize).keys()].map(i => (
              <OptionItem key={i}>
                <Skeleton width={38} height={38} style={{ borderRadius: '7.6px' }} />
                <div style={{ marginLeft: '8px', marginRight: '8px' }}>
                  <Skeleton height={15} width={140} />
                  <Skeleton height={12} width={80} style={{ marginTop: '7px' }} />
                </div>
              </OptionItem>
            ))
          ) : (
            <>
              {businessList.businesses.map(business => (
                <OptionItem key={business.id} onClick={() => changeBusinessState(business)}>
                  <img src={optimizeImage(business?.logo, 'h_50,c_limit')} alt='' />
                  <div>
                    <b>{business?.name}</b>
                    <p>{business?.city?.name}</p>
                  </div>
                </OptionItem>
              ))}
            </>
          )}
        </BusinessList>
        {pagination && pagination?.total > 0 && (
          <WrapperPagination className='pagination-container'>
            {pagination?.total && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={Math.ceil(pagination?.total / pagination.pageSize)}
                handleChangePage={handleChangePage}
                defaultPageSize={pagination.pageSize}
                handleChangePageSize={handleChangePageSize}
                isHidePagecontrol
              />
            )}
          </WrapperPagination>
        )}

        {!businessList.loading && pagination?.total === 0 && (
          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => handleOpenAddBusiness()}
          >
            {t('ADD_NEW_STORE', 'Add new store')}
          </Button>
        )}
      </SelectHeaderContent>
    </PopMenuContatiner>
  )
}

export const BusinessSelectHeader = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessessListingUI,
    asDashboard: true,
    loadMorePageSize: props.defaultPageSize ?? 6,
    paginationSettings: {
      pageSize: props.defaultPageSize ?? 6
    },
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    propsToFetch: props.defaultPropsToFetch ?? ['name', 'slug', 'logo', 'city']
  }
  return (
    <BusinessListController {...businessListingProps} />
  )
}
