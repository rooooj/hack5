import React from 'react'
import ProductPage from './hjome'
import AdditionalInfo from './file'
// import AboutUs from './about us'
import BestsellerProducts from './pink'
import Header from '../component/Upperheader'
import Footer from '../component/footer'

const Home = () => {
  return (
    <div>
      <Header/>
        <ProductPage/>
        <AdditionalInfo/>
        <BestsellerProducts/>
        <Footer/>
        
    </div>
  )
}

export default Home