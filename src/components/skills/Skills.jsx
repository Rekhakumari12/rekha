/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Layout} from './Skill.style'
import { Image } from 'react-bootstrap'
import interest from '../../images/Interest.png'
import core from '../../images/Core.png'
import learning from '../../images/Learning.png'
import { H1, Mt } from '../Common.style'

export default function Skills() {
  return (
    <Layout id="skills">
      <Mt space={50}/>
      <center><H1 size={50}>Skills.</H1></center>
      <div className="logo">
        <div>
          <center><H1 className="mb-3" weight={800} size={25} color={`#59AFC6`}>Core</H1></center>
          <Image src={core} width="200"/>
        </div>
        <div>
          <center><H1 className="mb-3" weight={800} size={25} color={`#7FDA57`}>Interest</H1></center>
          <Image src={interest} width="200"/>
        </div>
        <div className="img3">
          <center><H1 className="mb-3" weight={800} size={25} color={`#FF5756`}>Learing</H1></center>
          <Image src={learning} width="200"/>
        </div>
      </div>
      <div className="resume">
        <center><H1 className="mb-4" size={32} >Download my Resume</H1>
          <a href={"https://drive.google.com/file/d/1VGUkplvPrV9ES4fgdR50gfJY1oXnDbRV/view?usp=sharing"}><i className="fas fa-cloud-download-alt"></i></a>
        </center>
      </div>
    </Layout>
  )
}
