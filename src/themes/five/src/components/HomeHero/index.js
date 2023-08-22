import React from 'react'
import { useTheme } from 'styled-components'
import { OriginalHomeHero } from './layouts/OriginalHomeHero'
import { RedHomeHero } from './layouts/RedHomeHero'
import { StarbucksHomeHero } from './layouts/StarbucksHomeHero'
import { OloHomeHero } from './franchises/OloHomeHero'

export const HomeHero = (props) => {
  const theme = useTheme()
  const websiteTheme = theme?.my_products?.components?.website_theme?.components?.type
  const HomeLayoutConfig = {
    homepage_settings: {
      layout: theme?.homepage_view?.components?.layout?.type || 'original', // 'original', 'starbucks', 'red'
      contentPosition: theme?.homepage_view?.components?.layout?.position || 'left' // 'left', 'right', top, 'bottom', 'center'
    }
  }
  const layout = HomeLayoutConfig?.homepage_settings?.layout !== undefined
    ? HomeLayoutConfig?.homepage_settings?.layout : 'original'

  const franchiseLayout = theme?.my_products?.components?.website_theme?.components?.franchise_slug

  const homeLayoutProps = {
    ...props,
    layout: layout,
    contentPosition: (HomeLayoutConfig?.homepage_settings?.contentPosition !== undefined)
      ? HomeLayoutConfig?.homepage_settings?.contentPosition : 'left'
  }

  return (
    <>
      {websiteTheme === 'franchise' ? (
        <>
          {franchiseLayout === 'franchise_1' && <OloHomeHero {...homeLayoutProps} />}
          {!franchiseLayout && <OriginalHomeHero {...homeLayoutProps} />}
        </>
      ) : (
        <>
          {(layout === 'original') && <OriginalHomeHero {...homeLayoutProps} />}
          {(layout === 'starbucks') && <StarbucksHomeHero {...homeLayoutProps} />}
          {(layout === 'red') && <RedHomeHero {...homeLayoutProps} />}
        </>
      )}
    </>
  )
}
