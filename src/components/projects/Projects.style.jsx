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
`