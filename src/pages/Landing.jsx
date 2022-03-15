import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <body className="App font-Poppins overflow-x-hidden">

      {/* Header */}
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20">
          
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Safe Driving Campaign
            </h2>
            <p className="text-sadd-grey text-lg text-center lg:text-left mb-6">
              Motor vehicle crashes are the second leading cause of death for U.S. teens. Our goal is to motivate students to drive safely, and educate them how to effectively.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link to="/" className="btn btn-purple hover:bg-sadd-white hover:text-black">Our Mission</Link>
              <Link to="/safe-driving" className="btn btn-white hover:bg-sadd-blue hover:text-white">Learn More</Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="lg:w-full h-full sm:w-3/4 sm:h-3/4 md:w-3/5 md:h-3/5" src="../../images/sign.png" alt="" />
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden md:block overflow-hidden bg-sadd-blue rounded-l-full absolute md:h-60 lg:h-80 h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </body>
  )
}

export default Landing