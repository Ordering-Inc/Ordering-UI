import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import {
  PaginationContainer,
  PaginationButtonContainer,
  PageButton,
} from './styles'

export const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
    handleChangePage,
  } = props

  const [, t] = useLanguage()

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
    </PaginationContainer>
  )
}
