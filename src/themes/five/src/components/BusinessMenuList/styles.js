import styled from 'styled-components'

export const BusinessMenuListContainer = styled.div`
  margin-bottom: 35px;

  > p {
    font-weight: 600;
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 13px;
  }
`

export const SelectWrapper = styled.div`
  width: 100%;
  > div {
    width: 100%;
    background-color: #F8F9FA!important;
    height: 44px;
    border: none;
    border-radius: 7.6px;
    color: #909BA9 !important;

    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
      justify-content: space-between;
    }
    > div#list {
      width: 100%;
      background-color: #F8F9FA!important;
      border: 1px solid #F8F9FA;
      border-radius: 7.6px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
  }
`

export const Option = styled.div`
  white-space: nowrap;
  color: #909BA9;
  font-size: 13px;
`
