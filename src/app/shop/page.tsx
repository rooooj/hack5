import React from 'react'
import HomePage from './pic'

import Footer from '../component/footer'
import MeetOurTeam from './home'
import Header from '../component/Upperheader'

const page = () => {
  return (
    <div>
        <Header/>
        <HomePage/>
        <MeetOurTeam/>
        <Footer/>
    </div>
  )
}

export default page