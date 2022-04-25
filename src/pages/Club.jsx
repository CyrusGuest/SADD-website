import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Club = () => {
  return (
    <div className='font-Poppins'>
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className='text-6xl font-bold'>Northbridge Chapter of SADD</h1>
        <h6 className='text-sadd-grey'>By NHS SADD, <Link to="/sources" className='underline' >Sources</Link></h6>
        <hr className='divide-sadd-blue'></hr>
        <div className='flex flex-col gap-10 text-lg mx-5'>
          <h3 className='text-3xl text-sadd-blue font-bold'>What is SADD?</h3>
          <p>“Students Against Destructive Decisions” is a national non-profit dedicated to 
            the safety and wellness of all students. Using 40 years of expertise to facilitate 
            educational and engaging programming, SADD operates through school and community 
            chapters (like student clubs) dedicated to advocating healthy decision-making. </p>
          <p>SADD was founded on the simple philosophy that young people, empowered to help 
            each other, are the most effective force in prevention. </p>

          <h3 className='text-3xl text-sadd-blue font-bold'>Our mission</h3>
          <p>SADD empowers and mobilizes students and adult allies to engage in positive change 
            through leadership and smart decision-making. </p>
          <p>Our mission is accomplished by creating, equipping, and sustaining a network of 
            student-run chapters in schools and communities focused on peer-to-peer education. 
            SADD fosters a sense of belonging and promotes resiliency, leadership, and advocacy 
            skills so that young people make positive life decisions that will carry them throughout life. </p>

          <h3 className='text-3xl text-sadd-blue font-bold'>How you can be a part of it</h3>
          <p>As a parent and/or adult ally, you play a large role in the health and safety of 
            the youth in your life. Be proactive by getting involved and using the resources 
            below to facilitate meaningful dialogue with your student. </p>
          <p>As an NHS student, you can join SADD by contacing Mr. Finkel either in person or at his email
            address, afinkel@nps.org. </p>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Club