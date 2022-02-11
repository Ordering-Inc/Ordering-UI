import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLanguage, useUtils, useConfig } from 'ordering-components'
import { PaymentOptionWallet as PaymentOptionWalletController } from './test'

import {
  Container,
  SectionLeft,
  SectionWrapper,
  SectionLeftText
} from './styles'

import { Checkbox } from '../../../../../styles/Checkbox'

const PaymentOptionWalletUI = (props) => {
  const {
    walletsState,
    selectWallet,
    deletetWalletSelected
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  const [checkedState, setCheckedState] = useState(
    new Array(walletsState.result?.length).fill(false)
  );

  const walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet'),
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet'),
    }
  }

  const handleOnChange = (position, wallet) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    console.log(wallet.id, position, checkedState)

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    if (!walletsState.loading) {
      setCheckedState(
        new Array(walletsState.result?.length).fill(false)
      )
    }
  }, [walletsState.result?.length])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!walletsState.loading &&
        !walletsState.error &&
        walletsState.result?.length > 0 &&
      (
        <>
          {walletsState.result?.map((wallet, idx) => wallet.valid && (
            <Container
              key={wallet.id}
              isBottomBorder={idx === walletsState.result?.length - 1}
            >
              <SectionLeft>
                <Checkbox
                  name={`payment_option_${wallet.type}`}
                  id={`custom-checkbox-${idx}`}
                  checked={checkedState[idx]}
                  value={checkedState[idx]}
                  onChange={() => handleOnChange(idx, wallet)}
                />
                <SectionLeftText>
                  <label htmlFor={`custom-checkbox-${idx}`}>
                    {walletName[wallet.type]?.name}
                  </label>
                  {/* {wallet.type === 'cash' && (
                    <span>Click here to add more credits</span>
                  )} */}
                </SectionLeftText>
              </SectionLeft>
              <div>
                {wallet.type === 'cash' && (
                  <span>{parsePrice(wallet?.balance)}</span>
                )}
                {wallet.type === 'credit_point' && (
                  <span>
                    <span style={{ color: theme.colors.primary }}>{`${wallet?.balance} ${t('POINTS', 'Points')}`}</span> {`= ${parsePrice((wallet?.balance * wallet?.redemption_rate) / 100)}`}
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
