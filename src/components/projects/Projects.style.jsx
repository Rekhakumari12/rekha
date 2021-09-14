import styled from "styled-components"
export const Layout = styled.section`
  background-color:#021627;
  height: auto;
  .cardWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-body{
    text-align:center;
  }
  .card-img-top{
    border-radius: 10px;
  }
  .padding{
    padding:2% 5%;
  }
  li{
    padding: 20px;
    list-style: none;
  }
  .alice-carousel__dots{
    display: none;
  }
  .alice-carousel__next-btn-item,.alice-carousel__prev-btn-item {
    color: #e5e6ec;
    font-size: xx-large;
    font-weight: 800;
    cursor: pointer;
  }
  .card{
    background-color: transparent;
    border:none;
    color: #fff;
  }
  img{
    border: none;
  }
  .certificats{
    display: grid;
  }
  .certificats-item{
    margin: 0 auto;
    padding: 6px;
  }
  .para{
    border:1px solid transparent;
    color: #fff;
    text-decoration: none;
  }
  .para:hover{
    border-bottom:1px solid #fff;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  a:hover{
    color: #fff;
    border-bottom: 1px solid white;
  }
  hr{
    height: 0px;
    color: #ede9e9;
    border: 1px solid #c0c0c0;
    width: 90vw;
    margin: 30px auto;
  }
  .trivia-card{
    --flip-card-border-radius: 10px;
    --flip-card-height: 196px;
    --flip-card-transition-duration: 200ms;
    --flip-card-background-color-back: #02223de6;
  }
  .back{
    padding:1rem;
  }
  .back li{
    padding:10px;
    list-style:square;
  }
  @media screen and (max-width:415px){
    p{
      font-size: 17px;
    }
    h1{
      font-size: 35px;
    }
  }
    @media screen and (max-width:345px){
    p{
      font-size: 14px;
    }
  }
`