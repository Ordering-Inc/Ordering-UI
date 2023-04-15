import styled, { css } from 'styled-components'

export const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding: 15px 20px 0 20px;
  box-sizing: border-box;
  position: relative;
  #left-autoscroll {
    display: none;
  }

  ::-webkit-scrollbar {
      opacity: 0
  }
  
  > div{
    > div {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
  }

  .category{
    padding: 10px 7px 0 0;

    > span {
      margin-bottom: 15px;
      ${props => props.theme?.rtl ? css`
        margin-left: 15px;
      ` : css`
        margin-right: 15px;
      `} 
    }
  }

  @media (min-width: 480px){
      display: block;
    .category{
      padding: 10px 15px 0 0;
    }
  }
`

export const BusinessCategoryTitle = styled.p`
  z-index: 100;
  position: relative;
  font-size: 13px;
  color: #909BA9;
  user-select: none;
  white-space: nowrap;
  padding-bottom: 13px;
  margin: 0;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;

  ${({ active }) => active && css`
    font-weight: bold;
    border-bottom: 1px solid ${props => props.theme.colors.darkTextColor};
    color: ${props => props.theme.colors.darkTextColor};
  `}
`

export const Divider = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  height: 1px;
  left: 20px;
  bottom: 0;
  background: #E9ECEF;
`
