import React from 'react'
import { useOrder, useConfig } from 'ordering-components'

import { Container, Layer } from './styles'

import { MomentControl } from '../MomentControl'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

export const MomentContent = (props) => {
  const [orderState] = useOrder()

  const { width } = useWindowSize()
  const momentControl = document?.getElementById('moment_control')?.getBoundingClientRect()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container isLoading={orderState?.loading}>
        <MomentControl />
        {orderState?.loading && (
          <Layer height={momentControl?.height && `${momentControl?.height}px`}>
            {(window.location.pathname !== '/search' || orderState?.options?.address?.location) && (
              <SpinnerLoader
                style={{
                  top: width <= 768 ? '50%' : '40%',
                  position: width <= 768 ? 'absolute' : 'sticky',
                  height: 'auto'
                }}
              />
            )}
          </Layer>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
