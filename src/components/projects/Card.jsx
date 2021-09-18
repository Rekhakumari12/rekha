/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card,Col} from 'react-bootstrap'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { P } from '../Common.style';
export default function CardComponent({image, title, text,link, tech,info}) {
  return (
    
      
        <Col className="cardWrapper">
          <Card style={{ width: '28rem' }}>
            <flip-card variant="hover" class="trivia-card">
              <div slot="front">
                <LazyLoadImage effect="blur" variant="top" src={image} width='400' placeholderSrc={process.env.PUBLIC_URL+'/logo192.png'}/>
              </div>
              <div slot="back" className="back">
                <P size={15} mb={1}>{tech}</P>
                <ul>
                {info && info.map((item,i)=><li key={item+i}>{item}</li>)}
                </ul>
              </div>
            </flip-card>
            <Card.Body>
              <Card.Title><P><a href={link}>{title}</a></P></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      
    
  )
}
