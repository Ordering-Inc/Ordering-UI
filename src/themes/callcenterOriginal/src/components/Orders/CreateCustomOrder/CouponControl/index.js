import React from 'react'
import { useLanguage, useOrder, CouponControl as CouponController } from 'ordering-components'
import { Button, Input } from '../../../../styles'
import { Confirm } from '../../../Shared'

import {
  CouponContainer
} from './styles'

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
  const [orderState] = useOrder()

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

  return (
    <CouponContainer>
      {couponDefault ? (
        <Button onClick={() => onRemoveCoupon()}>
          {t('REMOVE_COUPON', 'Remove Coupon')} {couponDefault}
        </Button>
      ) : (
        <>
          <Input
            value={couponInput ?? ''}
            placeholder={t('DISCOUNT_COUPON', 'Discount coupon')}
            onChange={(e) => onChangeInputCoupon(e.target.value)}
            autoComplete='off'
          />
          <Button
            borderRadius='8px'
            color='primary'
            disabled={!couponInput || orderState.loading}
            onClick={handleButtonApplyClick}
          >
            {t('APPLY', 'Apply')}
          </Button>
        </>
      )}
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
