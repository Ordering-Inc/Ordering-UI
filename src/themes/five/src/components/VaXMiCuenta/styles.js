import styled, { css } from 'styled-components'


export const VaXMiCuentaContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;

  img {
    width: 100%;
    height: 30px;
    margin: auto;
  }
  > div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: 'center'
    h2  {
      font-size: 18px;
      font-weight: 500;
      margin: 0;
    }
    h3 {
      display: flex;
    }
    span {
      text-decoration: underline;
      font-size: 16px;
    }
  }
  > div > div {
    display: flex;
    justify-content: space-evenly;
  }
  > div > h3 > div {
    padding: 0px 10px
  }
`

export const Button = styled.button`
  /* background: transparent; */
  border-radius: 8px;
  /* width: 60px; */
  height: 45px;
  border-color: #8a83833b;
  color: ${props => props.theme.colors.secondaryDark};;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  min-width: ${({ value }) => value === 0 ? '100px' : '60px' };
  background-color: ${({ isSelected }) => isSelected && css`
      ${props => props.theme.colors.primary};
  `}
`
