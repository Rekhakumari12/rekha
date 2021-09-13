import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import About from './components/about/About'
import Numbers from './components/num/Numbers';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills'
import Quotes from './components/quotes/Quotes';
import Coffeewithme from './components/contact/Coffeewithme';
import Contact from './components/contact/Contact';
function App() {

  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Numbers/>
      <Projects/>
      <Skills/>
      <Quotes/>
      <Coffeewithme/>
      <Contact/>
    </div>
  );
}

export default App;
