import React from 'react'
import AboutUs from './Aboutus'
import MeetOurTeam from './video'
import Footer from '../component/footer'

import Picture from './picture'
import Header from '../component/Upperheader'

const About= () => {
  return (
    <div>
       <Header/>
        <AboutUs/>
        <MeetOurTeam/>
        <Picture/>
        <Footer/>
    </div>
  )
}

export default About