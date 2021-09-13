import styled from 'styled-components'
export const Layout = styled.header`
    z-index: 1024;
    background: transparent;
    position: fixed;
    width: 100%;
    top: 10px;
    height: 90px;
  @media screen and (max-width: 1100px) {
    margin-top: 0;
    top: -13px;
  }
  @media screen and (max-width:660px){
    display: none;
  }
  .nav-item{
    padding-right: 30px;
    padding-left: 30px;
  }
  .nav-item a{
    padding: 0px 0px 5px 0px;
    color: #ffffffc7;
    font-weight: 600;
    font-size: 15px;
    font-family: 'Lato';
    text-transform: uppercase;
    border: 1px solid transparent;
}
  .nav-item a:hover{
    border-bottom: 1px solid #ffffffc7;
    
  }
  .navbar{
    margin-top: 1.5rem;
  }
`