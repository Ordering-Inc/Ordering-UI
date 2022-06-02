import React from 'react'
import { useConfig } from 'ordering-components'
import { OriginalHomeHero } from './layouts/OriginalHomeHero'
import { RedHomeHero } from './layouts/RedHomeHero'
import { StarbucksHomeHero } from './layouts/StarbucksHomeHero'

export const HomeHero = (props) => {
  const [{ configs }] = useConfig()

  /**
   * Below section is test code
   * This section will be removed after backend ready.
   * props.AdminSettings = configs
   */
  const layout = props?.AdminSettings?.homepage_settings?.layout !== undefined
    ? props?.AdminSettings?.homepage_settings?.layout : 'original'
  /**
  */

  const homeLayoutProps = {
    ...props,
    layout: layout,
    contentPosition: (props?.AdminSettings?.homepage_settings?.contentPosition !== undefined)
      ? props?.AdminSettings?.homepage_settings?.contentPosition : 'left'
  }

  return (
    <>
      {(layout === 'original') && <OriginalHomeHero {...homeLayoutProps} />}
      {(layout === 'starbucks') && <StarbucksHomeHero {...homeLayoutProps} />}
      {(layout === 'red') && <RedHomeHero {...homeLayoutProps} />}
    </>
  )
}
