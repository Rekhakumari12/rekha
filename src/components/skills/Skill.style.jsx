import styled from "styled-components";
export const Layout = styled.section`
  box-sizing:border-box;
  .logo{
    display: grid;
    padding: 3rem 5rem;
    grid-template-columns: repeat(3,auto);
    place-items: center;
  }
  a i{
    font-size: 40px;
    color:#838383
  }
  i:hover{
    color:#5a5858;
  }
  .resume{
    padding: 2rem 0px;
  }
  @media screen and (max-width:737px){
    .logo{ 
      grid-template-columns: repeat(2,auto);
    }
    .img3{
      grid-column: 1/ span 2;
    }
  }
  @media screen and (max-width:567px){
    .logo{ 
      grid-template-columns: repeat(1,1fr);
    }
    .img3{
      grid-column: unset;
    }
    img{
      padding: 1rem 0px;
    }
  }
`