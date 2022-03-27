import React from 'react'
import IconLink from './Link'
import { Col, Row } from 'react-bootstrap'
export default function Contactme() {
	const socialLinks = [
		{
			path: "https://github.com/Rekhakumari12",
			iconClass: "devicon-github-original colored"
		},
		{
			path: "https://www.linkedin.com/in/rekhakumari12",
			iconClass: "devicon-linkedin-plain colored"
		},
		{
			path: "rekhakumari44400@gmail.com",
			iconClass: "far fa-envelope"
		},
	]
	return (
		<Row>
			{socialLinks?.map(({ path, iconClass }) => {
				return <Col>
					<IconLink path={path} iconClass={iconClass} />
				</Col>
			})}
		</Row>
	)
}
