import React from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import {
  OrderBillContainer
} from './styles'
export const OrderBill = (props) => {
  const {
    summary
  } = props
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <OrderBillContainer>
        <table>
          <tbody>
            <tr>
              <td>{t('SUBTOTAL', 'Subtotal')}</td>
              <td>{parsePrice(summary?.subtotal || 0)}</td>
            </tr>
            <tr>
              <td>
                {t('TAX', 'Tax')}
              </td>
              <td>{parsePrice(summary?.tax || 0)}</td>
            </tr>
            {summary?.delivery_price > 0 && (
              <tr>
                <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                <td>{parsePrice(summary?.delivery_price)}</td>
              </tr>
            )}
            {summary?.driver_tip > 0 && (
              <tr>
                <td>
                  {t('DRIVER_TIP', 'Driver tip')}
                </td>
                <td>{parsePrice(summary?.driver_tip)}</td>
              </tr>
            )}
            {summary?.service_fee > 0 && (
              <tr>
                <td>
                  {t('SERVICE_FEE', 'Service Fee')}
                </td>
                <td>{parsePrice(summary?.service_fee)}</td>
              </tr>
            )}
            {summary?.discount > 0 && summary?.total >= 0 && (
              <tr>
                <td>{t('DISCOUNT', 'Discount')}</td>
                <td>- {parsePrice(summary?.discount || 0)}</td>
              </tr>
            )}
          </tbody>
        </table>
        <table className='total'>
          <tbody>
            <tr>
              <td>{t('TOTAL', 'Total')}</td>
              <td>{summary?.total >= 1 && parsePrice(summary?.total)}</td>
            </tr>
          </tbody>
        </table>
      </OrderBillContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
