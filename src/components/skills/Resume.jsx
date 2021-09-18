import React from 'react'
import { H1 } from '../Common.style'
export default function Resume() {
  return (
   <div className="resume">
      <center><H1 className="mb-4" size={32} weight={600}>Download my Resume</H1>
        <a href={"https://drive.google.com/file/d/1VGUkplvPrV9ES4fgdR50gfJY1oXnDbRV/view?usp=sharing"}><i className="fas fa-cloud-download-alt"></i></a>
      </center>
    </div>
  )
}
