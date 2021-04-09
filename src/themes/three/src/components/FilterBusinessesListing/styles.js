import styled from 'styled-components'

export const Container = styled.div`
  width: 91%;
  margin: 0px auto;
  border-top: 1px solid ${props => props.theme.colors.secundary};
  padding: 85px 0 30px 0;
  display: flex;
  column-gap: 30px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 30px;
    padding: 130px 0 30px 0;
  }
`
export const FilterBusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`
export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`
