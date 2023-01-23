import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import {
  WalletList,
  useLanguage,
  useUtils,
  useConfig
} from 'ordering-components'

import {
  Container,
  SectionWrapper,
  BalanceElement,
  TransactionsWrapper,
  WrapContent,
  Transactions,
  LoyaltyContent,
  LoyaltyWrapp,
  Title,
  TabsContainer,
  Tab
} from './styles'

import { WalletTransactionItem } from '../WalletTransactionItem'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Tabs } from '../../styles/Tabs'
import { GiftCardUI } from '../GiftCard/GiftCardUI'

const WalletsUI = (props) => {
  const {
    walletList,
    userLoyaltyLevel,
    transactionsList,
    setWalletSelected,
    isWalletCashEnabled,
    isWalletPointsEnabled
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ configs }] = useConfig()
  const theme = useTheme()

  const [tabSelected, setTabSelected] = useState(isWalletCashEnabled ? 'cash' : 'credit_point')

  const currentWalletSelected = (walletList.wallets?.length > 0 && walletList.wallets?.find(w => w.type === tabSelected)) ?? null

  const loyaltyLevel = Object.keys(userLoyaltyLevel.loyaltyLevel ?? {}).length > 0 && userLoyaltyLevel.loyaltyLevel

  const walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet'),
      value: 0,
      isActive: isWalletCashEnabled
    },
    credit_point: {
      name: t('CREDITS_POINTS_WALLET', 'Credit Points Wallet'),
      value: 1,
      isActive: isWalletPointsEnabled
    }
  }

  const handleChangeTab = (wallet) => {
    setTabSelected(wallet.type)
    setWalletSelected(wallet.id)
  }

  return (
    <Container>
      {!walletList.loading &&
        !userLoyaltyLevel.loading &&
        !walletList.error &&
        walletList.wallets?.length > 0 &&
        (
          <>
            <Title>{t('WALLETS', 'Wallets')}</Title>
            <TabsContainer>
              <Tabs variant='primary' className='tabs'>
                {walletList.wallets?.map(wallet => walletName[wallet.type]?.isActive && (
                  <Tab
                    key={wallet.id}
                    active={tabSelected === wallet.type}
                    onClick={() => handleChangeTab(wallet)}
                    borderBottom
                    className='tab_title'
                  >
                    {walletName[wallet.type]?.name}
                  </Tab>
                ))}
              </Tabs>
            </TabsContainer>

            <WrapContent>
              <Transactions isLoyaltyLevel={!!loyaltyLevel}>
                <SectionWrapper>
                  <BalanceElement>
                    <h1>
                      {
                        currentWalletSelected?.type === 'cash'
                          ? parsePrice(currentWalletSelected?.balance)
                          : currentWalletSelected?.balance
                      }
                    </h1>
                    <span>
                      {currentWalletSelected?.type === 'cash'
                        ? configs?.stripe_currency?.value
                        : t('POINTS', 'Points')}
                    </span>
                  </BalanceElement>
                </SectionWrapper>
                <GiftCardUI />
                <div className='transactions_list'>
                  {!transactionsList?.loading && transactionsList.list?.[`wallet:${currentWalletSelected?.id}`]?.length > 0 && (
                    <>
                      <h2 style={{ fontSize: 20 }}>{t('TRANSACTIONS_HISTORY', 'Transactions history')}</h2>
                      <TransactionsWrapper>
                        {transactionsList.list?.[`wallet:${currentWalletSelected?.id}`]?.map((transaction, i) => (
                          <WalletTransactionItem
                            idx={i}
                            type={currentWalletSelected?.type}
                            key={transaction.id}
                            item={transaction}
                          />
                        ))}
                      </TransactionsWrapper>
                    </>
                  )}

                  {transactionsList?.loading && (
                    <>
                      {[...Array(8).keys()].map(i => (
                        <SectionWrapper key={i} isLoading>
                          <Skeleton height={40} />
                        </SectionWrapper>
                      ))}
                    </>
                  )}

                  {!transactionsList?.loading &&
                    (transactionsList?.error || !transactionsList.list?.[`wallet:${currentWalletSelected?.id}`]?.length) &&
                    (
                      <NotFoundSource
                        content={
                          transactionsList?.error
                            ? t('ERROR_NOT_FOUND_TRANSACTIONS', 'Sorry, an error has occurred')
                            : t('NOT_FOUND_TRANSACTIONS', 'No transactions to show at this time.')
                        }
                      />
                    )}
                </div>
              </Transactions>

              {!!loyaltyLevel && tabSelected === 'credit_point' && (
                <LoyaltyContent>
                  <LoyaltyWrapp>
                    <span className='loyalty_title'>
                      {t('LOYALTY_LEVEL_TITLE', 'Your level is')}:
                    </span>
                    <img src={loyaltyLevel.image ?? theme.images.dummies.loyaltyLevel} />
                    <span className='loyalty_name'>
                      {loyaltyLevel.name}
                    </span>
                  </LoyaltyWrapp>
                </LoyaltyContent>
              )}
            </WrapContent>

          </>
        )}

      {(walletList?.loading || userLoyaltyLevel.loading) && (
        <>
          <Tabs variant='primary'>
            <Skeleton width={200} height={40} style={{ marginRight: 10 }} />
            <Skeleton width={200} height={40} style={{ marginRight: 10 }} />
            <Skeleton width={200} height={40} style={{ marginBottom: 15 }} />
          </Tabs>
          <div style={{ width: '85%', margin: '0 auto' }}>
            {[...Array(8).keys()].map(i => (
              <SectionWrapper key={i} isLoading>
                <Skeleton height={40} />
              </SectionWrapper>
            ))}
          </div>
        </>
      )}

      {!walletList?.loading && !userLoyaltyLevel.loading && (walletList?.error || !walletList?.wallets?.length) && (
        <NotFoundSource
          content={
            walletList?.error
              ? t('ERROR_NOT_FOUND_WALLETS', 'Sorry, an error has occurred')
              : t('NOT_FOUND_WALLETS', 'No wallets to show at this time.')
          }
        />
      )}
    </Container>
  )
}

export const Wallets = (props) => {
  const [{ configs }] = useConfig()

  const isWalletCashEnabled = configs?.wallet_cash_enabled?.value === '1'
  const isWalletPointsEnabled = configs?.wallet_credit_point_enabled?.value === '1'

  const walletsProps = {
    ...props,
    UIComponent: WalletsUI,
    isWalletCashEnabled,
    isWalletPointsEnabled
  }
  return (
    <WalletList {...walletsProps} />
  )
}
