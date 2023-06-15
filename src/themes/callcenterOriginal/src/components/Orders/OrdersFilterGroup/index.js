import React, { useState, useRef, useEffect } from 'react'
import { PlusCircle, Trash3 } from 'react-bootstrap-icons'
import { useLanguage, OrdersFilter as OrdersFilterController } from 'ordering-components'
import { BusinessesSelector } from '../BusinessesSelector'
import { DriversGroupTypeSelector } from '../DriversGroupTypeSelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { DriverSelector } from '../DriverSelector'
import { CitySelector, Modal } from '../../Shared'
// import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DeliveryTypeSelector } from '../DeliveryTypeSelector'
import { PaymethodTypeSelector } from '../PaymethodTypeSelector'
import { CountryFilter } from '../CountryFilter'
import { Button, IconButton, Input } from '../../../styles'
import { CurrencyFilter } from '../CurrencyFilter'
import { getUniqueId } from '../../../../../../utils'

import {
  FilterGroupListContainer,
  WrapperRow,
  ButtonGroup,
  AddInputWrapper,
  AddMetaFiled
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
    // handleChangeOrderStatus,
    handleChangeDeliveryType,
    handleChangePaymethodType,
    handleResetFilterValues,
    handleChangeFilterValues,
    handleChangeOrderId,
    handleChangeCountryCode,
    handleChangeCurrency,
    handleChangeMetaFieldValue,
    handleAddMetaField,
    handleDeleteMetafield,
    handleChangeExternalId
  } = props

  const [, t] = useLanguage()
  const [metafield, setMetaField] = useState({ key: '', value: '' })
  const [isShow, setIsShow] = useState(false)
  const metafieldRef = useRef()

  const handleAcceptFilter = () => {
    handleChangeFilterValues(filterValues)
    handleCloseFilterModal()
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

  const handleAddMetafieldValue = () => {
    handleAddMetaField({
      id: getUniqueId(),
      key: metafield?.key,
      value: metafield?.value
    })
    setMetaField({ key: '', value: '' })
    setIsShow(false)
  }

  const handleDeleteMetafieldValue = (id) => {
    handleDeleteMetafield(id)
  }

  const handleClickOutside = (e) => {
    if (!isShow) return
    const outsideCalendar = !metafieldRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [isShow])

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
          <Input
            type='text'
            placeholder={t('EXTERNAL_ID', 'External Id')}
            autoComplete='off'
            value={filterValues?.externalId || ''}
            onChange={handleChangeExternalId}
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
          <CountryFilter
            filterValues={filterValues}
            handleChangeCountryCode={handleChangeCountryCode}
          />
          <CitySelector
            cities={citiesList}
            filterValues={filterValues}
            handleChangeCity={handleChangeCity}
          />
          {/* <MultiSelectContainer>
            <OrderStatusTypeSelector
              isFilterView
              filterValues={filterValues}
              handleChangeOrderStatus={handleChangeOrderStatus}
            />
          </MultiSelectContainer> */}
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
          <CurrencyFilter
            filterValues={filterValues}
            handleChangeCurrency={handleChangeCurrency}
          />
        </WrapperRow>
        {filterValues?.metafield.map(item => (
          <WrapperRow key={item.id}>
            <Input
              type='text'
              name='key'
              placeholder={t('METAFIELD_NAME', 'Metafield name')}
              autoComplete='off'
              value={item.key || ''}
              onChange={(e) => handleChangeMetaFieldValue(e, item.id)}
            />
            {item?.key && (
              <AddInputWrapper>
                <Input
                  type='text'
                  name='value'
                  placeholder={t('METAFIELD_VALUE', 'Metafield value')}
                  autoComplete='off'
                  value={item?.value || ''}
                  onChange={(e) => handleChangeMetaFieldValue(e, item.id)}
                />
                <IconButton
                  color='black'
                  onClick={() => handleDeleteMetafieldValue(item.id)}
                >
                  <Trash3 />
                </IconButton>
              </AddInputWrapper>
            )}
          </WrapperRow>
        ))}
        {!isShow && (
          <AddMetaFiled onClick={() => setIsShow(true)}>{t('ADD_METAFIELD', 'Add a metafield')}</AddMetaFiled>
        )}
        {isShow && (
          <WrapperRow ref={metafieldRef}>
            <Input
              type='text'
              name='key'
              placeholder={t('METAFIELD_NAME', 'Metafield name')}
              autoComplete='off'
              value={metafield.key || ''}
              onChange={(e) => setMetaField({ ...metafield, key: e.target.value })}
            />
            {metafield?.key && (
              <AddInputWrapper>
                <Input
                  type='text'
                  name='value'
                  placeholder={t('METAFIELD_VALUE', 'Metafield value')}
                  autoComplete='off'
                  value={metafield.value || ''}
                  onChange={(e) => setMetaField({ ...metafield, value: e.target.value })}
                />
                <IconButton
                  color='primary'
                  onClick={handleAddMetafieldValue}
                >
                  <PlusCircle />
                </IconButton>
              </AddInputWrapper>
            )}
          </WrapperRow>
        )}
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
