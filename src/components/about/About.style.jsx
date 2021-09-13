/* eslint-disable no-undef */
import styled from 'styled-components'
export const Layout = styled.section`
  position: relative;
  height: auto;
  color: #000;
  .container{
    max-width: 1100px;
  }
  .leftside{
    display: grid;
    place-items: center;
  }
  a {
    text-decoration: none;
    color:var(--para-color);
        
  }
  p a{
    margin-top:1px;
    border-bottom: 1px solid #e6e3e3;
  } 
  a i {
    font-size:30px
  } 
  .leftside img{
    border-radius: 50%;
    width:200px;
    box-shadow: 0px 3px 17px -11px #838181;
  }
  img:hover{
    transition: all 0.5s ease-in-out;
    box-shadow: 0px 3px 39px -11px #838181;
  }
  i:hover{
    color:#5a5858;
  }
  @media screen and (max-width: 1100px) {
    h1{
      font-size: 45px;
    }
    p{
      font-size: 17px;
    }
    .leftside{
      padding-left: 4rem;
      padding-right:4rem;
    }
    .rightside{
      padding-left: 4rem;
      padding-right:4rem;
    }
  }/* media closing */
`

