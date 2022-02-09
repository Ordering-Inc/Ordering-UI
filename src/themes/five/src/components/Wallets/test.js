import React, { useEffect, useState } from 'react'
import { useApi, useSession } from 'ordering-components'

export const WalletList = (props) => {
  const {
    businessId,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token, user }] = useSession()
  const requestsState = {}

  const [state, setState] = useState({ wallets: [], loading: TrustedTypePolicyFactory, error: null })

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
    //   const source = {}
    //   requestsState.wallets = source
    //   const { content: { result } } = await ordering
    //     .businesses(businessId)
    //     .select(['reviews'])
    //     .get({ cancelToken: source })

      setState({
        ...state,
        loading: false,
        error: error ? result : null,
        wallets: error ? null : result
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setState({
          ...state,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  useEffect(() => {
    getWallets()

    return () => {
      if (requestsState.wallets) {
        requestsState.wallets.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          walletList={state}
        />
      )}
    </>
  )
}

WalletList.defaultProps = {}
