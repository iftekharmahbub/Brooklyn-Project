import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Banner from './components/Banner'
import Work_Progress from './components/Work_Progress'
import Portfolio from './components/Portfolio'
import Project from './components/Project'
import Blog from './components/Blog'
import ToDo from './components/ToDo'
import Client from './components/Client'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Profile />
      <Work_Progress />
      <Portfolio />
      <Project />
      <Blog />
      <ToDo />
      <Client />
      <Testimonial />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
