import React, { useEffect, useState } from 'react'
import { useLanguage, DriverListDashboard } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Select } from '../../../styles/Select/DashboardSelect'
import { Select as FirstSelect } from '../../../styles/Select/FirstSelect'
import { MultiSelect } from '../../../styles/MultiSelect'

import {
  Option,
  OptionContent,
  DriverNameContainer,
  WrapperDriverImage,
  DriverImage,
  DriverName,
  DriverText,
  PlaceholderTitle
} from './styles'

const DriverSelectorUI = (props) => {
  const {
    isFirstSelect,
    order,
    driversList,
    defaultValue,
    isPhoneView,
    isFilterView,
    small,
    padding,
    orderView,
    handleAssignDriver,
    handleChangeDriver,
    filterValues,
    isTourOpen,
    setCurrentTourStep,
    handleOpenMessages
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [defaultOption, setDefaultOption] = useState(null)
  const [driversOptionList, setDriversOptionList] = useState([])
  const [driversMultiOptionList, setDriversMultiOptionList] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const driversLoading = [{ value: 'default', content: <Option small={small}>{t('LOADING', 'loading')}...</Option> }]
  useEffect(() => {
    const _driversOptionList = [
      {
        value: 'default',
        content: (
          <Option
            padding={orderView ? padding : '0px'}
          >
            {orderView ? (
              <>
                <WrapperDriverImage small={small} className='driver-photo'>
                  <DriverImage bgimage={theme?.images?.icons?.noDriver} small={small} />
                </WrapperDriverImage>
                <OptionContent>
                  <DriverNameContainer className='driver-info'>
                    <DriverName small={small}>{t('NO_DRIVER', 'No Driver')}</DriverName>
                  </DriverNameContainer>
                </OptionContent>
              </>
            ) : (
              t('SELECT_DRIVER', 'Select driver')
            )}
          </Option>
        ),
        color: 'primary',
        disabled: !isFilterView,
        showDisable: true
      }
    ]
    if (!isFilterView) {
      _driversOptionList.push({
        value: 'remove',
        content: (
          <Option isRemove>{t('REMOVE_DRIVER', 'Remove assigned driver')}</Option>
        ),
        disabled: defaultValue === 'default'
      })
    }
    if (!driversList.loading) {
      let _driverList
      if (searchValue) {
        _driverList = driversList.drivers.filter(driver => (driver.name + driver.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      } else {
        _driverList = driversList.drivers
      }
      const _driversOptionListTemp = _driverList.map((driver, i) => {
        return {
          value: driver.id,
          showDisable: isFilterView ? true : !(isFilterView || (driver?.available && !driver?.busy)),
          content: (
            <Option small={small} isPhoneView={isPhoneView} padding={padding} isFilterView={isFilterView}>
              <WrapperDriverImage small={small} className='driver-photo'>
                <DriverImage bgimage={driver.photo || theme.images.icons?.noDriver} small={small} />
              </WrapperDriverImage>
              <OptionContent>
                <DriverNameContainer className='driver-info'>
                  <DriverName small={small}>{driver.name} {driver.lastname}</DriverName>
                  <DriverText small={small}>{t('DRIVER', 'Driver')}</DriverText>
                </DriverNameContainer>
              </OptionContent>
            </Option>
          )
        }
      })

      setDriversMultiOptionList(_driversOptionListTemp)

      for (const option of _driversOptionListTemp) {
        _driversOptionList.push(option)
      }
    }
    setDriversOptionList(_driversOptionList)
  }, [driversList, defaultValue, searchValue])

  const changeDriver = (driverId) => {
    if (isFilterView) {
      if (driverId === 'default') {
        handleChangeDriver(null)
      } else {
        handleChangeDriver(driverId)
      }
      return
    }
    if (driverId === 'default') return
    if (driverId === 'remove') {
      driverId = null
    }
    handleAssignDriver({ orderId: order.id, driverId: driverId })
    if (isTourOpen && setCurrentTourStep) {
      handleOpenMessages('chat')
      setTimeout(() => {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3)
      }, 50)
    }
  }

  useEffect(() => {
    setDefaultOption(defaultValue)
  }, [defaultValue])

  const Placeholder = <PlaceholderTitle>{t('SELECT_DRIVER', 'Select driver')}</PlaceholderTitle>

  const handleSearch = (val) => {
    setSearchValue(val)
  }

  if (isFilterView) {
    return (
      <>
        {!driversList.loading ? (
          <MultiSelect
            defaultValue={filterValues.driverIds}
            placeholder={Placeholder}
            options={driversMultiOptionList}
            optionInnerMargin='10px'
            optionInnerMaxHeight='150px'
            onChange={(driver) => handleChangeDriver(driver)}
            isShowSearchBar
            searchBarIsCustomLayout
            searchBarIsNotLazyLoad
            searchValue={searchValue}
            handleChangeSearch={(val) => setSearchValue(val)}
          />
        ) : (
          <MultiSelect
            defaultValue='default'
            options={driversLoading}
            optionInnerMargin='10px'
            optionInnerMaxHeight='150px'
            className='driver-select'
            isShowSearchBar
            searchBarIsCustomLayout
            searchBarIsNotLazyLoad
            searchValue={searchValue}
            handleChangeSearch={(val) => setSearchValue(val)}
          />
        )}
      </>
    )
  } else {
    return (
      <>
        {!driversList.loading ? (
          <>
            {isFirstSelect ? (
              <FirstSelect
                defaultValue={defaultOption || 'default'}
                options={driversOptionList}
                optionInnerMaxHeight='200px'
                onChange={(driverId) => changeDriver(driverId)}
                isShowSearchBar
                searchBarPlaceholder={t('SEARCH', 'Search')}
                searchBarIsCustomLayout
                searchBarIsNotLazyLoad
                searchValue={searchValue}
                handleChangeSearch={handleSearch}
                className='driver-select'
              />
            ) : (
              <Select
                defaultValue={defaultOption || 'default'}
                options={driversOptionList}
                optionInnerMaxHeight='200px'
                onChange={(driverId) => changeDriver(driverId)}
                isShowSearchBar
                searchBarIsNotLazyLoad
                searchBarPlaceholder={t('SEARCH', 'Search')}
                searchBarIsCustomLayout
                searchValue={searchValue}
                handleChangeSearch={handleSearch}
                className='driver-select'
              />
            )}
          </>
        ) : (
          <>
            <Select
              placeholder={t('SELECT_DRIVER', 'Select driver')}
              defaultValue='default'
              options={driversLoading}
              optionInnerMargin='10px'
              optionInnerMaxHeight='200px'
              className='driver-select'
            />
          </>
        )}
      </>
    )
  }
}

export const DriverSelector = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriverSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  }
  return (
    <>
      <DriverListDashboard {...DriversControlProps} />
    </>
  )
}
