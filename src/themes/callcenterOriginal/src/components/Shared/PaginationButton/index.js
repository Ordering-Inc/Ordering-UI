import React from 'react'
import Prev from '@meronex/icons/md/MdKeyboardArrowLeft'
import Next from '@meronex/icons/md/MdKeyboardArrowRight'
import {
  WrapperPagination,
  WrapperPageState,
  PageButton
} from './styles'

export const PaginationButton = ({ pageSize, total, currentPage, totalPages, prevPaginate, nextPaginate }) => {
  const indexOfLastOrders = currentPage * pageSize < total ? currentPage * pageSize : total
  const indexOfFirstOrders = (currentPage - 1) * pageSize + 1
  return (
    <WrapperPagination>
      <WrapperPageState>
        {indexOfFirstOrders}-{indexOfLastOrders} of {total}
      </WrapperPageState>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => prevPaginate()}
      >
        <Prev />
      </PageButton>
      <PageButton
        onClick={() => nextPaginate()}
        disabled={currentPage === totalPages || totalPages === 1}
      >
        <Next />
      </PageButton>
    </WrapperPagination>
  )
}
