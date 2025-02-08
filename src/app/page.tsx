import React from 'react'
import Header from './component/Upperheader'
// import Upperheader from './component/header'
// import Picture from './component/HappyCustomer'
import Footer from './component/footer'

import DressStyle from './component/DressStyle'
import FeaturedPosts from './component/herosection'
// import NeuralUniverse from './component/NewArrivals'
import HeroBanner from './component/heros'
import HeroSections from './component/fonts'
import LargePicDiv from './component/HappyCustomer'

// import HeroSec from './component/heros'

const Home= () => {
  return (
    <div>
      <Header/>
      
      {/* <HeroSec/> */}
      <HeroBanner/>
      
      
      <LargePicDiv/>
      <DressStyle/>
      <HeroSections/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  )
}

export default Home