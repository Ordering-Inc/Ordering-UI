import styled, { css } from 'styled-components'

export const BusinessInformationContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
  background: #fff;
`

export const BussinessTitle = styled.div`
  z-index: 1000;
  display: inline-flex;
  width: 50%;
  background: #ffffff;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  padding: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}
`

export const BusinessTitleContainer = styled.div`
  padding: 0 10px;
  background: #FFF;
  @media(min-width: 768px){
    padding: 0 20px;
    padding-top: 30px;
  }
`

export const SectionTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.darkTextColor};
  margin: 25px 0 20px 0;
`

export const ScheduleSection = styled.div`
    width: 100%;
`

export const ScheduleContainer = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    width: 300px;
  }
`

export const ScheduleBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0;
    margin-right: 3px;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: ${props => props.theme.colors.darkTextColor};

    &.close {
      color: #E63757;
      margin-right: 20px;
      ${props => props.theme?.rtl && css`
        margin-left: 20px;
        margin-left: 0;
      `}
    }
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      margin: 0 5px;
    }
  }
`

export const ModalIcon = styled.span`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  color: #000;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  z-index: 1;
  ${props => props.theme?.rtl && css`
    right: initial;
    left: 5px;
  `}
  @media (min-width: 578px){
    ${props => props.theme?.rtl && css`
    right: initial;
    left: 10px;
  `}
  }
  @media (min-width: 768px){
    right: 25px;
    top: 30px;
    ${props => props.theme?.rtl && css`
    left: 25px;
    right: initial;
  `}
  }
`

export const Description = styled.p`
  margin: 0 10px;
`

export const BusinessTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  color: ${props => props.theme.colors.darkTextColor};
  text-align: center;
  margin-top: 0;
  margin-bottom: 36px;

  ${props => props.theme?.rtl && css`
    padding-right: 30px;
    padding-left: 0;
  `}
`

export const Divider = styled.div`
  background: #F8F9FA;
  height: 8px;
  width: calc(100% + 20px);
  margin-left: -10px;

  @media (min-width: 768px) {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`

export const BusinessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 5px 20px;
    text-align: center;
  }
`

export const AditionalInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 35px;
`

export const PaymethodsAccepted = styled.div`
  padding: 0 20px;
`

export const ChangeLocation = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 10px;
`
