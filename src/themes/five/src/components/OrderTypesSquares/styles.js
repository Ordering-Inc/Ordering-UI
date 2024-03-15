import styled, { css } from 'styled-components'

export const IconTypeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: ${({ activated, theme }) => activated ? theme?.colors?.white : '#F3F9FF'};
  border-radius: 44px;
`

export const TypesContainer = styled.div`
  display: flex;
  margin: 42px 20px 0px 20px;
`

export const AdditionalTypesContainer = styled.div`
  width: 60%;
  display: flex;
  margin-bottom: 20px;
  margin-left: 20px;
  button {
    padding: 4px 10px;
    border-radius: 50px;
    font-size: 10px;
    line-height: 0;
    height: 25px;
    margin-right: 20px;
  }
  .activated {
    color: ${({ theme }) => theme?.colors?.darkTextColor}
  }
`

export const TypeButton = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  height: 75px;
  border-radius: 7.6px;
  padding: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  margin-right: 32px;
  margin-bottom: 32px;
  cursor: pointer;
  background: ${({ activated, theme }) => activated ? theme?.colors?.primary : theme?.colors?.white};
  p{
    margin: 0;
    margin-left: 33px;
    ${({ activated, theme }) => activated && css`
      color: ${theme?.colors?.white};
    `}
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme?.colors.headingColor};
  margin: 20px 20px 5px 20px;
`
