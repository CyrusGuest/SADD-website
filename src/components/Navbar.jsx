import React from 'react'
import TransparentLogo from '../../images/sadd-trans.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1"><Link to="/"><img className="w-1/6 h-1/6" src={TransparentLogo} alt="logo" /></Link></div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <Link to="/club" className="cursor-pointer">Club</Link>
          <Link to="/initiatives" className="cursor-pointer">Initiatives</Link>
          <Link to="/safe-driving" className="cursor-pointer">Safe Driving</Link>
          <button type="button" className="bg-sadd-blue text-white rounded-md px-7 py-3 uppercase">Contact</button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <i className="fas fa-bars text-xl"></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar