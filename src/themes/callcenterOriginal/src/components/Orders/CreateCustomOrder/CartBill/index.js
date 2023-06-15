import React, { useState } from 'react'
import { useLanguage, useUtils, useOrder, useConfig, useValidationFields, useCustomer } from 'ordering-components'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'
import MdCloseCircle from '@meronex/icons/ios/MdCloseCircle'
import { useTheme } from 'styled-components'
import { verifyDecimals } from '../../../../../../../utils'
import { CouponControl } from '../CouponControl'
import { Confirm, Modal } from '../../../Shared'
import { TaxInformation } from '../TaxInformation'

import {
  CartBillContainer,
  CouponContainer,
  IconContainer
} from './styles'

export const CartBill = (props) => {
  const {
    cart
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [orderState, { removeOffer }] = useOrder()
  const [{ configs }] = useConfig()
  const [validationFields] = useValidationFields()
  const [{ user }] = useCustomer()

  const [openTaxModal, setOpenTaxModal] = useState({ open: false, tax: null })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const isCouponEnabled = validationFields?.fields?.checkout?.coupon?.enabled

  const getIncludedTaxes = () => {
    if (cart?.taxes === null) {
      return cart?.business.tax_type === 1 ? cart?.tax : 0
    } else {
      return cart?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
  }

  const getIncludedTaxesDiscounts = () => {
    return cart?.taxes?.filter(tax => tax?.type === 1)?.reduce((carry, tax) => carry + (tax?.summary?.tax_after_discount ?? tax?.summary?.tax), 0)
  }

  const handleRemoveOfferClick = (id, userId) => {
    const dataOffer = {
      business_id: cart?.business_id,
      offer_id: id
    }
    if (userId) dataOffer.user_id = userId
    removeOffer(dataOffer)
  }

  const onRemoveOffer = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OFFER', 'Are you sure that you want to delete the offer?'),
      title: t('OFFER', 'Offer'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleRemoveOfferClick(id, user?.id)
      }
    })
  }

  return (
    <CartBillContainer>
      <h3>{t('SUMMARY', '')}</h3>
      <table>
        <tbody>
          <tr>
            <td>{t('SUBTOTAL', 'Subtotal')}</td>
            <td>{parsePrice(cart?.subtotal + getIncludedTaxes())}</td>
          </tr>
          {cart?.discount > 0 && cart?.total >= 0 && cart?.offers?.length === 0 && (
            <tr>
              {cart?.discount_type === 1 ? (
                <td>
                  {t('DISCOUNT', 'Discount')}{' '}
                  <span>{`(${verifyDecimals(cart?.discount_rate, parsePrice)}%)`}</span>
                </td>
              ) : (
                <td>{t('DISCOUNT', 'Discount')}</td>
              )}
              <td>- {parsePrice(cart?.discount || 0)}</td>
            </tr>
          )}
          {
            cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 1)?.map(offer => (
              <tr key={offer.id}>
                <td className='icon'>
                  {offer.name}
                  {offer.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                  <IconContainer>
                    <BsInfoCircle size='20' color={theme.colors.primary} onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_1' })} />
                    {!!offer?.id && (
                      <MdCloseCircle size='24' color={theme.colors.primary} onClick={() => onRemoveOffer(offer?.id)} />
                    )}
                  </IconContainer>
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {
            cart?.offers?.filter(offer => offer?.target === 1)?.length > 0 &&
            cart?.subtotal_with_discount > 0 &&
            cart?.discount > 0 &&
            cart?.total >= 0 &&
            (
              <tr>
                <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
                {cart?.business?.tax_type === 1 ? (
                  <td>{parsePrice(cart?.subtotal_with_discount + getIncludedTaxesDiscounts() ?? 0)}</td>
                ) : (
                  <td>{parsePrice(cart?.subtotal_with_discount ?? 0)}</td>
                )}
              </tr>
            )
          }
          {
            cart?.taxes?.length > 0 && cart?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0).map(tax => (
              <tr key={tax?.id}>
                <td className='icon'>
                  {tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                  <IconContainer onClick={() => setOpenTaxModal({ open: true, data: tax, type: 'tax' })}>
                    <BsInfoCircle size='20' color={theme.colors.primary} />
                  </IconContainer>
                </td>
                <td>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0)}</td>
              </tr>
            ))
          }
          {
            cart?.fees?.length > 0 && cart?.fees?.filter(fee => !(fee.fixed === 0 && fee.percentage === 0)).map((fee, i) => (
              <tr key={fee.id ?? i}>
                <td className='icon'>
                  {fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  ({fee?.fixed > 0 && `${parsePrice(fee?.fixed)}${fee.percentage > 0 ? ' + ' : ''}`}{fee.percentage > 0 && `${fee.percentage}%`})
                  <IconContainer onClick={() => setOpenTaxModal({ open: true, data: fee, type: 'fee' })}>
                    <BsInfoCircle size='20' color={theme.colors.primary} />
                  </IconContainer>
                </td>
                <td>{parsePrice(fee?.summary?.fixed + (fee?.summary?.percentage_after_discount ?? fee?.summary?.percentage) ?? 0)}</td>
              </tr>
            ))
          }
          {
            cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 3)?.map(offer => (
              <tr key={offer.id}>
                <td className='icon'>
                  {offer.name}
                  {offer?.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                  <IconContainer>
                    <BsInfoCircle size='20' color={theme.colors.primary} onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_3' })} />
                    {!!offer?.id && (
                      <MdCloseCircle size='24' color={theme.colors.primary} onClick={() => onRemoveOffer(offer?.id)} />
                    )}
                  </IconContainer>
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {orderState?.options?.type === 1 && (
            <tr>
              <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
              <td>{parsePrice(cart?.delivery_price_with_discount)}</td>
            </tr>
          )}
          {
            cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 2)?.map(offer => (
              <tr key={offer.id}>
                <td className='icon'>
                  {offer.name}
                  {offer?.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                  <IconContainer>
                    <BsInfoCircle size='20' color={theme.colors.primary} onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_2' })} />
                    {!!offer?.id && (
                      <MdCloseCircle size='24' color={theme.colors.primary} onClick={() => onRemoveOffer(offer?.id)} />
                    )}
                  </IconContainer>
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {cart?.driver_tip > 0 && (
            <tr>
              <td>
                {t('DRIVER_TIP', 'Driver tip')}{' '}
                {cart?.driver_tip_rate > 0 &&
                  parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                  !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                  (
                    <span>{`(${verifyDecimals(cart?.driver_tip_rate, parseNumber)}%)`}</span>
                  )}
              </td>
              <td>{parsePrice(cart?.driver_tip)}</td>
            </tr>
          )}
        </tbody>
      </table>
      {isCouponEnabled && cart?.status !== 2 &&
        (
          <CouponContainer>
            <CouponControl
              businessId={cart?.business_id}
              price={cart?.total}
            />
          </CouponContainer>
        )}
      <table className='total'>
        <tbody>
          <tr>
            <td>{t('TOTAL', 'Total')}</td>
            <td>{parsePrice(cart?.total >= 0 ? cart?.total : 0)}</td>
          </tr>
        </tbody>
      </table>

      <Modal
        width='70%'
        open={openTaxModal.open}
        padding='20px'
        closeOnBackdrop
        title={`${openTaxModal.data?.name ||
          t('INHERIT_FROM_BUSINESS', 'Inherit from business')} ${openTaxModal.data?.rate_type !== 2 ? `(${typeof openTaxModal.data?.rate === 'number' ? `${openTaxModal.data?.rate}%` : `${parsePrice(openTaxModal.data?.fixed ?? 0)} + ${openTaxModal.data?.percentage}%`})` : ''}  `}
        onClose={() => setOpenTaxModal({ open: false, data: null, type: '' })}
        modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
      >
        <TaxInformation
          type={openTaxModal.type}
          data={openTaxModal.data}
          products={cart?.products}
        />
      </Modal>
      <Confirm
        title={t('PRODUCT', 'Product')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </CartBillContainer>
  )
}
