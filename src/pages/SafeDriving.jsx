import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const SafeDriving = () => {
  return (
    <div className='font-Poppins'>
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className='text-6xl font-bold'>Safe Driving</h1>
        <h6 className='text-sadd-grey'>By NHS SADD</h6>
        <hr className='divide-sadd-blue'></hr>
        <div className='flex flex-col gap-10 text-lg mx-5'>
          <h3 className='text-3xl text-sadd-blue font-bold'>The Test</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic quis, eaque autem eum illum excepturi earum iusto. Commodi cum mollitia quia, magni repellendus optio error possimus voluptatem aliquid magnam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic quis, eaque autem eum illum excepturi earum iusto. Commodi cum mollitia quia, magni repellendus optio error possimus voluptatem aliquid magnam.</p>
          <h3 className='text-3xl text-sadd-blue font-bold'>The Stories</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic quis, eaque autem eum illum excepturi earum iusto. Commodi cum mollitia quia, magni repellendus optio error possimus voluptatem aliquid magnam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic quis, eaque autem eum illum excepturi earum iusto. Commodi cum mollitia quia, magni repellendus optio error possimus voluptatem aliquid magnam.</p>
          <h3 className='text-3xl text-sadd-blue font-bold'>What You Can Do</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic quis, eaque autem eum illum excepturi earum iusto. Commodi cum mollitia quia, magni repellendus optio error possimus voluptatem aliquid magnam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic quis, eaque autem eum illum excepturi earum iusto. Commodi cum mollitia quia, magni repellendus optio error possimus voluptatem aliquid magnam.</p>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default SafeDriving