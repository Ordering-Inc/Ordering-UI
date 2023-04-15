import React, { useEffect, useState } from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'
import { SearchBar } from '../SearchBar'
import { Button, Checkbox } from '../../../styles'
import {
  UsersContainer,
  SearchBarWrapper,
  UserItem,
  WrapperPagination
} from './styles'

const SelectUsersUI = (props) => {
  const {
    usersList,
    paginationProps,
    getUsers,
    searchValue,
    onSearch,
    isAddMode,
    isDisabled,
    selectedUserIds,
    handleSelectUser,
    handleAddPromotion,
    handleUpdateClick,
    handleSelectAllUsers
  } = props
  const [, t] = useLanguage()
  const [all, setAll] = useState(false)
  const [paginationSize, setPaginationSize] = useState(10)

  const handleChangePage = (page) => {
    getUsers(page, paginationSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    setPaginationSize(pageSize)
    getUsers(expectedPage, pageSize)
  }

  useEffect(() => {
    setAll(!!!selectedUserIds?.length)
  }, [selectedUserIds])

  const handleAllCheck = (check) => {
    if (!check) {
      handleSelectAllUsers()
      setAll(true)
    } else {
      setAll(false)
    }
  }

  return (
    <UsersContainer>
      <SearchBarWrapper>
        <SearchBar
          isCustomLayout
          placeholder={t('SEARCH', 'Search')}
          searchValue={searchValue}
          onSearch={onSearch}
        />
      </SearchBarWrapper>
      {usersList.loading ? (
        [...Array(10).keys()].map(i => (
          <UserItem key={i}>
            <Skeleton width={18} height={18} />
            <span className='name'>
              <Skeleton width={100} />
            </span>
          </UserItem>
        ))
      ) : (
        <>
          <UserItem>
            <Checkbox
              checked={all}
              onChange={() => handleAllCheck(all)}
            />
            <span className='name'>{t('ALL', 'All')}</span>
          </UserItem>
          {(!all || !!searchValue?.length) &&
            usersList.users.map(user => (
              <UserItem key={user.id}>
                <Checkbox
                  checked={selectedUserIds.includes(user.id)}
                  onChange={(e) => handleSelectUser(e.target.checked, user.id)}
                />
                <span className='name'>{user?.name} {user?.lastname}</span>
              </UserItem>
            )
            )}
        </>
      )}
      {(!all || !!searchValue?.length) &&
        usersList?.users.length > 0 && (
          <WrapperPagination>
            <Pagination
              paginationSize={paginationSize}
              currentPage={paginationProps.currentPage}
              totalPages={paginationProps.totalPages}
              handleChangePage={handleChangePage}
              handleChangePageSize={handleChangePageSize}
            />
          </WrapperPagination>
        )
      }

      <Button
        borderRadius='8px'
        color='primary'
        disabled={isDisabled}
        onClick={() => {
          isAddMode ? handleAddPromotion() : handleUpdateClick()
        }}
      >
        {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
      </Button>
    </UsersContainer>
  )
}

export const SelectUsers = (props) => {
  const usersProps = {
    ...props,
    defaultUserTypesSelected: [3],
    UIComponent: SelectUsersUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  }
  return <UsersListController {...usersProps} />
}
