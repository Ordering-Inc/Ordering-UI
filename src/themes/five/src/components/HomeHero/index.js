import React from 'react'
import { useTheme } from 'styled-components'
import { OriginalHomeHero } from './layouts/OriginalHomeHero'
import { RedHomeHero } from './layouts/RedHomeHero'
import { StarbucksHomeHero } from './layouts/StarbucksHomeHero'

export const HomeHero = (props) => {
  const theme = useTheme()
  const HomeLayoutConfig = {
    homepage_settings: {
      layout: theme?.homepage_view?.components?.layout?.type || 'original', // 'original', 'starbucks', 'red'
      contentPosition: theme?.homepage_view?.components?.layout?.position || 'left' // 'left', 'right', top, 'bottom', 'center'
    }
  }
  const layout = HomeLayoutConfig?.homepage_settings?.layout !== undefined
    ? HomeLayoutConfig?.homepage_settings?.layout : 'original'

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
    </>
  )
}
