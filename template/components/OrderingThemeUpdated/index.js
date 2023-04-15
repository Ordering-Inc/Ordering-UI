export const orderingThemeUpdated = (theme, orderingTheme) => ({
  ...theme,
  ...orderingTheme?.theme,
  colors: {
    ...theme.colors,
    ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color && { primary: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color }),
    ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color && { links: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color })
  },
  images: {
    ...theme.images,
    general: {
      ...theme.images.general,
      homeHero: orderingTheme?.theme?.homepage_view?.components?.homepage_header?.components?.image || theme.images?.general?.homeHero,
      businessHero: orderingTheme?.theme?.business_listing_view?.components?.business_hero?.components?.image || theme.images?.general?.businessHero,
      notFound: orderingTheme?.theme?.business_listing_view?.components?.not_found_source?.components?.image || theme.images?.general?.notFound,
      emptyActiveOrders: orderingTheme?.theme?.orders?.components?.active_orders?.components?.not_found_source?.components?.image || theme.images?.general?.emptyActiveOrders,
      emptyPastOrders: orderingTheme?.theme?.orders?.components?.past_orders?.components?.not_found_source?.components?.image,
      notNetwork: orderingTheme?.theme?.no_internet?.components?.image || theme.images?.general?.notNetwork,
      businessSignUpHero: orderingTheme?.theme?.business_signup?.components?.icon?.components?.image || theme.images?.general?.businessSignUpHero,
      driverSignUpHero: orderingTheme?.theme?.driver_signup?.components?.icon?.components?.image || theme.images?.general?.driverSignUpHero
    },
    categories: {
      ...theme.images.categories,
      food: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.food?.image || theme.images.categories.categoryFood,
      groceries: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.groceries?.image || theme.images.categories.categoryGroceries,
      alcohol: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.alcohol?.image || theme.images.categories.categoryAlcohol,
      laundry: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.laundry?.image || theme.images.categories.categoryLaundry,
      all: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.all?.image || theme.images.categories.categoryAll
    },
    dummies: {
      ...theme.images.dummies,
      businessHeader: orderingTheme?.theme?.business_view?.components?.header?.components?.dummy_image || theme.images.dummies.businessHeader,
      businessLogo: orderingTheme?.theme?.business_view?.components?.header?.components?.logo?.dummy_image || theme.images.dummies.businessLogo,
      product: orderingTheme?.theme?.business_view?.components?.products?.components?.photo?.components?.dummy_image || theme.images.dummies.product
    },
    logos: {
      ...theme.images.logos,
      logotype: orderingTheme?.theme?.header?.components?.logo?.components?.image || theme.images.logos.logotype
    }
  }
})
