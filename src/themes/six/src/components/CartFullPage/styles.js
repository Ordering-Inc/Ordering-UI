import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 75px);
  position: fixed;
  top: 76px;
  z-index: 999;
  background-color: ${props => props.theme.colors.secundaryBackground};
  box-sizing: border-box;  
  overflow: hidden;
`
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
  overflow-y: scroll;
  >div {
    box-sizing: border-box;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    overflow-y: hidden;
  }
`

export const LeftPanel = styled.div`
  display: flex;
  width: 100%;  
  padding: 20px;
  background-color: ${props => props.theme.colors.primaryDarkBackground};
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1024px) {
    width: 40vw;
    padding: 2vw;
  }
`

export const RightPanel = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;  
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1024px) {
    width: 60vw;
    height: 100%;
    overflow-y: auto;
    padding-top: 8vh;
  }
`
