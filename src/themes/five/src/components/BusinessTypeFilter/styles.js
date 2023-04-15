import styled, { css } from 'styled-components'

export const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding: 15px 20px 0 20px;
  box-sizing: border-box;
  position: relative;

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

export const SearchTypeContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% + 10px);
  margin-left: -5px;

  button {
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 24px;
    margin: 10px 5px 0px 5px;

    svg {
      margin-left: 5px;
      font-size: 12px;
      ${props => props.theme.rtl && css`
        margin-right: 5px;
        margin-left: 0px;
      `}
    }
  }

  span {
    margin-right: 10px;
    border-radius: 50px;
    ${props => props.theme.rtl && css`
      margin-left: 10px;
      margin-right: 0px;
    `}
  }
`
