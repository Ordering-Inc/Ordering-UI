import React from 'react'
import BiCaretUp from '@meronex/icons/bi/BiCaretUp'

import { CategoryTab } from './styles'

export const AccordionDropdown = (props) => {
  const {
    item,
    spaceTab,
    isOpen,
    isSelected,
    handleClickItem,
    IterateCategories
  } = props

  return (
    <div className='accordion-item'>
      <CategoryTab
        active={isSelected}
        className='accordion-title'
        categorySpace={spaceTab}
        onClick={() => handleClickItem()}
        isOpen={isOpen}
      >
        <span>
          {item.name}
        </span>
        <BiCaretUp
          className={`accordion__icon ${isOpen ? 'rotate' : ''}`}
        />
      </CategoryTab>
      {isOpen && (
        <div className='accordion-content'>
          <IterateCategories
            list={item.subcategories}
            isSub
            currentCat={item}
          />
        </div>
      )}
    </div>
  )
}
