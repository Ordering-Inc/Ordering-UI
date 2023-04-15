import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  text-align: center;
  bottom: 5px;
  img { 
    width: 30px;
    position: absolute;
    transform: translate(20%, 85%);
  }

  #select-input {
    width: 60px;
  }

  #arrow {
    color: black;
    width: 14px;
    height: 14px;
    transform: translate(60%, 60%);
  }

  #list {
    margin-top: 20px;
  }

  ${props => props.theme.rtl && css`
    img { 
      transform: translate(-20%, 85%);
    }

    #arrow {
      transform: translate(-60%, 60%);
    }
  `}
`
