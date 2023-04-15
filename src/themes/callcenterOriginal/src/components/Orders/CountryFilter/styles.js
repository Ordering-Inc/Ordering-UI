import styled, { css } from 'styled-components'

export const PlaceholderTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  column-gap: 20px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`

export const SkeletonWrapper = styled.div`
  > span {
    display: flex;
  }
`
