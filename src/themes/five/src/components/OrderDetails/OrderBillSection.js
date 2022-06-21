import React from 'react'
import { useTheme } from 'styled-components'
import {
  useLanguage,
  useUtils,
  useConfig
} from 'ordering-components'
import { verifyDecimals } from '../../../../../utils'

import {
  OrderBill,
  Exclamation
} from './styles'

import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'

export const OrderBillSection = (props) => {
  const {
    order,
    setOpenTaxModal
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [{ configs }] = useConfig()

  const walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
  }

  const getIncludedTaxes = () => {
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

  return (
    <OrderBill>
      <table>
        <tbody>
          <tr>
            <td>{t('SUBTOTAL', theme?.defaultLanguages?.SUBTOTAL || 'Subtotal')}</td>
            <td>
              {parsePrice(((order?.summary?.subtotal ?? order?.subtotal) + getIncludedTaxes()))}
            </td>
          </tr>
          {(order?.summary?.discount > 0 ?? order?.discount > 0) && order?.offers?.length === 0 && (
            <tr>
              {order?.offer_type === 1 ? (
                <td>
                  {t('DISCOUNT', theme?.defaultLanguages?.DISCOUNT || 'Discount')}{' '}
                  <span>{`(${verifyDecimals(order?.offer_rate, parsePrice)}%)`}</span>
                </td>
              ) : (
                <td>{t('DISCOUNT', theme?.defaultLanguages?.DISCOUNT || 'Discount')}</td>
              )}
              <td>- {parsePrice(order?.summary?.discount ?? order?.discount)}</td>
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
                  <Exclamation onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_1' })}>
                    <BsInfoCircle size='20' color={theme.colors.primary} />
                  </Exclamation>
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {order?.summary?.subtotal_with_discount > 0 && order?.summary?.discount > 0 && order?.summary?.total >= 0 && (
            <tr>
              <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
              {order?.tax_type === 1 ? (
                <td>{parsePrice((order?.summary?.subtotal_with_discount + getIncludedTaxesDiscounts() ?? 0))}</td>
              ) : (
                <td>{parsePrice(order?.summary?.subtotal_with_discount ?? 0)}</td>
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
                <td>{parsePrice(order?.summary?.tax ?? 0)}</td>
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
                <td>{parsePrice(order?.summary?.service_fee ?? 0)}</td>
              </tr>
            )
          }
          {
            order?.taxes?.length > 0 && order?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0).map(tax => (
              <tr key={tax?.id}>
                <td>
                  {tax?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                  <Exclamation onClick={() => setOpenTaxModal({ open: true, data: tax, type: 'tax' })}>
                    <BsInfoCircle size='20' color={theme.colors.primary} />
                  </Exclamation>
                </td>
                <td>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0)}</td>
              </tr>
            ))
          }
          {
            order?.fees?.length > 0 && order?.fees?.filter(fee => !(fee?.fixed === 0 && fee?.percentage === 0))?.map(fee => (
              <tr key={fee.id}>
                <td>
                  {fee?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  ({fee?.fixed > 0 && `${parsePrice(fee?.fixed)}${fee.percentage > 0 ? ' + ' : ''}`}{fee.percentage > 0 && `${fee.percentage}%`})
                  <Exclamation onClick={() => setOpenTaxModal({ open: true, data: fee, type: 'fee' })}>
                    <BsInfoCircle size='20' color={theme.colors.primary} />
                  </Exclamation>
                </td>
                <td>{parsePrice(fee?.summary?.fixed + (fee?.summary?.percentage_after_discount ?? fee?.summary?.percentage) ?? 0)}</td>
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
                  <Exclamation onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_3' })}>
                    <BsInfoCircle size='20' color={theme.colors.primary} />
                  </Exclamation>
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {order?.summary?.delivery_price > 0 && (
            <tr>
              <td>{t('DELIVERY_FEE', theme?.defaultLanguages?.DELIVERY_FEE || 'Delivery Fee')}</td>
              <td>{parsePrice(order?.summary?.delivery_price)}</td>
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
                  <Exclamation onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_2' })}>
                    <BsInfoCircle size='20' color={theme.colors.primary} />
                  </Exclamation>
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) && (
            <tr>
              <td>
                {t('DRIVER_TIP', theme?.defaultLanguages?.DRIVER_TIP || 'Driver tip')}{' '}
                {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) &&
                  parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                  !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                  (
                    <span>{`(${verifyDecimals(order?.driver_tip, parseNumber)}%)`}</span>
                  )}
              </td>
              <td>{parsePrice(order?.summary?.driver_tip ?? order?.totalDriverTip)}</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className='total'>
        <tbody>
          <tr>
            <td>{t('TOTAL', theme?.defaultLanguages?.TOTAL || 'Total')}</td>
            <td>{parsePrice(order?.summary?.total ?? order?.total)}</td>
          </tr>
        </tbody>
      </table>
      {order?.payment_events?.length > 0 && (
        <div style={{ marginTop: 10 }}>
          <span style={{ fontSize: 20 }}>{t('PAYMENTS', 'Payments')}</span>
          <div
            style={{
              width: '100%',
              marginTop: 10
            }}
          >
            {order?.payment_events?.map(event => event.amount > 0 && (
              <div
                key={event.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span>
                    {event?.wallet_event
                      ? walletName[event?.wallet_event?.wallet?.type]?.name
                      : event?.paymethod?.name}
                  </span>
                  {event?.data?.charge_id && (
                    <span>
                      {`${t('CODE', 'Code')}: ${event?.data?.charge_id}`}
                    </span>
                  )}
                </div>
                <span>
                  -{parsePrice(event.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </OrderBill>
  )
}
