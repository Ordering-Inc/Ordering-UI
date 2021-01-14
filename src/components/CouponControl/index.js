import React, { useState } from 'react'
import {
  // CouponControl as CouponController,
  useLanguage
} from 'ordering-components'
import { CouponControl as CouponController } from './test'

import {
  CouponContainer
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { Confirm } from '../Confirm'

const CouponControlUI = (props) => {
  const {
    couponDefault,
    couponInput,
    handleButtonApplyClick,
    handleRemoveCouponClick,
    onChangeInputCoupon
  } = props

  const [, t] = useLanguage()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const onRemoveCoupon = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete the coupon?'),
      handleOnAccept: () => {
        handleRemoveCouponClick && handleRemoveCouponClick()
        setConfirm({ ...confirm, open: false })
      }
    })
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
            placeholder={t('DISCOUNT_COUPON', 'Discount coupon')}
            onChange={(e) => onChangeInputCoupon(e.target.value)}
            autoComplete='off'
          />
          <Button
            color='primary'
            disabled={!couponInput}
            onClick={handleButtonApplyClick}
          >
            {t('APPLY', 'Apply')}
          </Button>
        </>
      )}
      <Confirm
        title={t('COUPON', 'Coupon')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
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
