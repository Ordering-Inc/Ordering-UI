import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useConfig } from 'ordering-components'
import { WalletList } from './test'

import {
  Container,
  SectionWrapper,
  BalanceElement,
  TransactionsWrapper
} from './styles'

import { WalletTransactionItem } from '../WalletTransactionItem'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Tabs, Tab } from '../../styles/Tabs'

const WalletsUI = (props) => {
  const {
    walletList,
    transactionsList,
    setWalletSelected
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseDate }] = useUtils()
  const [{ configs }] = useConfig()

  const [tabSelected, setTabSelected] = useState('cash')

  const currentWalletSelected = (walletList.wallets?.length > 0 && walletList.wallets?.find(w => w.type === tabSelected)) ?? null

  const walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet'),
      value: 0
    },
    credit_point: {
      name: t('CREDITS_POINTS_WALLET', 'Credit Points Wallet'),
      value: 1
    }
  }

  const handleChangeTab = (wallet) => {
    setTabSelected(wallet.type)
    setWalletSelected(wallet.id)
  }

  return (
    <Container>
      {!walletList.loading &&
        !walletList.error &&
        walletList.wallets?.length > 0 &&
      (
        <>
          <Tabs variant='primary'>
            {walletList.wallets?.map(wallet =>(
              <Tab
                key={wallet.id}
                active={tabSelected === wallet.type}
                onClick={() => handleChangeTab(wallet)}
                borderBottom
              >
                {walletName[wallet.type]?.name}
              </Tab>
            ))}
          </Tabs>

          <div style={{ width: '70%', margin: '0 auto' }}>
            <SectionWrapper>
              <BalanceElement>
                <h1>{parsePrice(currentWalletSelected?.balance)}</h1>
                <span>{configs?.stripe_currency?.value}</span>
              </BalanceElement>
            </SectionWrapper>

            <div style={{ marginTop: 20 }}>
              <h2 style={{fontSize: 20}}>{t('TRANSACTIONS_HISTORY', 'Transactions history')}</h2>
              <TransactionsWrapper>
                {transactionsList.list?.[`wallet:${currentWalletSelected?.id}`]?.map((transaction, i) =>(
                  <WalletTransactionItem
                    idx={i}
                    type={currentWalletSelected?.type}
                    key={transaction.id}
                    item={transaction}
                  />
                ))}
              </TransactionsWrapper>

              {transactionsList?.loading && (
                <>
                  {[...Array(8).keys()].map(i => (
                    <SectionWrapper key={i}>
                      <Skeleton height={40} />
                    </SectionWrapper>
                  ))}
                </>
              )}

              {!transactionsList?.loading &&
                (transactionsList?.error || !transactionsList.list?.[`wallet:${currentWalletSelected?.id}`]?.length) &&
              (
                <NotFoundSource
                  content={transactionsList?.error
                    ? t('ERROR_NOT_FOUND_TRANSACTIONS', 'Sorry, an error has occurred')
                    : t('NOT_FOUND_TRANSACTIONS', 'No transactions to show at this time.')
                  }
                />
              )}
            </div>
          </div>
        </>
      )}

      {walletList?.loading && (
        <>
          <Tabs variant='primary'>
            <Skeleton width={200} height={40} style={{ marginRight: 10 }} />
            <Skeleton width={200} height={40} style={{ marginRight: 10 }} />
            <Skeleton width={200} height={40} style={{ marginBottom: 15 }} />
          </Tabs>
          <div style={{ width: '85%', margin: '0 auto' }}>
            {[...Array(8).keys()].map(i => (
              <SectionWrapper key={i}>
                <Skeleton height={40} />
              </SectionWrapper>
            ))}
          </div>
        </>
      )}

      {!walletList?.loading && (walletList?.error || !walletList?.wallets?.length) && (
        <NotFoundSource
          content={walletList?.error
            ? t('ERROR_NOT_FOUND_WALLETS', 'Sorry, an error has occurred')
            : t('NOT_FOUND_WALLETS', 'No wallets to show at this time.')
          }
        />
      )}
    </Container>
  )
}

export const Wallets = (props) => {
  const walletsProps = {
    ...props,
    UIComponent: WalletsUI
  }
  return (
    <WalletList {...walletsProps} />
  )
}
