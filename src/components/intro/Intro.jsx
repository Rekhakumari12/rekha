/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Layout } from './intro.style'
import { Typewriter } from 'react-simple-typewriter'
import { NameStyle } from './intro.style'
export default function Intro() {
  return (
    <Layout>
      <h1>
        <NameStyle className="span-title">Rekha Kumari</NameStyle>
        <br />
        <span>I Like </span>
        <Typewriter
            words={['Coding.','Frontend Development.','Problem Solving.', 'Photography.', 'Books.']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </h1>
    </Layout>
  )
}
