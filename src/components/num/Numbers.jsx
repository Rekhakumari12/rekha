import React from 'react'
import {P, H1} from '../Common.style.jsx'
import { Col, Row } from 'react-bootstrap'
import { Layout } from './Number.style'
import { CountUp } from 'use-count-up'
export default function Numbers() {
  return (
    <Layout>
      <hr/>
      <Row>
        <Col md={3} sm={12}>
          <div className="center">
            <H1 size={40} color={"#009ca8"} weight={800}>
              <CountUp isCounting end={123456} duration={3.2} />
            </H1>
            <P>lines of code</P>
          </div>
        </Col>
        <Col md={3} sm={12}>
          <div className="center">
            <H1 size={40} color={"#009ca8"} weight={800}>
              <CountUp isCounting end={160000} duration={3.2} />
            </H1>
            <P>pixels rendered</P>
          </div>
        </Col>
        <Col md={3} sm={12}>
          <div className="center">
            <H1 size={40} color={"#009ca8"} weight={800}>
              <CountUp isCounting end={1512} duration={3.2} />
            </H1>
            <P>pixels rendered</P>
          </div>
          </Col>
        <Col md={3} sm={12}>
          <div className="center">
            <H1 size={40} color={"#009ca8"} weight={800}>
              <CountUp isCounting end={15} duration={3.2} />
            </H1>
            <P>projects completed</P>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}
