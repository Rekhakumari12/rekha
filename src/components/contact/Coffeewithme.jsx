import React from 'react'
import Contactme from '../about/Contactme'
import { H1, P } from '../Common.style'
import { Layout } from './Contact.style'
export default function Coffeewithme() {
  return (
    <Layout id="coffeewithme">
      <H1 size={50}>Coffee with me.</H1>
      <P color={`var(--para-color)`}>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</P>
      <div>
        <P size={30} color={`var(--para-color)`}>Let's work together...</P>
        <div className="contact">
          <Contactme/>
        </div>
      </div>
    </Layout>
  )
}
