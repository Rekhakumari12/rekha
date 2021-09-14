import React from 'react'
import IconLink from './Link'
import { Col,Row } from 'react-bootstrap'
export default function Contactme() {
  return (
    <Row>
      <Col>
        <IconLink path={"https://github.com/Rekhakumari12"} iconClass={"devicon-github-original colored"} />
      </Col>
      <Col>
        <IconLink path={`https://www.linkedin.com/in/rekhakumari12/`} iconClass={"devicon-linkedin-plain colored"} />
      </Col>
      <Col>
        <IconLink path={"rekhakumari44400@gmail.com"} iconClass={"far fa-envelope"} />
      </Col>
    </Row>
  )
}
