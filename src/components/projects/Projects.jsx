import React from 'react'
import { Layout } from './Projects.style'
import { Row} from 'react-bootstrap'
import { H1 ,P} from '../Common.style';
import AliceCarousel from 'react-alice-carousel';
import CardComponent from './Card';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Mt } from '../Common.style'
export default function Projects() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <CardComponent 
    image={`https://blog.logrocket.com/wp-content/uploads/2021/03/javascript-php-developers.png`} 
    title={`< Card Title 1>`} 
    text={`This is a longer card with supporting text below as a natural`}
  />,
  <CardComponent 
    image={`https://blog.logrocket.com/wp-content/uploads/2021/03/javascript-php-developers.png`} 
    title={`< Card Title 1>`} 
    text={`This is a longer card with supporting text below as a natural`}
  />,
  <CardComponent 
    image={`https://blog.logrocket.com/wp-content/uploads/2021/03/javascript-php-developers.png`} 
    title={`< Card Title 1>`} 
    text={`This is a longer card with supporting text below as a natural`}
  />,
  <CardComponent 
    image={`https://blog.logrocket.com/wp-content/uploads/2021/03/javascript-php-developers.png`} 
    title={`< Card Title 1>`} 
    text={`This is a longer card with supporting text below as a natural`}
  />
  ];
  const certificats = [
    {
      name:`Responsive Web Design`,
      issueAt:`Issued March 14, 2021`,
      issuedFrom:`freeCodeCamp.org`,
      link:`https://freecodecamp.org/certification/fcc6f31641a-6612-47b3-a22c-ad533bb38ae2/responsive-web-design`
    },
    {
      name:`JavaScript Algorithms and Data Structures`,
      issueAt:`Issued August 28, 2021`,
      issuedFrom:`freeCodeCamp.org`,
      link:`https://freecodecamp.org/certification/fcc6f31641a-6612-47b3-a22c-ad533bb38ae2/javascript-algorithms-and-data-structures `
    }
  ]
  return (
    <Layout id="projects">
      <Mt space={80}/>
      <Row className="padding" sm={1}>
        <center><H1 color={`#fff`} size={50}>My Projects</H1></center>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
    </Row>
    <Row className="py-5">
        <center><H1 color={`#fff`} size={50}>My Certifications</H1></center>
        <ul className="certificats">
          {certificats && certificats.map(item=>
            <li className="certificats-item">
              <a href={item.link}><P color={`#fff`} mb={1} className="para">{item.name}</P></a>
            </li>
          )}
        </ul>
    </Row>
  </Layout>
  )
}
