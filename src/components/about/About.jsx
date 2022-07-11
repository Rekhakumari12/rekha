import React from 'react'
import { Mt, H1, P } from '../Common.style.jsx'
import { Layout } from './About.style'
import { Row, Col, Container } from 'react-bootstrap'
import mypic from '../../images/mypic.jpeg'
import Contactme from './Contactme.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function About() {
	const today = new Date()
	const dob = new Date('2000-05-12')
	let age = today.getFullYear() - dob.getFullYear()
	let m = today.getMonth() - dob.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
		age--;
	}
	return (
		<Layout id="about">
			<Container>
				<Row>
					<Col md={4} sm={12} className="leftside">
						<Mt space={60} />
						<LazyLoadImage effect="blur" src={mypic} alt={"myImage"} />
						<Mt space={10} />
						<Contactme />
					</Col>
					<Col md={8} sm={12} className="rightside">
						<Mt space={60} />
						<H1 size={60}>About me.</H1>
						<P color={`var(--para-color)`}>Hi I am <a href='https://www.linkedin.com/in/rekhakumari12' target="_blank" rel="noreferrer">Rekha Kumari</a>, a 22 year old Frontend Engineer, Web Developer living in <a href='https://www.google.co.in/maps/place/Punjab/@31.0131859,74.2799303,8z/data=!3m1!4b1!4m5!3m4!1s0x391964aa569e7355:0x8fbd263103a38861!8m2!3d31.1471305!4d75.3412179?hl=en' target="_blank" rel="noreferrer">Punjab</a>, India. I graduated with Computer Application, currently working with awesome folks at <a href="https://medly.com/en-us" target="_blank" rel="noreferrer">Medly</a>.</P>

						<P color={`var(--para-color)`}>Have a look at my skills or just connect with me on <a href='https://www.linkedin.com/in/rekhakumari12/' target="_blank" rel="noreferrer">LinkedIn</a>. I am always excited to do business with like minded people, lets discuss over coffee.</P>

						<P color={`var(--para-color)`}>Apart from these, I am fun loving girl who loves to discover something new everyday. I love to visit new places. Photography, Listening to music and audio books are some of my other hobbies. :)</P>
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}
