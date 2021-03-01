import styled from 'styled-components'
export const BackFilterView = styled.div`
  margin-bottom: 20px;
  span {
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    width: 100px;
  }
`
