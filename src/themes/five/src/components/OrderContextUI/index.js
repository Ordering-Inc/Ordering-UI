import React, { useEffect, useState } from 'react'
import { useLanguage, useOrder, useConfig, useSession, useBusiness } from 'ordering-components'
import { MomentPopover } from '../../../../pwa/src/components/MomentPopover'
import { OrderTypeSelectorHeader } from '../../../../../components/OrderTypeSelectorHeader'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { Alert } from '../Confirm'
import {
  Container,
  AddressMenu,
  FeatureItems,
  ItemInline
} from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { MomentContent } from '../MomentContent'
import { OrderTypeSelectorContent } from '../OrderTypeSelectorContent'
import { getCateringValues } from '../../../../../utils'
import { useLocation } from 'react-router-dom'

export const OrderContextUI = (props) => {
  const { isCheckOut, setMapErrors, isCustomerMode, isBusinessList } = props

  const { pathname } = useLocation()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [configState] = useConfig()
  const [{ auth }] = useSession()
  const [{ business }] = useBusiness()

  const [openPopover, setOpenPopover] = useState({})
  const [modals, setModals] = useState({ listOpen: false, formOpen: false, citiesOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [modalSelected, setModalSelected] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const windowSize = useWindowSize()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isPreOrderSetting = configState?.configs?.preorder_status_enabled?.value === '1'
  const cateringTypeString = orderState?.options?.type === 7
    ? 'catering_delivery'
    : orderState?.options?.type === 8
      ? 'catering_pickup'
      : null

  const cateringValues = getCateringValues(cateringTypeString, pathname.includes('store') && Object?.keys(business || {})?.length > 0 ? business?.configs : configState?.configs)
  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }

  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
    setMapErrors && setMapErrors('')
  }

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }

  useEffect(() => {
    const handleCloseallPopovers = () => handleClosePopover('moment')
    window.addEventListener('scroll', handleCloseallPopovers)
    return () => window.removeEventListener('scroll', handleCloseallPopovers)
  }, [])

  return (
    <>
      <Container isBusinessList={isBusinessList} hero={props.hideHero} isCheckOut={isCheckOut}>
        <AddressMenu
          onClick={() => handleClickAddress()}
          isCheckOut={isCheckOut || !props.hideHero}
        >
          <FaMapMarkerAlt />
          <span>{orderState.options?.address?.address || t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?')}</span>
        </AddressMenu>
        <FeatureItems>
          <ItemInline onClick={() => openModal('delivery')}>
            <OrderTypeSelectorHeader configTypes={configTypes} autoCloseWhenScroll={windowSize.width < 576} />
          </ItemInline>
          {isPreOrderSetting && (
            <ItemInline onClick={() => openModal('moment')}>
              <MomentPopover
                open={openPopover.moment}
                onCustomClick={() => openModal('moment')}
                onClick={() => handleTogglePopover('moment')}
                onClose={() => handleClosePopover('moment')}
                isBanner
              />
            </ItemInline>
          )}
        </FeatureItems>
      </Container>
      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width={orderState?.options?.user_id ? '70%' : '50%'}
        >
          {modalSelected === 'moment' && (
            <MomentContent
              onClose={() => setModalIsOpen(false)}
              cateringPreorder={!!cateringTypeString}
              isHeader
              business={pathname.includes('store') && business}
              {...cateringValues}
            />
          )}
          {modalSelected === 'delivery' && (
            <OrderTypeSelectorContent
              onClose={() => setModalIsOpen(false)}
              configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
              defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
            />
          )}
        </Modal>
      )}
      <Modal
        title={t('ADDRESS_FORM', 'Address Form')}
        open={modals.formOpen}
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
        title={t('ADDRESSES', 'Address List')}
        open={modals.listOpen}
        width='70%'
        onClose={() => setModals({ ...modals, listOpen: false })}
      >
        <AddressList
          isModal
          changeOrderAddressWithDefault
          userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
          onCancel={() => setModals({ ...modals, listOpen: false })}
          onAccept={() => handleFindBusinesses()}
          isCustomerMode={isCustomerMode}
          isMobile
        />
      </Modal>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => handleCloseAlerts()}
        onAccept={() => handleCloseAlerts()}
        closeOnBackdrop={false}
      />
    </>
  )
}
