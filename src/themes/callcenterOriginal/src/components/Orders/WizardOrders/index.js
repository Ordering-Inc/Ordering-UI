import React from 'react'
import { useLanguage } from 'ordering-components'
import Tour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Stars } from 'react-bootstrap-icons'

import {
  HelperContent
} from './styles'

export const WizardOrders = (props) => {
  const {
    isTourOpen,
    setIsTourOpen,
    currentStep,
    detailsOrder
  } = props

  const [, t] = useLanguage()

  const tourSteps = [
    {
      selector: '[data-tour="tour_start"]',
      content: (goTo) => (
        <HelperContent>
          <span>1.</span>
          <p>{t('TOUR_ORDER_START', 'Lets see your trial, we will guide you step by step.')}</p>
        </HelperContent>
      ),
      position: 'bottom'
    },
    {
      selector: '[data-tour="tour_detail"]',
      content: () => (
        <HelperContent>
          <span>2.</span>
          <p>{t('TOUR_ORDER_DETAIL', 'Then, you can see all the order details.')}</p>
        </HelperContent>
      ),
      position: 'left'
    },
    {
      selector: '[data-tour="tour_driver"]',
      content: () => (
        <HelperContent>
          <span>3.</span>
          <p>{t('TOUR_ASSIGN_DRIVER', 'Assign a driver for your delivery order')}</p>
        </HelperContent>
      ),
      position: 'left'
    },
    {
      selector: '[data-tour="tour_message"]',
      content: () => (
        <HelperContent>
          <span>{detailsOrder?.delivery_type === 1 ? 4 : 3}.</span>
          <p>{t('TOUR_ORDER_CHAT', 'Finally, you can use the order chat to communicate with customer or driver')}</p>
        </HelperContent>
      ),
      position: 'left'
    },
    {
      selector: '[data-tour="tour_start"]',
      content: () => (
        <HelperContent>
          <Stars />
          <p>
            <span>{t('THATS_IT', 'THAT’S IT')}!!</span> {t('TOUR_ORDER_COMPLETED', 'Now, you can see all your order that your store receive')}
          </p>
        </HelperContent>
      ),
      position: 'center'
    }
  ]

  return (
    <Tour
      steps={tourSteps}
      isOpen={isTourOpen}
      onRequestClose={() => setIsTourOpen(false)}
      maskClassName='mask'
      className='helper'
      rounded={8}
      onAfterOpen={target => disableBodyScroll(target)}
      onBeforeClose={target => enableBodyScroll(target)}
      showNavigation={false}
      showCloseButton={false}
      disableFocusLock
      startAt={currentStep}
      goToStep={currentStep}
      disableKeyboardNavigation
    />
  )
}
