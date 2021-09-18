import styled from "styled-components";
export const Layout = styled.section`
  box-sizing:border-box;
  .logo{
    padding: 3rem 13rem;
  }
  i{
    font-size: 70px;
    color:#838383;
    margin-bottom: 3rem;
  }
  img{
    margin-bottom: 3rem;
  }
  .resume i{
    font-size: 50px;
  }
  i:hover{
    color:#5a5858;
  }
  .resume{
    padding: 2rem 0px;
  }
  .present, .past, .interest{
    display: grid;
    grid-template-columns: repeat(4,auto);
    padding: 2rem 3rem;
    place-items: center;
    grid-gap: 20px;
  }
  .interest p{
    background-color: #FF5756;
    padding: 1px 8px;
    border-radius: 20px;
    color: #fff;
  }
  .interest p:hover{
    background-color:#5a5858;
  }
  span{
    position: inherit;
    bottom: -27px;
    right: 57px;
    font-size: medium;
    font-weight: bold;
    font-family: system-ui;
  }
  @media screen and (max-width:775px){
    .logo{ 
      grid-template-columns: repeat(2,auto);
      padding: 3rem 7rem;
    }
    .img3{
      grid-column: 1/ span 2;
    }
    .present, .past, .interest{
      grid-template-columns: repeat(2,auto);
      padding: 2rem 0rem;
    }
  }
  @media screen and (max-width:567px){
    .logo{ 
      grid-template-columns: repeat(1,1fr);
      padding: 3rem 4rem;
    }
    .img3{
      grid-column: unset;
    }
    img{
      padding: 1rem 0px;
    }
  }
`