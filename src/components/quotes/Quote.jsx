import React from 'react'
import { Image } from 'react-bootstrap'
import { P } from '../Common.style'
export default function Quote({item}) {
  return (
    <div className="quote">
      <Image src={item.img} roundedCircle width={item.a==="Sundar Pichai"?"170px":null}/>
      <P color={`#fff`} family={`serif`} size={35} style={{ fontStyle: `italic` }} className="pt-5">{item.q}</P>
      <span>by <b>{item.a}</b></span>
    </div>
  )
}
