import React, { useEffect, useState } from 'react'
import { useLanguage, BusinessMenuListing } from 'ordering-components'
import { Select } from '../../styles/Select'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessMenuListContainer,
  SelectWrapper,
  Option
} from './styles'

const BusinessMenuListUI = (props) => {
  const {
    businessMenuList,
    setMenu
  } = props

  const [, t] = useLanguage()
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    if (businessMenuList.loading) return
    const _menuList = []
    for (const menu of businessMenuList?.menus) {
      _menuList.push({
        value: menu.id,
        content: <Option>{menu.name}</Option>
      })
    }
    setMenuList(_menuList)
  }, [businessMenuList?.menus])

  const handleChangeBusinessMenu = (menuId) => {
    const menu = businessMenuList?.menus?.find(menu => menu.id === menuId)
    setMenu({ ...menu })
  }

  return (
    <BusinessMenuListContainer>
      <p>{t('MENU', 'Menu')}</p>
      {businessMenuList?.loading ? (
        <Skeleton height={44} />
      ) : (
        <SelectWrapper>
          <Select
            options={menuList}
            placeholder={t('MENU_NAME', 'Menu name')}
            onChange={(val) => handleChangeBusinessMenu(val)}
          />
        </SelectWrapper>
      )}
    </BusinessMenuListContainer>
  )
}

export const BusinessMenuList = (props) => {
  const businessMenuListProps = {
    ...props,
    UIComponent: BusinessMenuListUI
  }
  return <BusinessMenuListing {...businessMenuListProps} />
}
