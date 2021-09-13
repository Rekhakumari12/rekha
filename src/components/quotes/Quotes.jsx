/* eslint-disable array-callback-return */
import React from 'react'
import { H1} from '../Common.style'
import steveJobs from '../../images/steve-jobs.jpeg'
import billGates from '../../images/bill-gates.jpeg'
import larryPage from '../../images/larry-page.jpeg'
import sunderpichai from '../../images/sundarp.jpeg'
import AliceCarousel from 'react-alice-carousel';
import { Layout } from './Quotes.style'
import Quote from './Quote'
const quotes = [
  {
    img:steveJobs,
    q:"Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful, that’s what matters to me." ,
    a:"Steve Jobs"
  },
  {
    img:billGates,
    q:"It's fine to celebrate success but it is more important to heed the lessons of failure.", 
    a:"Bill Gates"
  },
  {
    img:larryPage,
    q:"Anything you can imagine probably is doable, you just have to imagine it and work on it.",
    a:"Larry Page"
  },
  {
    img:sunderpichai,
    q:"Let yourself feel insecure from time, It will help you grow as an individual.",
    a:"Sundar Pichai"
  }
]
const items=[
  <Quote item={quotes[0]}/>,
  <Quote item={quotes[1]}/>,
  <Quote item={quotes[2]}/>,
  <Quote item={quotes[3]}/>,
]

export default function Quotes() {
  return (
    <Layout id="quote">
      <center><H1 size={50} color={`#fff`}>Inspiring Quotes.</H1></center>
        <AliceCarousel
          autoPlay
          infinite
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          mouseTracking
          items={items}
        />
    </Layout>
  )
}
