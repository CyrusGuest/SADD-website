import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-8 mt-24 w-full">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <ul className="flex text-sadd-blue uppercase gap-12 text-xs">
            <Link to="/club" className="cursor-pointer">Club</Link>
            <Link to="/initiatives" className="cursor-pointer">Initiatives</Link>
            <Link to="/safe-driving" className="cursor-pointer">Safe Driving</Link>
          </ul>
        </div>
        <ul className="flex gap-10 mt-12 md:mt-0">
          <a href="https://twitter.com/SADDnation?s=20" target="_blank" ><li className=""><i className="text-sadd-blue text-3xl fab fa-twitter"></i></li></a>
          <a href="https://www.facebook.com/saddnation/" target="_blank" ><li><i className="text-sadd-blue text-3xl fab fa-facebook-square"></i></li></a>
          <a href="https://www.instagram.com/saddnation/" target="_blank" ><li><i className="text-sadd-blue text-3xl fab fa-instagram"></i></li></a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer