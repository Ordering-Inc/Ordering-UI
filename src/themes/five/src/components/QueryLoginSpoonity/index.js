import React from 'react'
import { QueryLoginSpoonity as QueryLoginSpoonityController, useLanguage } from 'ordering-components'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'

const QueryLoginSpoonityUI = (props) => {
  const {
    userState
  } = props

  const [, t] = useLanguage()

  return (
    <>
      {userState?.loading ? (
        <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading Ordering Dashboard...')} />
      ) : null}
    </>
  )
}

export const QueryLoginSpoonity = (props) => {
  const queryProps = {
    ...props,
    UIComponent: QueryLoginSpoonityUI
  }
  return <QueryLoginSpoonityController {...queryProps} />
}
