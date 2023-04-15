import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  padding-left: 10px;
`

export const DateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
  }

  span:first-child {
    color: ${(props) => props.theme.colors.darkGray};
  }
`

export const MessageBlock = styled.div`
  display: flex;
  font-size: 14px;
`

export const Dot = styled.div`
  position: absolute;
  top: ${(props) => props.isTop ? 0 : 10}px;
  left: -4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.darkGray};
`

export const DescriptionBlock = styled(MessageBlock)`
  span {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 12px;
  }
`
