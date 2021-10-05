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
  flex-wrap: wrap;
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
