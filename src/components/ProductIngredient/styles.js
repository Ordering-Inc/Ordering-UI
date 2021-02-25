import styled, { css } from 'styled-components'

export const WrapIngredient = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  padding: 15px 0;

  span {
    display: flex;
    font-weight: 300;
    color: #555;
  }

  span:nth-child(1) {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
    svg {
      color: ${props => props.theme.colors.grayTextColor};
      font-size: 25px;
      &[disabled] {
        color: #CBCBCB;
      }
    }
  }
`
