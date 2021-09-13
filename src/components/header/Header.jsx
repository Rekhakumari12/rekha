import React,{useState} from 'react'
import { Nav } from 'react-bootstrap'
import { Layout } from './Header.style'
export default function Header() {
  const [scrol, setScrol] = useState(0)
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement;
      setScrol(scrollTop)
    });
  return (
    <>
    {scrol<146?<Layout>
      <Nav className="justify-content-center navbar">
        <Nav.Item>
          <Nav.Link href="#about">About</Nav.Link>{' '}
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href="#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" href="#coffeewithme">Coffee with me</Nav.Link>
        </Nav.Item>
      </Nav>
      </Layout>
    :null}
  </>
  )
}
