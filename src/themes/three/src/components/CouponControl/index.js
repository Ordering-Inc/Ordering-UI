import React, { useState } from 'react'
import { CouponControl as CouponController, useLanguage } from 'ordering-components'

import {
  CouponContainer,
  WrapPromoCodeApply
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { Confirm } from '../../../../../components/Confirm'
import { Modal } from '../../../../../components/Modal'

const CouponControlUI = (props) => {
  const {
    couponDefault,
    couponInput,
    handleButtonApplyClick,
    handleRemoveCouponClick,
    onChangeInputCoupon,
    confirm,
    setConfirm
  } = props

  const [, t] = useLanguage()
  const [openPromoModal, setOpenPromoModal] = useState(false)

  const onRemoveCoupon = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete the coupon?')
    })
  }

  const handleOnAccept = () => {
    if (!confirm.error) {
      handleRemoveCouponClick && handleRemoveCouponClick()
    }
    setConfirm({ ...confirm, open: false, error: false })
    onChangeInputCoupon('')
  }

  const handleClose = () => {
    setConfirm({ ...confirm, open: false, error: false })
    onChangeInputCoupon('')
  }

  const handleApply = () => {
    handleButtonApplyClick()
    setOpenPromoModal(false)
  }

  return (
    <CouponContainer>
      {couponDefault ? (
        <a onClick={() => onRemoveCoupon()}>
          {t('REMOVE_COUPON', 'Remove Coupon')}
        </a>
      ) : (
        <a onClick={() => setOpenPromoModal(true)}>{t('ADD_PROMO_CODE', 'Add promo code')}</a>
      )}

      <Modal
        title={t('DO_YOU_HAVE_PROMO_CODE', 'Do you have a promo code?')}
        open={openPromoModal}
        onClose={() => setOpenPromoModal(false)}
      >
        <WrapPromoCodeApply>
          <Input
            placeholder={t('DISCOUNT_COUPON', 'Discount coupon')}
            onChange={(e) => onChangeInputCoupon(e.target.value)}
            autoComplete='off'
          />
          <Button
            color='primary'
            rectangle
            disabled={!couponInput}
            onClick={() => handleApply()}
          >
            {t('APPLY', 'Apply')}
          </Button>
        </WrapPromoCodeApply>
      </Modal>
      <Confirm
        title={t('COUPON', 'Coupon')}
        content={confirm?.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm?.open}
        onClose={handleClose}
        onCancel={!confirm?.error ? () => setConfirm({ ...confirm, open: false, error: false }) : null}
        onAccept={handleOnAccept}
        closeOnBackdrop={false}
      />
    </CouponContainer>
  )
}

export const CouponControl = (props) => {
  const couponProp = {
    ...props,
    UIComponent: CouponControlUI
  }
  return (
    <CouponController {...couponProp} />
  )
}
