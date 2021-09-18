import styled from 'styled-components'
export const Layout = styled.section`
  background-color:var(--red);
  height:auto;
  h1{
    padding: 3rem;
  }
  .quote{
    text-align:center;
    padding: 2rem 5rem;
  }
  .quote img{
    border-radius: 50%;
  }
  .alice-carousel{
    padding:0;
  }
  .alice-carousel__dots{
    margin:none
  }
  .alice-carousel__dots-item:not(.__custom).__active{
    background-color: #fff;
    box-shadow:0px 0px 0px 2px #ffffff75;
    }
  .alice-carousel__dots-item:not(.__custom){
    background-color: #a93837;
  }
  @media screen and (max-width:1100px){
    p{
      font-size: 25px;
    }
    .quote{
      padding:2rem 5rem;
    }
  }
  @media screen and (max-width:740px){
    p{
      font-size:17px;
      padding:1rem 0;
      margin-bottom: 0;
    }
    img{
      width:100px
    }
  }
  span{
    color: #fff;
    font-size: 1.5em;
  }
`