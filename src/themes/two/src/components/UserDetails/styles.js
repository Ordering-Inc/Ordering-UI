import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  @media (max-width: 700px){
    flex-direction: column;
  }
`

export const Header = styled.div`
  width: 200px;
  h1 {
    text-transform: uppercase;
    margin: 0px;
    font-size: 20px;
  }
  span {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: 700px){
    width: 100%;
    display: flex;
    column-gap: 10px;
    padding-bottom: 10px;
    h1 {
      font-size: 18px;
    }
  }
`

export const UserData = styled.div`
  flex: 1;
`
