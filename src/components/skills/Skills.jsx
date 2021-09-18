/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Layout} from './Skill.style'
import { Image } from 'react-bootstrap'
import { P } from '../Common.style'
import { HR } from '../Common.style'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import style_component from '../../images/style_component.png'
import uiux from '../../images/uiux.svg'
import { H1, Mt } from '../Common.style'
// import Resume from './Resume'
export default function Skills() {
  return (
    <Layout id="skills">
      <Mt space={50}/>
      <center><H1 size={50}>Skills.</H1></center>
      <div className="logo">
        <div>
          <H1 className="mb-3" weight={800} size={25} color={`#59AFC6`}>Present</H1>
          <div className="present">
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-redux-original colored"></i>
            <i className="devicon-git-plain colored"></i>
            <LazyLoadImage effect="blur" src={style_component} style={{backgroundColor:"#3d3d3d"}} width="70"/>
          </div>
        </div>
        <HR/>
        <div>
          <H1 className="mb-3" weight={800} size={25} color={`#7FDA57`}>Past</H1>
          <div className="past">
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <LazyLoadImage effect="blur" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"} width="70"/>
            <i className="devicon-java-plain-wordmark colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-express-original-wordmark colored"></i>
          </div>
        </div>
        <HR/>
        <div className="img3">
          <H1 className="mb-3" weight={800} size={25} color={`#FF5756`}>Interest</H1>
          <div className="interest">
            <i className="devicon-sass-original colored"></i>
            <LazyLoadImage effect="blur" mb={1} src={"https://upload.wikimedia.org/wikipedia/commons/1/1f/PWA_logo.svg"} width="70"/>
            <LazyLoadImage effect="blur" mb={1} src={uiux} width="80" style={{color:"pink"}}/>
          </div>
        </div>
        <HR/>
      </div>
      {/* <Resume/> */}
    </Layout>
  )
}
