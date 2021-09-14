import styled from "styled-components"
export const Mt = styled.div`
  margin-top:${props=>props.space}px;
  @media screen and (max-width:768px){
    margin-top: 19px;
  }
`
export const H1 = styled.h1`
  font-size: ${props=>props.size}px;
  font-family: Lato;
  color: ${props=>props.color?props.color:`var(--heading-color)`};
  font-weight: ${props=>props.weight};
`
export const P = styled.p`
  font-family: ${props=>props.family};
  font-size: ${props=>props.size? props.size:21}px;
  margin-bottom: ${props=>props.mb? props.mb:30}px;
  color:${props=>props.color};
  line-height: 34px;
  font-weight: ${props=>props.weight? props.weight:500};
  @media screen and (max-width:768px){
    line-height: 25px;
  }
`
export const HR = styled.hr`
    height: 0px;
    color: #ede9e9;
    border: 1px solid #c0c0c0;
    margin: 30px auto;
`