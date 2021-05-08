import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  > h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }
`
