function App() {
  return (
    <body className="App font-Poppins overflow-x-hidden">

      {/* Header */}
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1"><img className="w-1/6 h-1/6" src="./images/sadd-trans.png" alt="logo" /></div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer">Club</li>
            <li className="cursor-pointer">Initiatives</li>
            <li className="cursor-pointer">Safe Driving</li>
            <button type="button" className="bg-sadd-blue text-white rounded-md px-7 py-3 uppercase">Contact</button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <i className="fas fa-bars text-xl"></i>
          </div>
        </nav>
      </header>

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
              <button type="button" className="btn btn-purple hover:bg-sadd-white hover:text-black">Our Mission</button>
              <button type="button" className="btn btn-white hover:bg-sadd-blue hover:text-white">Learn More</button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="lg:w-full h-full sm:w-3/4 sm:h-3/4 md:w-3/5 md:h-3/5" src="./images/sign.png" alt="" />
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden md:block overflow-hidden bg-sadd-blue rounded-l-full absolute md:h-60 lg:h-80 h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-24 w-full">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <ul className="flex text-sadd-blue uppercase gap-12 text-xs">
              <li className="cursor-pointer">Club</li>
              <li className="cursor-pointer">Initiatives</li>
              <li className="cursor-pointer">Safe Driving</li>
            </ul>
          </div>
          <ul className="flex gap-10 mt-12 md:mt-0">
            <li className=""><i className="text-sadd-blue text-3xl fab fa-twitter"></i></li>
            <li><i className="text-sadd-blue text-3xl fab fa-facebook-square"></i></li>
          </ul>
        </div>
      </footer>

    </body>
  )
}

export default App
