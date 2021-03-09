import React from 'react'
import { useLanguage } from 'ordering-components'
import {
  Container,
  AccountDataSection,
  AccountDeleteSection
} from './styles'

export const AccountManage = (props) => {
  const [, t] = useLanguage()
  return (
    <Container>
      <h1>{t('MANAGE_ACCOUNT', 'Manage Account')}</h1>
      <AccountDataSection>
        <h3>{t('ACCOUNT_DATA', 'Account Data')}</h3>
        <p>
          {t('ACCOUNT_REQUEST', 'You can request an archive of your personal information. We’ll notify you when it’s ready to download.')}
        </p>
        <button>
          {t('REQUEST_ARCHIVE', 'Request Archive')}
        </button>
      </AccountDataSection>
      <AccountDeleteSection>
        <h3>{t('DELETE_ACCOUNT', 'Delete Account')}</h3>
        <p>
          {t('ACCOUNT_DELETE_REQUEST', 'You can request to have your account deleted and personal information removed. If you have both a Ordering account, then the information associated with both will be affected to the extent we can identify that the accounts are owned by the same user.')}
        </p>
        <button>
          {t('DELETE_ACCOUNT', 'Delete Account')}
        </button>
      </AccountDeleteSection>
    </Container>
  )
}
