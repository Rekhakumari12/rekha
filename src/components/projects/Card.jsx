import React from 'react'
import {Card,Col} from 'react-bootstrap'
export default function CardComponent({image, title, text}) {
  return (
    <Col className="cardWrapper">
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={image} width='400'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  )
}
