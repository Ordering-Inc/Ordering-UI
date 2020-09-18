import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 15px;
  background-color: ${({ selected }) => selected ? '#EEE' : null}
`
