import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 30px auto;
  padding-top: 60px;

  @media (max-width: 576px) {
    width: 91%;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  h1 {
    cursor: pointer;
    font-size: 32px;
    width: 30%;
    margin: 0px;
  }
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-size: 24px;
      width: 100%;
    }
  }
`
export const ProfileContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
`
export const ProfileOptionsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    width: 100%;
    flex-wrap: wrap;
  }
`
export const Tab = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    font-size: 16px;
  }
  
`
export const WrapperForm = styled.div`
  padding: 20px;

  > p {
    span {
      cursor: pointer;
      color: ${props => props.theme.colors.primary};
    }
  }
`
export const PrivacyContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary};
`
export const WrapAccountManage = styled.div`
  width: 50%;
  margin: 30px auto;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;

  @media (max-width: 992px) {
    width: 91%;
  }
`
