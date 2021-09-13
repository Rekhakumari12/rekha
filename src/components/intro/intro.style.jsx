import styled from "styled-components";
import Img from "./getImage";
export const Layout = styled.section`
    background-color: #171617;
    border-top: 20px solid #fff;
    position: relative;
    background-color: #000;
    height: 80vh;
    color: #fff;
    h1{
      text-align: center;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }
    &:after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(${Img});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.5;
      z-index: 0;
    }
  @media screen and (max-width: 730px) {
    height: 60vh;
    .span-title{
      font-size: 5rem;
    }
  }
  @media screen and (max-width: 580px) {
    height: 40vh;
    .span-title{
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 1100px) {
    border-top: none;
  }
`
export const NameStyle = styled.span`
      font-family: 'Sacramento',cursive;
      font-weight: 400;
      text-transform: none;
      color:${props=>props.color?props.color:`#fff`};
      font-size: ${props=>props.size?props.size:6}rem;
`