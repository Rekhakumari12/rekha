import styled from 'styled-components'
export const Layout = styled.section`
  .center{
    display: grid;
    place-items: center;
  }
  hr{
    height: 0px;
    color: #ede9e9;
    border: 1px solid #c0c0c0;
    width: 90vw;
    margin: 30px auto;
  }
  .col{
      display: grid;
      place-items: center;
    }
    
  @media screen and (max-width: 974px) {
    hr{
      margin-top: 20px;
    }
  }
  @media screen and (max-width:768px){
    .center{
      display: grid;
      place-items: center;
    }
    hr{
      display: none;
    }
  }
`