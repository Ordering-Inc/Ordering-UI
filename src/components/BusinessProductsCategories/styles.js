import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 15px;
  background: #F8F8F8;
  z-index: 1000;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #D9D9D9;
  text-align: center;

  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  svg{
    background: #D9D9D9;
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    opacity: 0.9;
    align-self: center;
    top: 0;
    position: sticky;
  }
  svg.right{
    right: 1%;
  }
  svg.left{
    left: 1%;
  }
  svg.hidden{
    display: none;
  }
`
