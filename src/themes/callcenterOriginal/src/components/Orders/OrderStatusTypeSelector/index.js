import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../../styles/Select/DashboardSelect'
import { Select as FirstSelect } from '../../../styles/Select/FirstSelect'
import { MultiSelect } from '../../../styles/MultiSelect'
import { Option, PlaceholderTitle, OrderStatusTypeSelectWrapper } from './styles'

export const OrderStatusTypeSelector = (props) => {
  const {
    isFirstSelect,
    defaultValue,
    deliveryType,
    mutiOrdersChange,
    orderId,
    type,
    orderControl,
    noPadding,
    noSelected,
    isFilterView,
    filterValues,
    handleUpdateOrderStatus,
    handleChangeMultiOrdersStatus,
    handleChangeOrderStatus
  } = props

  const [, t] = useLanguage()
  const [defaultOptionValue, setDefaultOptionValue] = useState('default')
  const [filteredOrderStatuses, setFilteredOrderStatuses] = useState([])
  const [searchValue, setSearchValue] = useState(null)

  const placeholder = <PlaceholderTitle><p>{t('SELECT_STATUS', 'Select Status')}</p></PlaceholderTitle>

  const orderStatuses = [
    {
      value: 'default',
      name: t('CHANGE_STATUS', 'Change Status'),
      content: <Option noPadding={noPadding}><p>{t('CHANGE_STATUS', 'Change Status')}</p></Option>,
      disabled: true,
      showDisable: true
    },
    {
      value: 'pending',
      name: t('PENDING', 'Pending'),
      content: (
        <Option noPadding={noPadding} isSubTitle>
          <p>{t('PENDING', 'Pending')}</p>
        </Option>
      ),
      disabled: true
    },
    {
      value: 0,
      name: t('PENDING', 'Pending'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PENDING', 'Pending')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 13,
      name: t('PREORDER', 'Preorder'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PREORDER', 'Preorder')}</p>
        </Option>
      ),
      color: 'primary',
      disabled: true
    },
    {
      value: 'inProgress',
      name: t('IN_PROGRESS', 'In Progress'),
      content: (
        <Option noPadding={noPadding} isSubTitle>
          <p>{t('IN_PROGRESS', 'In Progress')}</p>
        </Option>
      ),
      disabled: true
    },
    {
      value: 7,
      name: t('ACCEPTED_BY_BUSINESS', 'Accepted by Business'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 4,
      name: t('PREPARATION_COMPLETED', 'Preparation Completed'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PREPARATION_COMPLETED', 'Preparation Completed')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 8,
      name: t('ACCEPTED_BY_DRIVER', 'Accepted by Driver'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 3,
      name: t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 9,
      name: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 14,
      name: t('ORDER_NOT_READY', 'Order not ready'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_NOT_READY', 'Order not ready')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 18,
      name: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 19,
      name: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 20,
      name: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 21,
      name: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 22,
      name: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 23,
      name: t('ORDER_DRIVER_ON_WAY', 'Driver on way'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_DRIVER_ON_WAY', 'Driver on way')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: null,
      name: t('COMPLETED', 'Completed'),
      content: (
        <Option noPadding={noPadding} isSubTitle>
          <p>{t('COMPLETED', 'Completed')}</p>
        </Option>
      ),
      disabled: true
    },
    {
      value: 1,
      name: t('COMPLETED_BY_ADMIN', 'Completed by Admin'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('COMPLETED_BY_ADMIN', 'Completed by Admin')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 11,
      name: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 15,
      name: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: null,
      name: t('CANCELLED', 'Cancelled'),
      content: (
        <Option noPadding={noPadding} isSubTitle>
          <p>{t('CANCELLED', 'Cancelled')}</p>
        </Option>
      ),
      disabled: true
    },
    {
      value: 2,
      name: t('REJECTED_BY_ADMIN', 'Rejected by Admin'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('REJECTED_BY_ADMIN', 'Rejected by Admin')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 5,
      name: t('REJECTED_BY_BUSINESS', 'Rejected by Business'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('REJECTED_BY_BUSINESS', 'Rejected by Business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 6,
      name: t('REJECTED_BY_DRIVER', 'Rejected by Driver'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('REJECTED_BY_DRIVER', 'Rejected by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 10,
      name: t('PICK_UP_FAILED_BY_DRIVER', 'Pickup Failed by Driver'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PICK_UP_FAILED_BY_DRIVER', 'Pickup Failed by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 12,
      name: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 16,
      name: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 17,
      name: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer'),
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer')}</p>
        </Option>
      ),
      color: 'primary'
    }
  ]

  const changeOrderStatus = (orderStatus) => {
    if (orderStatus !== 'default' && orderStatus !== defaultValue) {
      if (!mutiOrdersChange) {
        handleUpdateOrderStatus({ id: orderId, newStatus: orderStatus })
      } else {
        handleChangeMultiOrdersStatus(orderStatus)
      }
    }
  }

  useEffect(() => {
    if (!isFilterView) {
      if (orderControl) {
        setFilteredOrderStatuses(orderStatuses)
      } else {
        let _filteredOrderStatuses = []
        let extractOrderStatus = []
        switch (deliveryType) {
          case 1:
            extractOrderStatus = orderStatuses.slice(0, 13)
            _filteredOrderStatuses = [...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(15, 20)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(21, 28)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            if (searchValue) {
              _filteredOrderStatuses = [..._filteredOrderStatuses?.filter(orderStatus => orderStatus?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
            }
            setFilteredOrderStatuses(_filteredOrderStatuses)
            break
          case 2:
            extractOrderStatus = orderStatuses.slice(0, 7)
            _filteredOrderStatuses = [...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(10, 11)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(13, 15)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(17, 19)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(20, 24)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(27, 29)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            if (searchValue) {
              _filteredOrderStatuses = [..._filteredOrderStatuses?.filter(orderStatus => orderStatus?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
            }
            setFilteredOrderStatuses(_filteredOrderStatuses)
            break
          case 3:
            extractOrderStatus = orderStatuses.slice(0, 3)
            _filteredOrderStatuses = [...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(4, 7)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(17, 19)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(20, 24)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(27, 29)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            if (searchValue) {
              _filteredOrderStatuses = [..._filteredOrderStatuses?.filter(orderStatus => orderStatus?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
            }
            setFilteredOrderStatuses(_filteredOrderStatuses)
            break
          case 4:
            extractOrderStatus = orderStatuses.slice(0, 7)
            _filteredOrderStatuses = [...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(10, 11)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(13, 15)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(17, 19)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(20, 24)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(27, 29)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            if (searchValue) {
              _filteredOrderStatuses = [..._filteredOrderStatuses?.filter(orderStatus => orderStatus?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
            }
            setFilteredOrderStatuses(_filteredOrderStatuses)
            break
          case 5:
            extractOrderStatus = orderStatuses.slice(0, 7)
            _filteredOrderStatuses = [...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(10, 11)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(13, 15)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(17, 19)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(20, 24)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            extractOrderStatus = orderStatuses.slice(27, 29)
            _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]
            if (searchValue) {
              _filteredOrderStatuses = [..._filteredOrderStatuses?.filter(orderStatus => orderStatus?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
            }
            setFilteredOrderStatuses(_filteredOrderStatuses)
            break
          default:
            if (searchValue) {
              _filteredOrderStatuses = [...orderStatuses?.filter(orderStatus => orderStatus?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
            }
            setFilteredOrderStatuses(_filteredOrderStatuses)
            break
        }
      }
    } else {
      let _filteredOrderStatuses = []
      let extractOrderStatus = []
      extractOrderStatus = orderStatuses.slice(2, 4)
      _filteredOrderStatuses = [...extractOrderStatus]

      extractOrderStatus = orderStatuses.slice(5, 17)
      _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]

      extractOrderStatus = orderStatuses.slice(18, 21)
      _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]

      extractOrderStatus = orderStatuses.slice(22, 29)
      _filteredOrderStatuses = [..._filteredOrderStatuses, ...extractOrderStatus]

      setFilteredOrderStatuses(_filteredOrderStatuses)
    }
  }, [deliveryType, searchValue])

  useEffect(() => {
    setDefaultOptionValue(defaultValue)
  }, [defaultValue])

  const filterChangeOrderStatus = (status) => {
    handleChangeOrderStatus(status)
  }

  const [defaultFilterValues, setDefaultFilterValues] = useState([])

  useEffect(() => {
    if (isFilterView) {
      const _defaultFilterValues = [...filterValues.statuses]
      setDefaultFilterValues(_defaultFilterValues)
    }
  }, [filterValues])

  const handleChangeSearch = (searchValue) => {
    setSearchValue(searchValue)
  }

  if (isFilterView) {
    return (
      <MultiSelect
        className='order-status-multi-select'
        optionInnerMaxHeight='50vh'
        placeholder={placeholder}
        defaultValue={defaultFilterValues}
        options={filteredOrderStatuses}
        onChange={(orderStatus) => filterChangeOrderStatus(orderStatus)}
      />
    )
  } else {
    return (
      <OrderStatusTypeSelectWrapper>
        {isFirstSelect ? (
          <FirstSelect
            searchBarIsCustomLayout
            searchBarIsNotLazyLoad
            searchBarPlaceholder={t('SEARCH', 'Search')}
            type={type}
            placeholder={<Option noPadding={noPadding} isSubTitle><p>{t('CHANGE_STATUS', 'Change Status')}</p></Option>}
            optionInnerMaxHeight='50vh'
            noSelected={noSelected}
            defaultValue={defaultOptionValue}
            options={filteredOrderStatuses}
            onChange={(orderStatus) => changeOrderStatus(orderStatus)}
            className='orderStatus'
            isShowSearchBar
            searchValue={searchValue}
            handleChangeSearch={handleChangeSearch}
          />
        ) : (
          <Select
            searchBarIsCustomLayout
            searchBarIsNotLazyLoad
            searchBarPlaceholder={t('SEARCH', 'Search')}
            type={type}
            placeholder={<Option noPadding={noPadding} isSubTitle><p>{t('CHANGE_STATUS', 'Change Status')}</p></Option>}
            optionInnerMaxHeight='50vh'
            noSelected={noSelected}
            defaultValue={defaultOptionValue}
            options={filteredOrderStatuses}
            searchValue={searchValue}
            onChange={(orderStatus) => changeOrderStatus(orderStatus)}
            className='orderStatus'
          />
        )}
      </OrderStatusTypeSelectWrapper>
    )
  }
}
