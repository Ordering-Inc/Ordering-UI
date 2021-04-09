import styled from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const Days = styled.div`
  > div {
    width: 100%;
    border-radius: unset;
    border-bottom: 1px solid #0000004d;
    height: inherit;

    > div {
      &:first-child {
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }

    #list {
      width: 100%;
      border-radius: unset;
    }
  }
`
export const Hours = styled.div`
  margin-top: 10px;
  > div {
    width: 100%;
    border-radius: unset;
    border-bottom: 1px solid #0000004d;
    height: inherit;

    > div {
      &: first-child {
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }
    #list {
      width: 100%;
      border-radius: unset;
    } 
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 20px;

  button {
    height: 50px;
    width: 100%;
    border-radius: unset;
  }
`
