import styled from 'styled-components'

export const HighestRatedContainer = styled.div`
  padding-bottom: 30px;
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const BusinessList = styled.div`
  display: flex;
  box-sizing: border-box;

  #highestRated {
    > div {
      width: 250px;
      min-width: 250px;

      @media (min-width: 481px) {
        max-height: 320px;
        width: 310px;
        min-width: 310px;
      }
      @media (min-width: 993px) {
        width: 350px;
        min-width: 350px;
      }
      @media (min-width: 1200px) {
        width: 430px;
        min-width: 430px;
      }
    }
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme?.colors.headingColor};
  margin: 42px 20px 5px 20px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
  margin: 0 20px 15px 20px;
`

export const BusinessListWrapper = styled.div`
  overflow: scroll hidden;
  width: 100%;
`
