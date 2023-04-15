import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig, SettingsList as SettingsListController } from 'ordering-components'
import { useForm } from 'react-hook-form'
import { Button } from '../../../styles'
import { Modal, DragScroll, Alert } from '../../Shared'
import { useTheme } from 'styled-components'
import {
  SettingContainer,
  SettingHeader,
  SettingControlPanel,
  TabsContainer,
  Tab,
  DeliveryStatusWrapper,
  StatusItems,
  ItemHeader,
  ItemStatus,
  ItemContent,
  IconWrapper,
  Actions,
  TimerInputWrapper,
  OverLine
} from './styles'

export const OrderDashboardSLASettingUI = (props) => {
  const {
    settingsState,
    handleInputChange,
    handleClickUpdate
  } = props
  const [, t] = useLanguage()
  const [settingOpen, setSettingOpen] = useState(false)
  const [currentTabItem, setCurrentTabItem] = useState(1)
  const [selectedTabStatus, setSelectedTabStatus] = useState(null)
  const theme = useTheme()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const defaultOrderTypes = [
    { key: 1, name: t('DELIVERY', 'Delivery') },
    { key: 2, name: t('PICKUP', 'Pickup') },
    { key: 3, name: t('EAT_IN', 'Eat in') },
    { key: 4, name: t('CURBSIDE', 'Curbside') },
    { key: 5, name: t('DRIVE_THRU', 'Drive thru') }
  ]

  const deliveryStatus = [
    {
      key: t('OK', 'Ok'),
      des: t('DELIVERY_OK_STATUS_DESC', 'Get delivery time from the businesses.'),
      timmer: false,
      icon: theme.images.icons?.clock1,
      backColor: '#00D27A'
    },
    {
      key: t('AT_RISK', 'At risk'),
      des: t('DELIVERY_ATRISK_STATUS_DESC', 'Is the time between delivery time of busines and the delayed time.'),
      timmer: false,
      icon: theme.images.icons?.clockRisk,
      backColor: '#FFC700'
    },
    {
      key: t('DELAYED', 'Delayed'),
      des: t('DELIVERY_DELAYED_STATUS_DESC', 'If this time is exceeded, the order will be delayed.'),
      timmer: false,
      icon: theme.images.icons?.clockDelayed,
      backColor: '#E63757'
    }
  ]

  const handleCloseSettings = () => {
    setSettingOpen(false)
  }

  const onSubmit = (data) => {
    if (data && Object.keys(data).length > 0) {
      handleClickUpdate()
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    setSelectedTabStatus(deliveryStatus)
  }, [])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (settingsState?.result?.error) {
      setAlertState({
        open: true,
        content: settingsState?.result?.result
      })
    }
  }, [settingsState?.result])

  return (
    <SettingContainer>
      <Button
        color='secundary'
        onClick={() => setSettingOpen(true)}
      >
        {t('SLA_SETTING', 'SLA’s settings')}
      </Button>
      <Modal
        open={settingOpen}
        onClose={() => handleCloseSettings()}
        width='fit-content'
      >
        <SettingControlPanel
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <SettingHeader>{t('SLA_SETTINGS', 'SLA’s settings')}</SettingHeader>
          <TabsContainer>
            <DragScroll>
              {defaultOrderTypes.map(item => (
                <Tab
                  key={item.key}
                  active={item.key === currentTabItem}
                  onClick={() => setCurrentTabItem(item.key)}
                >
                  {item.name}
                </Tab>
              ))}
            </DragScroll>
          </TabsContainer>
          <DeliveryStatusWrapper>
            {selectedTabStatus && selectedTabStatus.length > 0 && selectedTabStatus.map((item, i) => (
              <StatusBlock key={i} item={item} last={i + 1 === selectedTabStatus.length} formMethods={formMethods} handleInputChange={handleInputChange} />
            ))}
          </DeliveryStatusWrapper>
          <Actions>
            <Button
              color='primary'
              type='submit'
            >
              {t('ACCEPT', 'Accept')}
            </Button>
          </Actions>
        </SettingControlPanel>
      </Modal>
      <Alert
        title={t('SLA_SETTING', 'SLA’s settings')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </SettingContainer>
  )
}

export const StatusBlock = (props) => {
  const { item, last, formMethods, handleInputChange } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [inputWidth, setInputWidth] = useState(38)

  const handleMiuteChange = (e) => {
    setInputWidth((e.target.value.length + 1) * 8.5)
    handleInputChange(e.target.value, configs?.order_deadlines_delayed_time?.id)
  }

  return (
    <StatusItems>
      <ItemHeader>
        <IconWrapper>
          <img src={item?.icon} alt='' />
        </IconWrapper>
        <ItemStatus backColor={item?.backColor} />
        <span>{item?.key}</span>
      </ItemHeader>
      <ItemContent>
        <p>{item?.des}</p>
      </ItemContent>
      {last && (
        <TimerInputWrapper>
          <input
            name='minute'
            type='text'
            placeholder='MM'
            disabled
            defaultValue={configs?.order_deadlines_delayed_time?.value}
            ref={formMethods.register({
              required: t('VALIDATION_ERROR_MINUTE_REQUIRED', 'The field minute is required').replace('_attribute_', t('MINUTE', 'Minute'))
            })}
            style={{ width: inputWidth }}
            onChange={(e) => handleMiuteChange(e)}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </TimerInputWrapper>
      )}
      {last && (
        <OverLine />
      )}
    </StatusItems>
  )
}

export const OrderDashboardSLASetting = (props) => {
  const [{ configs }] = useConfig()
  const settingsListProps = {
    ...props,
    category: { configs: [{ ...configs?.order_deadlines_delayed_time }] },
    UIComponent: OrderDashboardSLASettingUI
  }
  return <SettingsListController {...settingsListProps} />
}
