import React from 'react'
import { useConfig, useOrderingTheme } from 'ordering-components'
import { OriginalHomeHero } from './layouts/OriginalHomeHero'
import { RedHomeHero } from './layouts/RedHomeHero'
import { StarbucksHomeHero } from './layouts/StarbucksHomeHero'
import { PFChangsHomeHero } from './layouts/PFChangsHomeHero'
export const HomeHero = (props) => {
  const [{ configs }] = useConfig()
  const [orderingTheme] = useOrderingTheme()
  // *****************************
  // HomeLayout = configs
  const HomeLayoutConfig = {
    homepage_settings: {
      layout: 'pfchangs' || orderingTheme?.theme?.homepage_view?.components?.layout?.type, // 'original', 'starbucks', 'red'
      contentPosition: orderingTheme?.theme?.homepage_view?.components?.layout?.position // 'left', 'right', top, 'bottom', 'center'
    }
  }
  const layout = HomeLayoutConfig?.homepage_settings?.layout !== undefined
    ? HomeLayoutConfig?.homepage_settings?.layout : 'original'
  // *****************************

  const homeLayoutProps = {
    ...props,
    layout: layout,
    contentPosition: (HomeLayoutConfig?.homepage_settings?.contentPosition !== undefined)
      ? HomeLayoutConfig?.homepage_settings?.contentPosition : 'left'
  }

  return (
    <>
      {(layout === 'original') && <OriginalHomeHero {...homeLayoutProps} />}
      {(layout === 'starbucks') && <StarbucksHomeHero {...homeLayoutProps} />}
      {(layout === 'red') && <RedHomeHero {...homeLayoutProps} />}
      {(layout === 'pfchangs') && <PFChangsHomeHero {...homeLayoutProps} />}
    </>
  )
}
