import styled from 'styled-components'

export const Container = styled.div`
  &.error {
    background-color: orange;
  }
`

export const WrapHeader = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleContainer = styled.div`
  margin: 0px;
  width: 70%;
  display: flex;
  align-items: center;  

  *:first-child {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: calc(100% - 50px);

  color: ${props => props.theme.colors.grayDark};
  font-weight: 500;
`

export const Flag = styled.span`
  font-size: 13px;
  margin: 0px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.primary};

  @media (min-width: 381px) {
    font-size: 14px;
  }
`
export const OptionThumbnail = styled.div`
  display: inline-block;
  border-radius: 8px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat, repeat;
  width: 40px;
  height: 40px;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
`
