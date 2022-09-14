import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Initiatives = () => {
  return (
    <div className='font-Poppins'>
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className='text-6xl font-bold'>Our Initiatives</h1>
        <h6 className='text-sadd-grey'>By HJSHS SADD, <Link to="/sources" className='underline' >Sources</Link></h6>
        <hr className='divide-sadd-blue'></hr>
        <div className='flex flex-col gap-10 text-lg mx-5'>
          <h3 className='text-3xl text-sadd-blue font-bold'>Safe driving</h3>
          <p>Your teen sees a driver's license as a step toward freedom, but you 
            might not be sure your teen is ready for the road. One thing is certain: 
            teens aren't ready to have the same level of driving responsibility as 
            adults. Teen drivers have a higher rate of fatal crashes, mainly because 
            of their immaturity, lack of skills, and lack of experience. They speed, 
            they make mistakes, and they get distracted easily – especially if their 
            friends are in the car. To help your teen stay safe behind the wheel, all 
            50 states and the District of Columbia have a three-stage graduated driver 
            licensing (GDL) system that limits high-risk driving situations for new 
            drivers. This approach can reduce your teen's crash risk by as much as 50%. </p>
          <p>Educate yourself about the consequences of illegal alcohol use by minors, 
            the benefits of seat belt use, the growing epidemic of distracted driving, 
            and much more. </p>

          <p>To learn more about NHS SADD's safe driving initiative, visit the safe  
            driving passport <a className='underline text-sadd-blue' target="_blank" href='https://www.sadd.org/passporttosafedriving'>here</a>.</p>

          <h3 className='text-3xl text-sadd-blue font-bold'>Mental health</h3>
          <p>The importance of mental health, especially in teenagers, cannot be overstated. 
            Being a teenager is hard. You're under stress to be liked, do well in school, 
            get along with your family, and make big decisions. You can't avoid most of 
            these pressures, and worrying about them is normal. But feeling very sad, 
            hopeless or worthless could be warning signs of a mental health problem.</p>
          <p>Mental health problems can be treated. To find help, talk to your parents, 
            school counselor, or health care provider. To learn more about teen's mental heatlh,
            visit <a className='underline text-sadd-blue' target="_blank" href='https://medlineplus.gov/teenmentalhealth.html'>here</a>.</p>
          
          <h3 className='text-3xl text-sadd-blue font-bold'>Safe & healthy relationships</h3>
          <p>Healthy relationships consist of trust, honesty, respect, equality, and compromise.
            Unfortunately, teen dating violence — the type of intimate partner violence that 
            occurs between two young people who are, or who were once in, an intimate relationship 
            — is a serious problem in the United States. A national survey found that ten percent 
            of teens, female and male, had been the victims of physical dating violence within 
            the past year and approximately 29 percent of adolescents reported being verbally 
            or psychologically abused within the previous year.</p>
          <p>Teen dating violence can be prevented, especially when there is a focus on reducing 
            risk factors as well as fostering protective factors, and when teens are empowered 
            through family, friends, and others (including role models such as teachers, coaches, 
            mentors, and youth group leaders) to lead healthy lives and establish healthy 
            relationships. It is important to create spaces, such as school communities, 
            where the behavioral norms are not tolerant of abuse in dating relationships. 
            The message must be clear that treating people in abusive ways will not be accepted, 
            and policies must enforce this message to keep students safe.</p>
          <p>To learn more about dating violence prevention, visit <a className='underline text-sadd-blue' target="_blank" href='https://www.new-hope.org/'>here</a>.
          </p>
          
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Initiatives