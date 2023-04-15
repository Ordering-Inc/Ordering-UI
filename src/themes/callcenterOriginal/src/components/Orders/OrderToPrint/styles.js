import styled from 'styled-components'

export const PrintContainer = styled.div`
  display: none;
  padding: 80px 50px;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  @media print {
    display: block;

    @page { size: portrait; }
  }
`
