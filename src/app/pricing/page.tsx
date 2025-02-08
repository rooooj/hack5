import React from 'react'
import Pricing from './pricing'
import PricingFAQs from './Faq'
import Header from '../component/Upperheader'
import Footer from '../component/footer'

const page = () => {
  return (
    <div>
      <Header/>
        <Pricing/>
        <PricingFAQs/>
        <Footer/>
    </div>
  )
}

export default page