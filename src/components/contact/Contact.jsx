import React from 'react'
import styled from 'styled-components'
import { P } from '../Common.style'
import { NameStyle } from '../intro/intro.style'
import { Image } from 'react-bootstrap'
import footer from '../../images/red.png'
const Layout = styled.section`
.sayhello{
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3,auto);
  padding: 0 2rem 0rem;
  grid-gap: 2rem;
}
img{
  width: 97vw;
}
  @media screen and (max-width: 1100px) {
    img{
      width: 100vw;
    }
  }
  @media screen and (max-width: 700px){
  .sayhello{
    grid-template-columns: repeat(1,auto);
  }
  }
`
export default function Contact() {
  return (
    <Layout>
      <div className="sayhello">
        <div>
          <P size={20} weight={800} mb={10} color={`var(--para-color)`}>No  copyright issues. <i className="far fa-copyright"></i></P>
          <P size={20} weight={500} mb={10} color={`var(--para-color)`}>Feel free to copy. If you need any help, ping me !</P>
        </div>
        <div>
          <NameStyle color={`var(--red)`} size={3}>Rekha Kumari</NameStyle>
        </div>
        <div>
          <P size={15} color={`var(--para-color)`} mb={1}>Made with ❤️ in India</P>
        </div>
      </div>
      <Image src={footer}/>
    </Layout>
  )
}
