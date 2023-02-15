import styled, { css } from 'styled-components'

export const SettingContainer = styled.div`
  display: flex;
  /* margin: 0 10px;
  width: 90px; */
  height: 41px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  button {
    border-radius: 7.6px;


    &:hover {
      background: #f7f7f7;
    }
  }

`
export const SettingControlPanel = styled.form`
  display: inline-block;
  width: 100%;
`

export const SettingHeader = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.headingColor};
`

export const TabsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 25px;
`

export const Tab = styled.div`
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.lightGray};
  white-space: nowrap;
  font-size: 12px;
  text-transform: capitalize;

  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 2px solid ${props => props.theme.colors.headingColor};
    font-weight: 500;
    font-size: 14px;
  `}
`
export const DeliveryStatusWrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    background: #E9ECEF;
    position: absolute;
    width: 2px;
    height: calc(100% - 60px);
    top: 7px;
    left: 7px;
  }
`
export const StatusItems = styled.div`
  position: relative;
`
export const ItemStatus = styled.span`
  width: 4px;
  height: 22px;
  margin: 0 15px;
  border-radius: 4px;
  background: ${props => props.backColor};
`
export const ItemHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export const ItemContent = styled.div`
  display: flex;
  padding: 0 30px;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.lightGray};
  }
`
export const IconWrapper = styled.span`
  display: inline-flex;
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  z-index: 2;
`
export const Actions = styled.div`
  padding-top: 22px;
  button {
    border-radius: 7.6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 7px 15px;
  }
`
export const TimerInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 7.6px;
  padding: 7px;
  width: fit-content;
  margin: 0 30px 15px;
  color: ${props => props.theme.colors.disabled};

  input {
    flex: 1;
    border: none !important;
    outline: none !important;
    padding: 5px;
    font-size: 14px;
    min-width: 38px;
    width: fit-content;
    color: ${props => props.theme.colors.headingColor};
  }
`
export const OverLine = styled.div`
  position: absolute;
  height: 100%;
  width: 15px;
  top: 0;
  background-color: #fff;
`
