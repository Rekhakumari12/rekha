import styled from "styled-components";
export const Layout = styled.section`
  text-align:center;
  padding:4rem 2rem;
  .contact{
    margin: 0 auto;
    width: 50vw;
  }
    
  a{
    font-size: 50px;
    color: #838383;
    text-decoration:none;
  }
  i{
    position: relative;
    top: 0px;
    transition: all 0.2s ease-in-out;
  }
  i:hover{
    top:-10px;
  }
  @media screen and (max-width:415px){
    h1{  
      font-size: 40px;
      margin-bottom: 18px;
    }
  }
`