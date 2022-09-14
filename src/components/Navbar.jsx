import React, { useState } from 'react'
import TransparentLogo from '../../images/sadd-trans.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
          <Link className='flex items-center' to="/">
            <img className="w-1/6 h-1/6" src={TransparentLogo} alt="logo" />
            <p className='text-2xl px-3 text-sadd-grey'>HJSHS Chapter</p>
          </Link>
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <Link to="/club" className="cursor-pointer">Club</Link>
          <Link to="/initiatives" className="cursor-pointer">Initiatives</Link>
          <Link to="/safe-driving" className="cursor-pointer">Safe Driving</Link>
          <a href="mailto:afinkel@nps.org"><button type="button" className="bg-sadd-blue text-white rounded-md px-7 py-3 uppercase">Contact</button></a>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <i onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="fas fa-bars text-xl"></i>
          {mobileMenuOpen ? 
          
          <aside onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="fixed z-20 w-full h-full bg-sadd-blue grid items-center top-0 left-0 transition-opacity duration-1000 ease-out opacity-100"  >
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="absolute top-5 right-6 bg-transparent text-3xl pointer outline-none">
              <i className="text-white fas fa-times text-3xl my-6"></i>
            </div>
            <div className="">
              <ul className="grid text-center grid-cols-1 grid-rows-6">
                <Link className="transition-all my-4 flex items-center justify-center text-2xl no-underline text-white cursor-pointer list-none ease-in-out duration-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} to="/">Home</Link>
                <Link className="transition-all flex items-center justify-center text-2xl no-underline text-white cursor-pointer list-none ease-in-out duration-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} to="/club">Club</Link>
                <Link className="transition-all flex items-center justify-center text-2xl no-underline text-white cursor-pointer list-none ease-in-out duration-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} to="/initiatives">Initiatives</Link>
                <Link className="transition-all flex items-center justify-center text-2xl no-underline text-white cursor-pointer list-none ease-in-out duration-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} to="/safe-driving">Safe Driving</Link>
              </ul>
            </div>
          </aside>

          : ""
          }
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar