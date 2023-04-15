import React from 'react'
import BiCaretUp from '@meronex/icons/bi/BiCaretUp'
import AiOutlineCheck from '@meronex/icons/ai/AiOutlineCheck'
import { CategoryTab, SelectCategory } from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

export const AccordionDropdown = (props) => {
  const {
    item,
    spaceTab,
    isOpen,
    isSelected,
    handleClickItem,
    IterateCategories
  } = props

  const handleClick = (e, isSelectCategory) => {
    e.stopPropagation()
    handleClickItem(isSelectCategory)
  }
  const windowSize = useWindowSize()
  return (
    <div className='accordion-item'>
      <CategoryTab
        active={isSelected}
        className='accordion-title'
        categorySpace={spaceTab}
        onClick={(e) => handleClick(e, false)}
        isOpen={isOpen}
      >
        <span>
          {item.name}
        </span>
        <div>
          {windowSize.width < 993 && (
            <SelectCategory onClick={(e) => handleClick(e, true)}>
              <AiOutlineCheck />
            </SelectCategory>
          )}
          <BiCaretUp
            className={`accordion__icon ${isOpen ? 'rotate' : ''}`}
          />
        </div>
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
