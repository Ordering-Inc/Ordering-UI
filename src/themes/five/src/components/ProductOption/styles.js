import styled from 'styled-components'

export const Container = styled.div`
  &.error {
    background-color: orange;
  }
`

export const WrapHeader = styled.div`
  padding: 7px 0px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
`

export const TitleContainer = styled.div`
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 70%;
  display: flex;
  align-items: center;  

  *:first-child {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  white-space: normal;
  span {
    &:not(:first-child) {
      color: ${props => props.theme.colors.grayTextColor};
      font-size: 12px;
      font-weight: 400;
    }
  }
`

export const Flag = styled.span`
  font-size: 13px;
  margin: 0px;
  text-transform: capitalize;
  color: ${props => props.required ? '#E63757' : props.theme.colors.grayTextColor};
  font-weight: 500;

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
