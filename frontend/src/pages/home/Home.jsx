import React from 'react'

import Hero from './Hero';
import Popularcategory from './Popularcategory';
import Services from '../publicPages/service/Services';
import Testimolas from './../publicPages/testimonals/Testimolas';
import FAQ from './../publicPages/faq/FAQ';
import Contact from './Contact';


function Home() {
  return (
    <>

    <Hero />
    <Popularcategory />
    <Services />
    <FAQ />
    <Testimolas />
    <Contact />
    </>
  )
}

export default Home