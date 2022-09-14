import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SafeDriving = () => {
  return (
    <div className='font-Poppins'>
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className='text-6xl font-bold'>Safe Driving</h1>
        <h6 className='text-sadd-grey'>By HJSHS SADD, <Link to="/sources" className='underline' >Sources</Link></h6>
        <hr className='divide-sadd-blue'></hr>
        <div className='flex flex-col gap-10 text-lg mx-5'>
          <h3 className='text-3xl text-sadd-blue font-bold'>The statistics</h3>
          <p>Car crashes are a leading cause of death for teens, and about a quarter 
            of those crashes involve an underage drinking driver. In 2019, 24% of 
            young drivers 15 to 20 years old who were killed in crashes had BACs 
            of .01 g/dL or higher. To reduce alcohol-related fatal crashes among 
            youth, all states have adopted a minimum legal drinking age of 21. 
            NHTSA estimates that minimum-drinking-age laws have saved 31,959 
            lives from 1975 to 2017.</p>
          <p>Yet in 2019 the highest percentage of drunk drivers 
            (with BACs of .08 g/dL or higher) were 21- to 24-year-olds, at 27%, 
            followed by 25- to 34-year-olds, at 25%. Men are most likely to be 
            involved in this type of crash, with 4 male drunk drivers for every 
            female drunk driver.</p>

          <h3 className='text-3xl text-sadd-blue font-bold'>The stories</h3>
          <p>Unsafe driving caused accidents can happen to anyone, even you. Don't believe that
            you are any different than the victims you hear in the stories. This could all happen 
            to you if you do not drive appropriately. You can read about the true stories of 
            victims <a className='underline text-sadd-blue' target="_blank" href='https://www.madd.org/category/victim-stories'>here</a>.
          </p>

          <h3 className='text-3xl text-sadd-blue font-bold'>What you can do</h3>
          <p>There are plenty of ways to prevent unsafe driving accidents. Stay focused. Driving is 
            primarly a thinking task, and you have a lot of things to think about when you're behind 
            wheel. Stay alert. Being alert allows you to react quickly to potential problems -- like 
            when the driver in the car ahead slams on the breaks at the last minute. You can find more
            information on how to drive safely <a className='underline text-sadd-blue' target="_blank" href='https://kidshealth.org/en/teens/driving-safety.html'>here</a>
          </p>
          <p>If you plan to celebrate after the prom (or any event), have designated driver(s) to 
            get your guests and you home safely. Have someone who is tough and reliable collect keys.
            Do NOT let ANYONE drive who has taken any substances. It is NOT okay for them to drive, 
            offer them a place to stay, so they can sleep it off. Remember, you matter. Respect yourself 
            and others. Be safe, responsible, and make good decisions.
          </p>

        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default SafeDriving