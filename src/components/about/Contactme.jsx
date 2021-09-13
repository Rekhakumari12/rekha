import React from 'react'
import IconLink from './Link'
import { Col,Row } from 'react-bootstrap'
export default function Contactme() {
  return (
    <Row>
      <Col>
        <IconLink path={"https://github.com/Rekhakumari12"} iconClass={"fab fa-github-square"} />
      </Col>
      <Col>
        <IconLink path={`https://www.linkedin.com/in/rekhakumari12/`} iconClass={"fab fa-linkedin"} />
      </Col>
      <Col>
        <IconLink path={"#"} iconClass={"far fa-envelope"} />
      </Col>
    </Row>
  )
}
