import React, { useState } from 'react'
import { useOrder } from 'ordering-components'

/**
 * Component to manage coupon form behavior without UI component
 */
export const CouponControl = (props) => {
  const {
    businessId,
    UIComponent
  } = props

  const [orderState, { applyCoupon }] = useOrder()

  const couponDefault = (
    orderState?.carts &&
    businessId &&
    orderState?.carts[`businessId:${businessId}`]?.coupon
  ) || null

  const [couponInput, setCouponInput] = useState(null)

  /**
   * method to manage coupon apply button
   */
  const handleButtonApplyClick = () => {
    applyCoupon({
      business_id: businessId,
      coupon: couponInput
    })
  }

  /**
   * method to manage remove coupon assigned
   */
  const handleRemoveCouponClick = () => {
    applyCoupon({
      business_id: businessId,
      coupon: null
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          couponDefault={couponDefault}
          couponInput={couponInput}
          onChangeInputCoupon={(val => setCouponInput(val))}
          handleButtonApplyClick={handleButtonApplyClick}
          handleRemoveCouponClick={handleRemoveCouponClick}
        />
      )}
    </>
  )
}
