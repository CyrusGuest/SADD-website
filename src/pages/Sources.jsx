import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Sources = () => {
  return (
    <div className='font-Poppins'>
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className='text-6xl font-bold'>Northbridge Chapter of SADD</h1>
        <h6 className='text-sadd-grey'>By NHS SADD, <Link to="/sources" className='underline' >Sources</Link></h6>
        <hr className='divide-sadd-blue'></hr>
        <div className='flex flex-col gap-10 text-lg mx-5'>
          <h3 className='text-3xl text-sadd-blue font-bold'>Sources</h3>

          <p><i>SADD</i> | <i>Student Organization</i> | <i>Washington, DC</i>, http://sadd.org. Accessed 24 April 2022.</p>

          <p>“Dating Violence Prevention.” <i>Youth.gov</i>, https://youth.gov/youth-topics/teen-dating-violence. Accessed 24 April 2022.</p>

          <p>“Teen Mental Health.” <i>MedlinePlus</i>, https://medlineplus.gov/teenmentalhealth.html. Accessed 24 April 2022.</p>

          <p>“Teen Safe Driving: How Teens Can Be Safer Drivers.” <i>NHTSA</i>, https://www.nhtsa.gov/road-safety/teen-driving. Accessed 24 April 2022.</p>

          <p>“Victim Stories Archives | MADD.” <i>Mothers Against Drunk Driving</i>, https://www.madd.org/category/victim-stories. Accessed 24 April 2022.</p>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Sources