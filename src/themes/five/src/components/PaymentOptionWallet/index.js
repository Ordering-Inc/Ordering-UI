import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import {
  PaymentOptionWallet as PaymentOptionWalletController,
  useLanguage,
  useUtils,
  useConfig
} from 'ordering-components'

import {
  Container,
  SectionLeft,
  SectionWrapper,
  SectionLeftText
} from './styles'

import { Alert } from '../Confirm'
import { Alert as AlertPFChangs } from '../Confirm/layouts/pfchangs'
import { Checkbox } from '../../../../../styles/Checkbox'

const PaymentOptionWalletUI = (props) => {
  const {
    cart,
    errorState,
    setErrorState,
    selectWallet,
    walletsState,
    businessConfigs,
    deletetWalletSelected,
    setHasWallets
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [checkedState, setCheckedState] = useState(
    new Array(walletsState.result?.length).fill(false)
  )

  const AlertComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? AlertPFChangs
    : Alert

  const isWalletCashEnabled = configs?.wallet_cash_enabled?.value === '1'
  const isWalletPointsEnabled = configs?.wallet_credit_point_enabled?.value === '1'

  const isBusinessWalletCashEnabled = businessConfigs.find(config => config.key === 'wallet_cash_enabled')?.value === '1'
  const isBusinessWalletPointsEnabled = businessConfigs.find(config => config.key === 'wallet_credit_point_enabled')?.value === '1'

  const walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet'),
      isActive: isWalletCashEnabled && isBusinessWalletCashEnabled
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet'),
      isActive: isWalletPointsEnabled && isBusinessWalletPointsEnabled
    }
  }

  const closeAlert = () => {
    setAlertState({ open: false, content: [] })
    setErrorState(null)
  }

  const handleOnChange = (position, wallet) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    if (!checkedState[position]) {
      selectWallet(wallet)
    } else {
      deletetWalletSelected(wallet)
    }

    setCheckedState(updatedCheckedState)
  }

  useEffect(() => {
    if (!walletsState.loading) {
      setCheckedState(
        walletsState?.result?.map(wallet => {
          return !!cart?.wallets?.find(w => w.id === wallet.id)
        })
      )
      const length = walletsState.result?.map((wallet, idx) => wallet.valid && wallet.balance >= 0 && walletName[wallet.type]?.isActive)
      setHasWallets && setHasWallets(length > 0)
    }
  }, [walletsState.result?.length])

  useEffect(() => {
    if (errorState) {
      setAlertState({ open: true, content: errorState })
    }
  }, [errorState])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!walletsState.loading &&
        !walletsState.error &&
        walletsState.result?.length > 0 &&
        (
          <>
            {walletsState.result?.map((wallet, idx) => wallet.valid && wallet.balance >= 0 && walletName[wallet.type]?.isActive && (
              <Container
                key={wallet.id}
                isBottomBorder={idx === walletsState.result?.length - 1}
              >
                <SectionLeft>
                  <Checkbox
                    name={`payment_option_${wallet.type}`}
                    id={`custom-checkbox-${idx}`}
                    disabled={(cart?.balance === 0 && !checkedState[idx]) || wallet.balance === 0}
                    checked={checkedState[idx]}
                    value={`payment_option_${wallet.type}`}
                    onChange={() => handleOnChange(idx, wallet)}
                  />
                  <SectionLeftText
                    disabled={(cart?.balance === 0 && !checkedState[idx]) || wallet.balance === 0}
                  >
                    <label
                      htmlFor={`custom-checkbox-${idx}`}
                    >
                      {walletName[wallet.type]?.name}
                    </label>
                  </SectionLeftText>
                </SectionLeft>
                <div>
                  {wallet.type === 'cash' && (
                    <span>{parsePrice(wallet?.balance, { isTruncable: true })}</span>
                  )}
                  {wallet.type === 'credit_point' && (
                    <span>
                      <span style={{ color: theme.colors.primary }}>{`${wallet?.balance} ${t('POINTS', 'Points')}`}</span> {wallet?.balance > 0 && `= ${parsePrice(wallet?.balance / wallet?.redemption_rate, { isTruncable: true })}`}
                    </span>
                  )}
                </div>
              </Container>
            ))}
          </>
        )}

      {walletsState?.loading && (
        <>
          {[...Array(2).keys()].map(i => (
            <SectionWrapper key={i}>
              <Skeleton height={40} />
            </SectionWrapper>
          ))}
        </>
      )}

      <AlertComponent
        title={t('WALLET_ERROR_MESSAGES', 'Wallet')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </div>
  )
}

export const PaymentOptionWallet = (props) => {
  const paymentWalletProps = {
    ...props,
    UIComponent: PaymentOptionWalletUI
  }

  return (
    <PaymentOptionWalletController {...paymentWalletProps} />
  )
}
