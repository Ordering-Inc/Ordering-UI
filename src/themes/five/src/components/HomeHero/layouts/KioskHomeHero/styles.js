import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundPage};
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0px;
  position: relative;

  ${({ bgimage }) => bgimage && css`
  background-image: url(${bgimage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`

export const HeroContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  #logo {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 20px;
  }
  #button {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 30px;
  }
`
