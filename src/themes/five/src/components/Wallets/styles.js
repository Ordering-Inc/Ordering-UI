import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const SectionWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`

export const TransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${(props) => props.theme.colors.gray200};
`

export const BalanceElement = styled.div`
  width: 250px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grayDividerColor};
  border-radius: 8px;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  span {
    font-size: 10px;
    margin-left: 5px;
  }
`
