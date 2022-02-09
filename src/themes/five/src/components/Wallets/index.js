import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { WalletList } from './test'

import {
  Container
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

const WalletsUI = (props) => {
  const {
    walletList
  } = props

  const [, t] = useLanguage()
  const [tabSelected, setTabSelected] = useState(0)

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

  return (
    <Container>
      {!walletList.loading &&
        !walletList.error &&
        walletList.wallets?.length > 0 &&
      (
        <Tabs variant='primary'>
          {walletList.wallets?.map(wallet =>(
            <Tab
              key={wallet.id}
              active={tabSelected === 0}
              onClick={() => setTabSelected(walletName[wallet.type]?.value)}
              borderBottom
            >
              {walletName[wallet.type]?.name}
            </Tab>
          ))}
        </Tabs>
      )}

      {/* {walletList?.loading && (
        <ItemListing>
          {[...Array(4).keys()].map(i => (
            <BusinessController
              key={i}
              className='card'
              business={{}}
              isSkeleton
              orderType={orderState?.options?.type}
            />
          ))}
        </ItemListing>
      )}

      {!walletList?.loading && walletList?.error && (
        <NotFoundSource
          content={t('ERROR_NOT_FOUND_CART_STORES', 'Sorry, an error has occurred')}
        />
      )} */}
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
