import React from 'react'
import ProductGrid from './varietysection'
import Footer from '../component/footer'
// import Upperheader from '../component/header'
import Header from '../component/Upperheader'
import Shop from './picture'

const page = () => {
  return (
    <div>
      <Header/>
      <Shop/>
      <Footer/>
      <ProductGrid/>
    </div>
  )
}

export default page