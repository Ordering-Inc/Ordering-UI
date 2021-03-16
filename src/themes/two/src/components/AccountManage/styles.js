import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  h1 {
    font-size: 32px;
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 24px;
    }
  }
`
export const AccountDataSection = styled.div`
  padding-bottom: 20px;
  h2 {
    font-size: 24px;
  }

  p {
    color: ${props => props.theme.colors.grayTextColor};
    font-size: 18px;
  }

  button {
    color: ${props => props.theme.colors.primary};
    background: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
  }
`

export const AccountDeleteSection = styled(AccountDataSection)`
  border-top: 1px solid ${props => props.theme.colors.secondary};
`
