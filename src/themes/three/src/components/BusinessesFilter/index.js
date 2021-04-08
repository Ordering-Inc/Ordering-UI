import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'
import BsDot from '@meronex/icons/bs/BsDot'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown'
import BsChevronUp from '@meronex/icons/bs/BsChevronUp'
import {
  useLanguage,
  useOrder,
  useUtils,
  useEvent
} from 'ordering-components'
import {
  Container,
  Title,
  SortContainer,
  SortItem,
  MaxDeliveryFeeContainer,
  WrapStep,
  StepValue,
  Line,
  WrapFilterSectionTitle,
  ClearAll,
  BusinessNumber
} from './styles'
export const BusinessesFilter = (props) => {
  const {
    isFilterPage,
    loading,
    totalItems,
    searchValue,
    businessTypeSelected,
    defaultOrderByValue,
    defaultMaxDeliveryFee,
    handleChangeSort,
    handleMaxDeliveryFee
  } = props
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()

  const [orderState] = useOrder()
  const [sortTypes, setSortTypes] = useState([])
  const [sortSelected, setSortSelected] = useState(null)
  const [maxDeliveryFee, setMaxDeliveryFee] = useState(2)
  const [openSortFilter, setOpenSortFilter] = useState(true)
  const [openMaxDeliveryFeeFilter, setOpenMaxDeliveryFeeFilter] = useState(true)

  const _sortTypes = [
    { value: null, content: t('PICKED_FOR_YOU_(DEFAULT)', 'Picked for you (default)') },
    { value: 'name', content: t('NAME)', 'Name') },
    { value: 'rating', content: t('RATING', 'Rating') },
    { value: 'delivery_time', content: t('DELIVERY_TIME', 'Delivery time') },
    { value: 'pickup_time', content: t('PICKUP_TIME', 'Pickup time') },
    { value: 'minimun', content: t('MINIMUM_PURCHASE', 'Minimum purchase') },
    { value: 'newest', content: t('NEWER_STORE', 'Newer store') }
  ]

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleSort = (value) => {
    setSortSelected(value)
    if (isFilterPage) {
      handleChangeSort(value)
    } else {
      handleGoToPage({ page: 'filter', search: `?orderBy=${value}` })
    }
  }

  const handleMaxDeliveryPrice = (value) => {
    setMaxDeliveryFee(value)
    if (isFilterPage) {
      handleMaxDeliveryFee(value)
    } else {
      handleGoToPage({ page: 'filter', search: `?maxDeliveryFee=${value}` })
    }
  }

  useEffect(() => {
    if (orderState.options?.type === 1) {
      _sortTypes.splice(4, 1)
    } else if (orderState.options?.type === 2) {
      _sortTypes.splice(3, 1)
    } else {
      _sortTypes.splice(3, 2)
    }
    setSortTypes(_sortTypes)
  }, [orderState.options?.type])

  useEffect(() => {
    if (!defaultOrderByValue || defaultOrderByValue === sortSelected) return
    setSortSelected(defaultOrderByValue)
  }, [defaultOrderByValue])

  useEffect(() => {
    if (!defaultMaxDeliveryFee || defaultMaxDeliveryFee === maxDeliveryFee) return
    setMaxDeliveryFee(defaultMaxDeliveryFee)
  }, [defaultMaxDeliveryFee])

  return (
    <Container>
      <Title>
        {(searchValue === '' || searchValue === null || !searchValue) ? (
          <>
            {(businessTypeSelected === null || businessTypeSelected === 'null') ? t('ALL_STORES', 'All stores') : businessTypeSelected}
          </>
        ) : (
          <>
            {searchValue && <span>"{searchValue}"</span>}
          </>
        )}
      </Title>
      {isFilterPage && (
        <BusinessNumber>
          {!loading ? (
            <>
              {totalItems} {t('RESTAURANTS', 'Restaurants')}
            </>
          ) : (
            <Skeleton width={150} />
          )}
        </BusinessNumber>
      )}
      {isFilterPage && (
        <ClearAll onClick={() => handleGoToPage({ page: 'search' })}>
          {t('CLEAR_ALL', 'Clear all')}
        </ClearAll>
      )}
      <SortContainer>
        <WrapFilterSectionTitle onClick={() => setOpenSortFilter(!openSortFilter)}>
          <p>{t('SORT', 'Sort')}</p>
          {openSortFilter ? <BsChevronDown /> : <BsChevronUp />}
        </WrapFilterSectionTitle>
        {openSortFilter && sortTypes.map(item => (
          <SortItem
            key={item.value}
            onClick={() => handleSort(item.value)}
          >
            {item.value === 'delivery_time'}
            {orderState.options?.type === 1}
            {sortSelected === item.value ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
            <span>{item.content}</span>
          </SortItem>
        ))}
      </SortContainer>
      <MaxDeliveryFeeContainer>
        <WrapFilterSectionTitle onClick={() => setOpenMaxDeliveryFeeFilter(!openMaxDeliveryFeeFilter)}>
          <p>{t('MAX_DELIVERY_FEE', 'Max Delivery Fee')}</p>
          {openMaxDeliveryFeeFilter ? <BsChevronDown /> : <BsChevronUp />}
        </WrapFilterSectionTitle>
        {openMaxDeliveryFeeFilter && (
          <WrapStep>
            <StepValue active={maxDeliveryFee === 2}>
              <BsDot onClick={() => handleMaxDeliveryPrice(2)} />
              <span>{parsePrice(2)}</span>
            </StepValue>
            <Line deActive={maxDeliveryFee === 2} />
            <StepValue active={maxDeliveryFee === 3}>
              <BsDot onClick={() => handleMaxDeliveryPrice(3)} />
              <span>{parsePrice(3)}</span>
            </StepValue>
            <Line deActive={maxDeliveryFee <= 3 && maxDeliveryFee !== null} />
            <StepValue active={maxDeliveryFee === 4}>
              <BsDot onClick={() => handleMaxDeliveryPrice(4)} />
              <span>{parsePrice(4)}</span>
            </StepValue>
            <Line deActive={maxDeliveryFee <= 4 && maxDeliveryFee !== null} />
            <StepValue active={maxDeliveryFee === null}>
              <BsDot onClick={() => handleMaxDeliveryPrice(null)} />
              <span>{parsePrice(4)}+</span>
            </StepValue>
          </WrapStep>
        )}
      </MaxDeliveryFeeContainer>
    </Container>
  )
}
