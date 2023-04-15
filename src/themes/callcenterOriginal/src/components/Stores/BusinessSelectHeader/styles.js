import styled, { css } from 'styled-components'

export const PopMenuContatiner = styled.div`
  position: absolute;
  left:0px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  width: 280px;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);
  border-radius: 7.6px;
  padding: 8px;
  z-index: 999;
`
export const SelectHeaderContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > button {
    margin-top: 10px;
    width: 100%;
  }
`
export const BusinessSearch = styled.div`
  display: flex;
  margin-bottom: 5px;
  padding: 5px;

  > div {
   width: 100%;

   > input {
    background: ${props => props.theme.colors.secundary};
   }
  }
`
export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 7.6px;
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  img {
    min-height: 38px;
    min-width: 38px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-right: 8px;
    ${props => props.theme?.rtl && css`
      margin-right: 0px;
      margin-left: 8px;
    `}
  }
  > div {
    display: flex;
    flex-direction: column;
    max-width: 210px;
    b {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: ${props => props.theme.colors.textBlack};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    p {
      margin: 0;
      font-size: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${props => props.theme.colors.textGray};
    }
  }
  span {
    display: flex;
  }
`
export const BusinessList = styled.div`
`
export const WrapperPagination = styled.div`
  margin-top: 10px;
  >div>div{
    margin: 0;
    button {
      font-size: 12px;
    }
  }
`
