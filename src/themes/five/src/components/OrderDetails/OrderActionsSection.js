import { useLanguage } from 'ordering-components'
import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'
import { MyOrderActions } from './styles'

export const OrderActionsSection = (props) => {
  const {
    userCustomerId,
    isService,
    handleGoToPage
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <>
      {!userCustomerId && (
        <MyOrderActions>
          <Button
            color='primary'
            outline
            onClick={() => handleGoToPage({ page: 'orders' })}
          >
            {isService
              ? t('YOUR_APPOINTMENTS', 'Your appointments')
              : t('YOUR_ORDERS', theme?.defaultLanguages?.YOUR_ORDERS || 'Your Orders')}
          </Button>
        </MyOrderActions>
      )}
    </>
  )
}
