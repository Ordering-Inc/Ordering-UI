import styled, { css } from 'styled-components'

export const BusinessListContainer = styled.div`
  padding: 40px 20px;
  > h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    margin-top: 0px;
    margin-bottom: 22px;
  }
`

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  > svg {
    margin: 0px 5px
  }
  input {
    width: 100%;
  }
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 23px;
    h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      margin: 0px;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export const TypeFilterWrapper = styled.div`
  padding: 0px;
  border: none;

  @media (min-width: 800px) {
    ${props => props.theme.rtl ? css`
      border-left: 1px solid ${props => props.theme.colors.lightGray};
      padding-left: 25px;
    ` : css`
      border-right: 1px solid ${props => props.theme.colors.lightGray};
      padding-right: 25px;
    `}
  }
`

export const PriceFilterWrapper = styled.div`
  padding: 0px;

  @media (min-width: 800px) {
    ${props => props.theme.rtl ? css`
      padding-right: 25px;
    ` : css`
      padding-left: 25px;
    `}
  }
`

export const PriceFilterListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 10px);
  margin-left: -5px;
  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: -5px;
  `}

  > button {
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
`

export const PreorderAndBusinessWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 55px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export const PreorderWrapper = styled.div`
  width: 100%;
  min-width: 250px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    width: 75%;
  }

  @media (min-width: 800px) {
    width: 350px;
    min-width: 350px;
  }
`

export const PreorderContent = styled.div`
  position: sticky;
  top: 0px;
  padding: 30px 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  z-index: 1;
  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    margin-top: 0px;
    margin-bottom: 30px;
    text-align: center;
  }
`

export const AddressWrapper = styled.div`
  padding-bottom: 12px;
`

export const AddressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin-top: 5px;
    margin-bottom: 0px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
  span {
    cursor: pointer;
    user-select: none;
    margin-top: 5px;
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const AddressContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;

  svg {
    margin-right: 12px;
    ${props => props.theme.rtl && css`
      margin-left: 12px;
      margin-right: 0px;
    `}
  }

  span {
    font-size: 12px;
    line-height: 22px;
  }
`

export const MomentWrapper = styled.div`
  padding-bottom: 25px;
  margin-bottom: 22px;
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
`

export const OrderTypeWrapper = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

export const SelectWrapper = styled.div`
  #select-input {
    width: 100%;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.gray200} !important;
    border: 1px solid ${props => props.theme.colors.gray200};
    > #list {
      width: 100%;
      border-radius: 4px;
    }
  }
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px;

  @media (min-width: 576px) {
    margin-left: -20px;
    width: 100%;
  }
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: ${props => props.theme.colors.disabled};
  margin: 0px 15px;
  color: ${props => props.theme.colors.danger500};
  font-weight: bold;
`

export const BusinessListWrapper = styled.div`
  width: 100%;
  margin-left: 0px;
  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    margin: 0px;
  }

  @media (min-width: 800px) {
    margin-left: 20px;
    width: calc(100% - 320px);
  }
`

export const HightestRatedWrapper = styled.div`
  width: 100%;
  margin: 0px;
  overflow: hidden;
  > div {
    > h2 {
      margin-top: 0px;
    }
  }

  @media (min-width: 800px) {
    margin-left: -20px;
    width: calc(100% + 40px);
  }

  ${({ noHeight }) => noHeight && css`
    height: 0px;
  `}
`
