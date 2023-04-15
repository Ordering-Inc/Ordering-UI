import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../../styles/Select/DashboardSelect'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import {
  PaginationContainer,
  PaginationButtonContainer,
  PageButton,
  PageSizeContainer,
  PageSizeTitle,
  Option
} from './styles'

export const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
    handleChangePage,
    defaultPageSize,
    handleChangePageSize,
    isHidePagecontrol,
    paginationSize
  } = props

  const [, t] = useLanguage()
  const pageSizeOptions = [
    {
      value: 10,
      content: <Option>10</Option>
    },
    {
      value: 25,
      content: <Option>25</Option>
    },
    {
      value: 50,
      content: <Option>50</Option>
    }
  ]

  const [visiblePages, setVisiblePages] = useState([])
  const [activePage, setActivePage] = useState(currentPage)

  const filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter(page => page <= totalPages)
  }

  const getVisiblePages = (page, total) => {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total)
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total]
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total]
      } else {
        return [1, 2, 3, 4, 5, total]
      }
    }
  }

  const changePage = (page) => {
    if (page === activePage) {
      return
    }
    setActivePage(page)
    const _visiblePages = getVisiblePages(page, totalPages)
    setVisiblePages(filterPages(_visiblePages, totalPages))
    handleChangePage(page)
  }

  useEffect(() => {
    if (!totalPages) return
    setVisiblePages(getVisiblePages(null, totalPages))
  }, [totalPages])

  useEffect(() => {
    setActivePage(currentPage)
    const _visiblePages = getVisiblePages(currentPage, totalPages)
    setVisiblePages(filterPages(_visiblePages, totalPages))
  }, [currentPage])

  return (
    <PaginationContainer>
      <PaginationButtonContainer>
        <PageButton
          disabled={activePage === 1}
          onClick={() => (activePage !== 1) && changePage(activePage - 1)}
        >
          <ChevronLeft />
        </PageButton>

        {visiblePages.map((page, index, array) => (
          <React.Fragment key={page}>
            {array[index - 1] + 2 <= page ? (
              <>
                <PageButton noEffect>
                  ...
                </PageButton>
                <PageButton
                  active={activePage === page}
                  onClick={() => changePage(page)}
                >
                  {page}
                </PageButton>
              </>
            ) : (
              <PageButton
                active={activePage === page}
                onClick={() => changePage(page)}
              >
                {page}
              </PageButton>
            )}
          </React.Fragment>
        ))}

        <PageButton
          disabled={activePage === totalPages}
          onClick={() => (activePage !== totalPages) && changePage(activePage + 1)}
        >
          <ChevronRight />
        </PageButton>
      </PaginationButtonContainer>
      {!isHidePagecontrol && (
        <PageSizeContainer>
          <PageSizeTitle>
            {t('ITEMS_PER_PAGE', 'Items per page')}
          </PageSizeTitle>
          <Select
            isSecondIcon
            notAsync
            minWidth='70px'
            defaultValue={defaultPageSize || paginationSize}
            options={pageSizeOptions}
            onChange={size => handleChangePageSize(size)}
          />
        </PageSizeContainer>
      )}
    </PaginationContainer>
  )
}
