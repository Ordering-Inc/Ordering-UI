import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components'
import { verifyDecimals } from '../../../../../../utils'
import { Alert, Confirm } from '../../Shared'
import { Button } from '../../../styles'

import {
  OrderBillContainer,
  RefundButtonWrapper
} from './styles'

export const OrderBill = (props) => {
  const {
    order,
    actionStatus,
    handleRefundOrder
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [{ configs }] = useConfig()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const SPOT_DICTIONARY = {
    3: t('SPOT_NUMBER_EAT_IN', 'Table number'),
    4: t('SPOT_NUMBER_CURBSIDE', 'Spor number'),
    5: t('SPOT_NUMBER_DRIVE_THRU', 'Drive thru lane')
  }

  const walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  }
  const stripePaymethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect']
  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickRefund = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_REFUND_ORDER', 'Do you want to reimburse this order? This action is irreversible.'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleRefundOrder()
      }
    })
  }

  const getIncludedTaxes = () => {
    if (!order?.taxes) return 0
    if (order?.taxes?.length === 0) {
      return order.tax_type === 1 ? order?.summary?.tax ?? 0 : 0
    } else {
      return order?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
  }

  const getIncludedTaxesDiscounts = () => {
    return order?.taxes?.filter(tax => tax?.type === 1)?.reduce((carry, tax) => carry + (tax?.summary?.tax_after_discount ?? tax?.summary?.tax), 0)
  }

  useEffect(() => {
    if (!actionStatus?.error) return
    if (Object.keys(actionStatus.error).length > 0) {
      setAlertState({
        open: true,
        content: actionStatus.error
      })
    }
  }, [actionStatus?.error])

  return (
    <OrderBillContainer>
      <table>
        <tbody>
          <tr>
            <td>{t('SUBTOTAL', 'Subtotal')}</td>
            <td>
              {parsePrice(((order?.summary?.subtotal ?? order?.subtotal) + getIncludedTaxes()), { currency: order?.currency })}
            </td>
          </tr>
          {(order?.summary?.discount > 0 ?? order?.discount > 0) && order?.offers?.length === 0 && (
            <tr>
              {order?.offer_type === 1 ? (
                <td>
                  {t('DISCOUNT', 'Discount')}{' '}
                  <span>{`(${verifyDecimals(order?.offer_rate, parsePrice)}%)`}</span>
                </td>
              ) : (
                <td>{t('DISCOUNT', 'Discount')}</td>
              )}
              <td>- {parsePrice(order?.summary?.discount ?? order?.discount, { currency: order?.currency })}</td>
            </tr>
          )}
          {
            order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 1)?.map(offer => (
              <tr key={offer.id}>
                <td>
                  {offer.name}
                  {offer.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount, { currency: order?.currency })}
                </td>
              </tr>
            ))
          }
          {order?.summary?.subtotal_with_discount > 0 && order?.summary?.discount > 0 && order?.summary?.total >= 0 && (
            <tr>
              <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
              {order?.tax_type === 1 ? (
                <td>{parsePrice((order?.summary?.subtotal_with_discount + getIncludedTaxesDiscounts() ?? 0), { currency: order?.currency })}</td>
              ) : (
                <td>{parsePrice(order?.summary?.subtotal_with_discount ?? 0, { currency: order?.currency })}</td>
              )}
            </tr>
          )}
          {
            order?.taxes?.length === 0 && order?.tax_type === 2 && (
              <tr>
                <td>
                  {t('TAX', 'Tax')}
                  <span>{`(${verifyDecimals(order?.tax, parseNumber)}%)`}</span>
                </td>
                <td>{parsePrice(order?.summary?.tax ?? 0, { currency: order?.currency })}</td>
              </tr>
            )
          }
          {
            order?.fees?.length === 0 && (
              <tr>
                <td>
                  {t('SERVICE_FEE', 'Service fee')}
                  <span>{`(${verifyDecimals(order?.service_fee, parseNumber)}%)`}</span>
                </td>
                <td>{parsePrice(order?.summary?.service_fee ?? 0, { currency: order?.currency })}</td>
              </tr>
            )
          }
          {
            order?.taxes?.length > 0 && order?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0).map(tax => (
              <tr key={tax?.id}>
                <td>
                  {tax?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                </td>
                <td>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0, { currency: order?.currency })}</td>
              </tr>
            ))
          }
          {
            order?.fees?.length > 0 && order?.fees?.filter(fee => !(fee?.fixed === 0 && fee?.percentage === 0))?.map(fee => (
              <tr key={fee.id}>
                <td>
                  {fee?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  ({fee?.fixed > 0 && `${parsePrice(fee?.fixed)} + `}{fee.percentage}%)
                </td>
                <td>{parsePrice(fee?.summary?.fixed + (fee?.summary?.percentage_after_discount ?? fee?.summary?.percentage) ?? 0, { currency: order?.currency })}</td>
              </tr>
            ))
          }
          {
            order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 3)?.map(offer => (
              <tr key={offer.id}>
                <td>
                  {offer.name}
                  {offer.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount, { currency: order?.currency })}
                </td>
              </tr>
            ))
          }
          {order?.summary?.delivery_price > 0 && (
            <tr>
              <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
              <td>{parsePrice(order?.summary?.delivery_price, { currency: order?.currency })}</td>
            </tr>
          )}
          {
            order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 2)?.map(offer => (
              <tr key={offer.id}>
                <td>
                  {offer.name}
                  {offer.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount, { currency: order?.currency })}
                </td>
              </tr>
            ))
          }
          {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) && (
            <tr>
              <td>
                {t('DRIVER_TIP', 'Driver tip')}{' '}
                {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) &&
                  parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                  !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                  (
                    <span>{`(${verifyDecimals(order?.driver_tip, parseNumber)}%)`}</span>
                  )}
              </td>
              <td>{parsePrice(order?.summary?.driver_tip ?? order?.totalDriverTip, { currency: order?.currency })}</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className='total'>
        <tbody>
          <tr>
            <td>{t('TOTAL', 'Total')}</td>
            <td>{parsePrice(order?.summary?.total || order?.total, { currencyPosition: 'left', currency: order?.currency })}</td>
          </tr>
        </tbody>
      </table>
      {order?.payment_events?.length > 0 && (
        <table className='payments'>
          <thead>
            <tr>
              <th colSpan='2'>{t('PAYMENTS', 'Payments')}</th>
            </tr>
          </thead>
          <tbody>
            {order?.payment_events?.map((event, i) => (
              <tr key={i}>
                <td>
                  {event?.wallet_event
                    ? walletName[event?.wallet_event?.wallet?.type]?.name
                    : event?.paymethod?.name}
                </td>
                <td>-{parsePrice(event?.amount, { currency: order?.currency })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {order?.delivery_option && (
        <table className='delivery_option'>
          <thead>
            <tr>
              <th colSpan='2'>{t('DELIVERY_PREFERENCE', 'Delivery Preference')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order?.delivery_option?.name}</td>
            </tr>
          </tbody>
        </table>
      )}
      {order?.comment && (
        <table className='comments'>
          <tbody>
            <tr>
              <td>{t('COMMENT', 'Comment')}</td>
              <td>{order?.comment}</td>
            </tr>
          </tbody>
        </table>
      )}
      {order?.spot_number && (
        <table className='spot_number'>
          <tbody>
            <tr>
              <td>{SPOT_DICTIONARY[order?.delivery_type]}</td>
              <td>{order?.spot_number}</td>
            </tr>
          </tbody>
        </table>
      )}
      {order?.vehicle && (
        <table className='vehicle'>
          <thead>
            <tr>
              <th colSpan='2'>{t('ORDER_VEHICLE', 'Vehicle')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('ORDER_VEHICLE_TYPE', 'Type')}</td>
              <td>{order?.vehicle?.type}</td>
            </tr>
            <tr>
              <td>{t('ORDER_VEHICLE_MODEL', 'Model')}</td>
              <td>{order?.vehicle?.model}</td>
            </tr>
            <tr>
              <td>{t('ORDER_VEHICLE_CAR_REGISTRATION', 'Car registration')}</td>
              <td>{order?.vehicle?.car_registration}</td>
            </tr>
            <tr>
              <td>{t('ORDER_VEHICLE_COLOR', 'Color')}</td>
              <td>{order?.vehicle?.color}</td>
            </tr>
          </tbody>
        </table>
      )}

      {!order?.refund_data && stripePaymethods.includes(order?.paymethod?.gateway) && (
        <RefundButtonWrapper>
          <Button
            color='primary'
            borderRadius='8px'
            disabled={actionStatus?.loading}
            onClick={onClickRefund}
          >
            {t('REFUND', 'Refund')}
          </Button>
        </RefundButtonWrapper>
      )}

      <Alert
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </OrderBillContainer>
  )
}
