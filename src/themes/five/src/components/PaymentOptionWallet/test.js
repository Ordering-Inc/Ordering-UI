import React, { useEffect, useState } from 'react'
import { useApi, useSession } from 'ordering-components'

export const PaymentOptionWallet = (props) => {
  const {
    cart,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token, user }] = useSession()
  const requestsState = {}

  const [walletsState, setWalletsState] = useState({ result: [], loyaltyPlans: [], loading: true, error: null })

  const getRedemptionRate = (wallet, loyaltyPlans) => {
    if (wallet.type === 'cash') return 100

    if (!loyaltyPlans?.length) return false

    const loyaltyPlan = loyaltyPlans.find(plan => plan.type === wallet.type)
    if (!loyaltyPlan) return false

    const businessLoyaltyPlan = loyaltyPlan.businesses.find(business => business.business_id === cart.business_id)
    if (!businessLoyaltyPlan && loyaltyPlan.businesses.length) return false

    if (businessLoyaltyPlan && !businessLoyaltyPlan.redeems) return false

    const redemptionRate = businessLoyaltyPlan?.redemption_rate ?? loyaltyPlan?.redemption_rate
    return redemptionRate
  }

  const getWallets = async () => {
    try {
      const response = await fetch(
        `${ordering.root}/users/${user.id}/wallets`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { error, result } = await response.json()

      const reqLoyalty = await fetch(
        `${ordering.root}/loyalty_plans`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      const resLoyalty = await reqLoyalty.json()

      let wallets = []
      if (!error) {
        const loyaltyPlans = resLoyalty.result
        wallets = result.map(wallet => {
          const redemptionRate = getRedemptionRate(wallet, loyaltyPlans)
          if (redemptionRate === false) {
            wallet.valid = false
            wallet.redemption_rate = null
          } else {
            wallet.valid = true
            wallet.redemption_rate = redemptionRate
          }
          return wallet
        })
      }

      setWalletsState({
        ...walletsState,
        loading: false,
        error: error ? result : null,
        result: error ? null : wallets,
        loyaltyPlans: resLoyalty?.error ? [] : resLoyalty?.result
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setWalletsState({
          ...walletsState,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  const selectWallet = async (wallet) => {
    try {
      const response = await fetch(
        `${ordering.root}/carts/${cart.uuid}/wallets`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            wallet_id: wallet.id,
            amount: wallet.balance
          })
        }
      )
      const res = await response.json()
      console.log(res);
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        console.log(err);
      }
    }
  }

  const deletetWalletSelected = async (wallet) => {
    try {
      const response = await fetch(
        `${ordering.root}/carts/${cart.uuid}/wallets/${wallet.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        }
      )
      const res = await response.json()
      console.log(res);
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    getWallets()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          walletsState={walletsState}
          selectWallet={selectWallet}
          deletetWalletSelected={deletetWalletSelected}
        />
      )}
    </>
  )
}

PaymentOptionWallet.defaultProps = {}
