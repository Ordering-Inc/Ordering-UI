import styled from 'styled-components'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const HeaderProfile = styled.div`
  display: flex;
`
export const Image = styled.div`
  width: 20%;
   > img {
    width: 100%;
    border-radius: 16px;
  }
`

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
`

export const MessageBusiness = styled.div`
  display: flex;
`

export const MessageCustomer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BubbleBusines = styled.div`
  border-radius: 97px 97px 97px 0px;
  padding: 10px;
  max-width: 50%;
  margin-bottom: 10px;
  background: #EFEFEF;
  height: auto;
`

export const BubbleCustomer = styled.div`
  border-radius: 97px 97px 0px 97px;
  padding: 10px;
  max-width: 50%;
  margin-bottom: 10px;
  background: #D81212;
  color: white;
`

export const Send = styled.div`
  background: #FAFAFA;
  padding: 10px 30px;
  align-items: center;
  display: flex;
  height: 50px;
  > input {
    flex: 1;
  }
  > span {
    width: 20px;
    height: 20px;
    padding: 0px 10px;
    > svg{
      width: 100%;
      height: 100%;
    }
  }
  > button{
    > span {
     > svg {
       width: 20px;
       height: 20px; 
       vertical-align: middle
     }
    }
  }
`
