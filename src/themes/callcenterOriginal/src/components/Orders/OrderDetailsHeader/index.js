import React, { useRef, useState, useEffect } from 'react'
import { useLanguage, useSession } from 'ordering-components'
import EnDotSingle from '@meronex/icons/en/EnDotSingle'
import ReactToPrint from 'react-to-print'
import {
  // Wallet2,
  Printer,
  Diagram3,
  ThreeDots,
  XLg as CloseIcon,
  Chat as ChatIcon,
  Dot,
  ArrowsAngleExpand,
  ArrowsAngleContract
} from 'react-bootstrap-icons'
import { IconButton as ButtonLink } from '../../../styles'
import {
  OrderDetailsHeaderContainer,
  UreadMessageAlert,
  ButtonGroup,
  StripeLink,
  PrinterSelectContainer,
  PrinterSelect
} from './styles'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

export const OrderDetailsHeader = (props) => {
  const {
    order,
    handleShowOption,
    actionSidebar,
    setIsTourOpen,
    isTourOpen,
    currentTourStep,
    showOption,
    openMessage,
    printRef,
    isServiceOrder,
    extraOpen,
    printTicketRef,
    isExpand,
    setIsExpand
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const { width } = useWindowSize()
  const [showPrinterOptions, setShowPrinterOptions] = useState(false)
  const dropdownReference = useRef()

  const stripePaymethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect']

  const walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  }

  const closeSideBar = () => {
    actionSidebar(false)
    if (isTourOpen && currentTourStep === 1) setIsTourOpen(false)
  }

  const expandSideBar = () => {
    const element = document.getElementById('orderDetails')
    if (!element) return

    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  const closeSelect = (e) => {
    if (showPrinterOptions) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setShowPrinterOptions(false)
      }
    }
  }

  useEffect(() => {
    if (!showPrinterOptions) {
      return
    }
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
  }, [showPrinterOptions])

  return (
    <OrderDetailsHeaderContainer>
      <div>
        <h1>{isServiceOrder ? t('APPOINTMENT_NO', 'Appointment No.') : t('INVOICE_ORDER_NO', 'Order No')} {order?.id}</h1>
        <ButtonGroup>
          {user?.level !== 5 && (
            <ButtonLink
              color='black'
              active={openMessage?.chat}
              onClick={() => handleShowOption('chat')}
              isDisabled={isTourOpen && currentTourStep === 1}
            >
              <ChatIcon />
              {order?.unread_count > 0 && (
                <UreadMessageAlert>
                  <Dot />
                </UreadMessageAlert>
              )}
            </ButtonLink>
          )}
          <PrinterSelectContainer>
            <ButtonLink
              color='black'
              isDisabled={isTourOpen && currentTourStep === 1}
              onClick={() => setShowPrinterOptions(!showPrinterOptions)}
            >
              <Printer />
            </ButtonLink>
            {showPrinterOptions && (
              <PrinterSelect ref={dropdownReference}>
                <ReactToPrint
                  trigger={() => (
                    <ButtonLink
                      color='black'
                      isDisabled={isTourOpen && currentTourStep === 1}
                      onClick={() => setShowPrinterOptions(false)}
                    >
                      {t('NORMAL', 'Normal')}
                    </ButtonLink>
                  )}
                  content={() => printRef.current}
                  removeAfterPrint
                />
                <ReactToPrint
                  trigger={() => (
                    <ButtonLink
                      color='black'
                      isDisabled={isTourOpen && currentTourStep === 1}
                      onClick={() => setShowPrinterOptions(false)}
                    >
                      {t('TICKET', 'Ticket')}
                    </ButtonLink>
                  )}
                  content={() => printTicketRef.current}
                  removeAfterPrint
                />
              </PrinterSelect>
            )}
          </PrinterSelectContainer>
          <ButtonLink
            color='black'
            active={openMessage?.history}
            onClick={() => handleShowOption('history')}
            isDisabled={isTourOpen && currentTourStep === 1}
          >
            <Diagram3 />
          </ButtonLink>
          <ButtonLink
            color='black'
            active={showOption === 'metafields'}
            onClick={() => handleShowOption('metafields')}
            isDisabled={isTourOpen && currentTourStep === 1}
          >
            <ThreeDots />
          </ButtonLink>
          {width > 576 && !extraOpen && (
            <ButtonLink
              color='black'
              onClick={() => expandSideBar()}
            >
              {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
            </ButtonLink>
          )}
          <ButtonLink
            color='black'
            onClick={() => closeSideBar()}
          >
            <CloseIcon />
          </ButtonLink>
        </ButtonGroup>
      </div>
      {order?.external_id && (
        <div>
          <h2>
            {t('EXTERNAL_ID', 'External ID :')} {order?.external_id}
          </h2>
        </div>
      )}
      <p>
        {order?.payment_events?.length > 0 ? (
          order?.payment_events?.filter(item => item.event === 'payment').map((event, i) => (
            <React.Fragment key={i}>
              <span>
                {event?.wallet_event
                  ? walletName[event?.wallet_event?.wallet?.type]?.name
                  : t(event?.paymethod?.gateway?.toUpperCase(), event?.paymethod?.name)}
              </span>
              {stripePaymethods.includes(event?.data?.gateway || event?.paymethod?.gateway) && (
                <>
                  <span> (</span>
                  <StripeLink href={`https://dashboard.stripe.com/payments/${event?.data?.result?.pay_data || event?.data?.extra?.pay_data}`} target='_blank'>{event?.data?.result?.pay_data || event?.data?.extra?.pay_data}</StripeLink>
                  <span>) </span>
                  <span> ({order?.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success')}) </span>
                </>
              )}
              <EnDotSingle />
            </React.Fragment>
          ))
        ) : (
          <>
            <span>{order?.paymethod?.name}</span>
            {stripePaymethods.includes(order?.paymethod?.gateway) && (
              <>
                <span> (</span>
                <StripeLink href={`https://dashboard.stripe.com/payments/${order?.pay_data}`} target='_blank'>{order?.pay_data}</StripeLink>
                <span>) </span>
                <span> ({order?.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success')}) </span>
              </>
            )}
            <EnDotSingle />
          </>
        )}
        {!isServiceOrder && (
          <>
            {order?.delivery_type === 1 && (
              <span>
                {t('DELIVERY', 'Delivery')}
              </span>
            )}
            {order?.delivery_type === 2 && (
              <span>
                {t('PICKUP', 'Pickup')}
              </span>
            )}
            {order?.delivery_type === 3 && (
              <span>
                {t('EAT_IN', 'Eat in')}
              </span>
            )}
            {order?.delivery_type === 4 && (
              <span>
                {t('CURBSIDE', 'Curbside')}
              </span>
            )}
            {order?.delivery_type === 5 && (
              <span>
                {t('DRIVE_THRU', 'Drive thru')}
              </span>
            )}
          </>
        )}
      </p>
    </OrderDetailsHeaderContainer>
  )
}
