import styled from 'styled-components'

export const Container = styled.div`
  width: 91%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`
export const ProductsContainer = styled.div`
  width: 70%;
  padding: 30px 20px 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    padding: 20px 0;
  }

  @media (max-width: 576px) {
    padding: 0px;
  }
`

export const WrapContent = styled.div`
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 381px) {
    padding: 15px;
  }
`

export const ProductsNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 45px);
  margin: auto;

  h1 {
    font-size: 20px;
    opacity: 0.5;
    text-align: center;
  }

  @media (min-width: 411px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const ProductLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SkeletonItem = styled.div`
  width: 80%;
  margin: 30px auto;

  span {
    margin-bottom: 10px;
  }
`
export const WrapBottomSection = styled.div`
  p {
    text-align: center;
  }
`
