import React, { Fragment } from 'react'
import './App.css'
import Home from './layouts/home/Home'
import Header from './layouts/header/Header'
import SocialMedias from './layouts/socialMedias/SocialMedias'
import ContactRight from './layouts/contactRight/ContactRight'
import About from './layouts/about/About'
import Services from './layouts/services/Services'
import Portfolio from './layouts/portfolio/Portfolio'
import Contact from './layouts/contact/Contact'
import Footer from './layouts/footer/Footer'
import Experiences from './layouts/experiences/Experiences'

const App = () => {
  return (
    <Fragment>
      <Header />
      <SocialMedias />
      <div className='content'>
        <Home />
        <About />
        <Services />
        <Experiences />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <ContactRight />
    </Fragment>
  )
}

export default App
