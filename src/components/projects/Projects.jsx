import React from 'react'
import { Layout } from './Projects.style'
import { Row} from 'react-bootstrap'
import { H1 ,P} from '../Common.style';
import AliceCarousel from 'react-alice-carousel';
import CardComponent from './Card';
import 'react-alice-carousel/lib/alice-carousel.css';
import google from '../../images/google.png'
import todo from '../../images/todo.png'
import weather from '../../images/weather.png'
import tv from '../../images/tv.png'
import na from '../../images/na.png'
import marvel from '../../images/marvel.png'
import scroll from '../../images/scroll.png'
import { Mt } from '../Common.style'
export default function Projects() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <CardComponent 
    image={google} 
    title={`< Google Clone />`} 
    text={`This is a longer card with supporting text below as a natural`}
    tech={`Tech stack: HTML, CSS, ReactJs`}
    info={[
      `Its responsive Google clone web application`,
      `Features: user can search for any information they want. Just like how Google works`
    ]}
    link={`https://rekhakumari12.github.io/Google-clone/#/googleclone`}
  />,
  <CardComponent 
    image={todo} 
    title={`< Todo List />`} 
    text={`This is a longer card with supporting text below as a natural`}
    tech={`Tech stack: HTML, CSS, ReactJs`}
    info={[
      `Todo list web application, where users can keep track of their daily tasks.`,
      `Features: Add task, Delete Task, View Task, Edit task.`
    ]}
    link={`https://rekhakumari12.github.io/todo/`}
  />,
  <CardComponent 
    image={weather} 
    title={`< Weather Forecast App />`} 
    text={`This is a longer card with supporting text below as a natural`}
    tech={`Tech stack: HTML, CSS, ReactJs`}
    info={[
      `Web application, where user can search weather based on City, State and Country`,
      `Features: Display location, Display real-time minimum and maximum temperature`
    ]}
    link={`https://rekhakumari12.github.io/weather-forecast-github/`}
  />,
  <CardComponent 
    image={tv} 
    title={`< TVmaze />`} 
    text={`This is a longer card with supporting text below as a natural`}
    tech={`Tech stack: HTML, CSS , Bootstrap, Reactjs`}
    info={[
      `Responsive web application, which displays all the information about, shows, cast and characters`,`
      Features: search shows and web series by Actor name or Show name.`
    ]}
    link={`https://rekhakumari12.github.io/TVmaze/`}
  />,
  <CardComponent 
    image={scroll} 
    title={`< Infinite-scroll />`} 
    text={`This is a longer card with supporting text below as a natural`}
    tech={`Tech stack: HTML, CSS, ReactJs`}
    info={[
      `A responsive web application that fetches high-resolution images based on user search`,
      `Feature: search images, infinite scrolling`
    ]}
    link={`https://rekhakumari12.github.io/Infinite-scroll/`}
  />,
  <CardComponent 
    image={na} 
    title={`< Nutrition Analysis App />`} 
    text={`This is a longer card with supporting text below as a natural`}
    tech={`Tech stack: HTML, CSS , Bootstrap, Reactjs`}
    info={[
      `A web application, which analyses nutritional values of given ingredients`,
      `Features: Can give multiple inputs`
    ]}
    link={`https://rekhakumari12.github.io/Nutrition-Analysis/`}
  />,
  <CardComponent 
    image={marvel} 
    title={`< Marvel />`} 
    text={`This is a longer card with supporting text below as a natural`}
    tech={`Tech stack: HTML, CSS , Bootstrap, Reactjs`}
    info={[`Responsive web application, With a pretty user interface and classic design`]}
    link={`https://rekhakumari12.github.io/marvel/`}
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
        <center><H1 color={`#fff`} size={50} className="mb-5">My Projects</H1></center>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
    </Row>
    <hr/>
    <Row className="py-5">
        <center><H1 color={`#fff`} size={50}>My Certifications</H1></center>
        <ul className="certificats my-5">
          {certificats && certificats.map((item,i)=>
            <li className="certificats-item" key={item+i}>
              <a href={item.link}><P color={`#fff`} mb={1} className="para">{item.name}</P></a>
            </li>
          )}
        </ul>
    </Row>
  </Layout>
  )
}
