import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { AdminList } from 'ordering-components'
import { useTheme } from 'styled-components'
import { MultiSelect } from '../../../styles/MultiSelect'

import {
  Option,
  OptionContent,
  AdminNameContainer,
  WrapperAdminImage,
  AdminImage,
  AdminName,
  PlaceholderTitle
} from './styles'

const AdminSelectorUI = (props) => {
  const {
    adminList,
    defaultValue,
    isPhoneView,
    isFilterView,
    small,
    padding,
    handleChangeAdmin,
    filterValues,
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  // const [defaultOption, setDefaultOption] = useState(null)
  const [adminsMultiOptionList, setAdminsMultiOptionList] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const AdminLoading = [{ value: 'default', content: <Option small={small}>{t('LOADING', 'loading')}...</Option> }]

  useEffect(() => {
    const _aadminOptionList = [
      {
        value: 'default',
        content: (
          <Option
            padding={'0px'}
          >
            {
              t('SELECT_ADMIN', 'Select admin')
            }
          </Option>
        ),
        color: 'primary',
        disabled: !isFilterView,
        showDisable: true
      }
    ]
    if (!adminList.loading) {
      let _adminList
      if (searchValue) {
        _adminList = adminList.admins.filter(admin => (admin.name + admin.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      } else {
        _adminList = adminList.admins
      }
      const _adminsOptionListTemp = _adminList.map((admin, i) => {
        return {
          value: admin.id,
          showDisable: true,
          content: (
            <Option small={small} isPhoneView={isPhoneView} padding={padding} isFilterView={isFilterView}>
              <WrapperAdminImage small={small} className='admin-photo'>
                <AdminImage bgimage={admin.photo || theme.images.icons?.noAdmin} small={small} />
              </WrapperAdminImage>
              <OptionContent>
                <AdminNameContainer className='admin-info'>
                  <AdminName small={small}>{admin.name} {admin.lastname}</AdminName>
                </AdminNameContainer>
              </OptionContent>
            </Option>
          )
        }
      })

      setAdminsMultiOptionList(_adminsOptionListTemp)

      for (const option of _adminsOptionListTemp) {
        _aadminOptionList.push(option)
      }
    }
  }, [adminList, searchValue])

  // useEffect(() => {
  //   setDefaultOption(defaultValue)
  // }, [defaultValue])

  const Placeholder = <PlaceholderTitle>{t('SELECT_ADMIN', 'Select admin')}</PlaceholderTitle>


  return (
    <>
      {!adminList.loading ? (
        <MultiSelect
          defaultValue={filterValues.adminIds}
          placeholder={Placeholder}
          options={adminsMultiOptionList}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          onChange={(admin) => handleChangeAdmin(admin)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={AdminLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          className='admin-select'
        />
      )}
    </>
  )
}

export const AdminSelector = (props) => {
  const AdminControlProps = {
    ...props,
    UIComponent: AdminSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  }
  return (
    <>
      <AdminList {...AdminControlProps} />
    </>
  )
}
