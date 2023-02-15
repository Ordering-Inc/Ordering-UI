import React from 'react'
import { useLanguage, OrdersFilter as OrdersFilterController } from 'ordering-components'
import { BusinessesSelector } from '../BusinessesSelector'
import { DriversGroupTypeSelector } from '../DriversGroupTypeSelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { DriverSelector } from '../DriverSelector'
import { AdminSelector } from '../AdminSelector'
import { CitySelector, Modal } from '../../Shared'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DeliveryTypeSelector } from '../DeliveryTypeSelector'
import { PaymethodTypeSelector } from '../PaymethodTypeSelector'
import { CountryFilter } from '../CountryFilter'
import { Button, Input } from '../../../styles'
import { CurrencyFilter } from '../CurrencyFilter'

import {
  FilterGroupListContainer,
  WrapperRow,
  MultiSelectContainer,
  ButtonGroup
} from './styles'

const OrdersFilterGroupUI = (props) => {
  const {
    open,
    handleCloseFilterModal,
    filterValues,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    citiesList,
    handleChangeGroup,
    handleChangeDateType,
    handleChangeFromDate,
    handleChangeEndDate,
    handleChangeBusinesses,
    handleChangeDriver,
    handleChangeCity,
    handleChangeOrderStatus,
    handleChangeDeliveryType,
    handleChangePaymethodType,
    handleResetFilterValues,
    handleChangeFilterValues,
    handleChangeOrderId,
    handleChangeCountryCode,
    handleChangeCurrency,
    handleChangeAdmin
  } = props

  const [, t] = useLanguage()

  const handleAcceptFilter = () => {
    handleChangeFilterValues(filterValues)
    handleCloseFilterModal()
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

  return (
    <Modal
      width='80%'
      padding='0px'
      open={open}
      onClose={() => handleCloseFilterModal()}
    >
      <FilterGroupListContainer className='filter-modal'>
        <h1>{t('FILTER', 'Filter')}</h1>
        <WrapperRow>
          <Input
            type='text'
            placeholder='ID'
            autoComplete='off'
            value={filterValues?.orderId || ''}
            onChange={(e) => handleChangeOrderId(e)}
          />
        </WrapperRow>
        <WrapperRow>
          <DriversGroupTypeSelector
            driverGroupList={driverGroupList}
            handleChangeGroup={handleChangeGroup}
            filterValues={filterValues}
          />
          <DateTypeSelector
            filterValues={filterValues}
            handleChangeDateType={handleChangeDateType}
            handleChangeFromDate={handleChangeFromDate}
            handleChangeEndDate={handleChangeEndDate}
          />
        </WrapperRow>
        <WrapperRow>
          <BusinessesSelector
            filterValues={filterValues}
            businessesList={businessesList}
            handleChangeBusinesses={handleChangeBusinesses}
          />
          <DriverSelector
            isFilterView
            drivers={driversList.drivers}
            filterValues={filterValues}
            handleChangeDriver={handleChangeDriver}
          />
        </WrapperRow>
        <WrapperRow>
          <CitySelector
            cities={citiesList}
            filterValues={filterValues}
            handleChangeCity={handleChangeCity}
          />
          <MultiSelectContainer>
            <OrderStatusTypeSelector
              isFilterView
              filterValues={filterValues}
              handleChangeOrderStatus={handleChangeOrderStatus}
            />
          </MultiSelectContainer>
        </WrapperRow>
        <WrapperRow>
          <DeliveryTypeSelector
            filterValues={filterValues}
            handleChangeDeliveryType={handleChangeDeliveryType}
          />
          <PaymethodTypeSelector
            paymethodsList={paymethodsList}
            filterValues={filterValues}
            handleChangePaymethodType={handleChangePaymethodType}
          />
        </WrapperRow>
        <WrapperRow>
          <CountryFilter
            filterValues={filterValues}
            handleChangeCountryCode={handleChangeCountryCode}
          />
          <CurrencyFilter
            filterValues={filterValues}
            handleChangeCurrency={handleChangeCurrency}
          />
        </WrapperRow>
        <WrapperRow>
          <AdminSelector
            isFilterView
            filterValues={filterValues}
            handleChangeAdmin={handleChangeAdmin}
          />
        </WrapperRow>
        <ButtonGroup>
          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => handleAcceptFilter()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
          <Button
            color='secundaryDark'
            borderRadius='8px'
            onClick={() => handleClearFilter()}
          >
            {t('CLEAR', 'Clear')}
          </Button>
        </ButtonGroup>
      </FilterGroupListContainer>
    </Modal>
  )
}

export const OrdersFilterGroup = (props) => {
  const FilterControlProps = {
    ...props,
    UIComponent: OrdersFilterGroupUI,
    driverGroupList: props.driverGroupList
  }
  return (
    <>
      <OrdersFilterController {...FilterControlProps} />
    </>
  )
}
