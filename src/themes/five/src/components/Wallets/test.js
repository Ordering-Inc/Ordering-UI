import React, { useEffect, useState } from 'react'
import { useApi, useSession } from 'ordering-components'

export const WalletList = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token, user }] = useSession()
  const [walletSelected, setWalletSelected] = useState(null)
  const requestsState = {}

  const [state, setState] = useState({ wallets: [], loading: true, error: null })
  const [transactions, setTransactions] = useState({ list: null, loading: true, error: null })

  const getTransactions = async (walletId) => {
    if (transactions.list?.[`wallet:${walletId}`]) return
    try {
      setTransactions({ ...transactions, loading: true })
      const response = await fetch(
        `${ordering.root}/users/${user.id}/wallets/${walletId}/events?orderBy=-id`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { error, result } = await response.json()

      setTransactions({
        ...transactions,
        loading: false,
        error: error ? result : null,
        list: error ? null : {
          ...transactions.list,
          [`wallet:${walletId}`]: result
        }
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setTransactions({
          ...transactions,
          loading: false,
          error: [err.message]
        })
      }
    }
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

      if (!error && result?.length > 0) {
        getTransactions(result[0].id)
      }

      setState({
        ...state,
        loading: false,
        error: error ? result : null,
        wallets: error ? null : result,
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

    // return () => {
    //   if (requestsState.wallets) {
    //     requestsState.wallets.cancel()
    //   }
    // }
  }, [])

  useEffect(() => {
    if (walletSelected ) {
      getTransactions(walletSelected)
    }
  }, [walletSelected])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          walletList={state}
          transactionsList={transactions}
          setWalletSelected={setWalletSelected}
        />
      )}
    </>
  )
}

WalletList.defaultProps = {}
