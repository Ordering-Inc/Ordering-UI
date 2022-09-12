import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  .tabs{
    justify-content: space-between;
  }
  .tab_title {
    padding: 10px 2px;
  }

  @media (min-width: 576px) {
    .tabs{
      justify-content: flex-start;
    }
    .tab_title {
      padding: 10px 15px;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 60px;
  }
`

export const SectionWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;

  ${(props) => !props.isLoading && css`
    align-items: center;
  `};

  @media (min-width: 768px) {
    ${(props) => !props.isLoading && css`
      align-items: flex-start;
    `};
  }
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

export const WrapContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`

export const Transactions = styled.div`
  .transactions_list {
    margin-top: 20px;

    h2 {
      text-align: center;
    }
    ${({ theme }) => theme?.layouts?.general?.components?.layout?.type === 'pfchangs' && css`
        color: #fff;
    `}
  }

  @media (min-width: 768px) {
    width: 60%;
    margin: ${(props) => props.isLoyaltyLevel ? 0 : '0 auto'};

    .transactions_list h2 {
      text-align: left;
    }
  }
`

export const LoyaltyContent = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 38%;
  }
`

export const LoyaltyWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  span.loyalty_title {
    font-size: 20px;
  }

  span.loyalty_name {
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary}
  }
`
