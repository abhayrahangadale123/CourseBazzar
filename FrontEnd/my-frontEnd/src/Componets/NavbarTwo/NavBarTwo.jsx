import React from 'react'
import { Link } from 'react-router-dom'

const NavBarTwo = () => {
  return (
    <>
       
      <nav className="  flex  justify-center md:gap-80  p-3  text-sm text-[#595858] mt-[-32px] shadow-xl">
        <div className="flex gap-10 mr-10 cursor-pointer ">
          <Link to="/Development">
            <p>Development</p>
          </Link>
          <Link to="/Business">
            <p>Business</p>
          </Link>
          <Link to="/Finace">
            <p>Finace & Accounting</p>
          </Link>
          <Link to="/IT_Software">
            <p>IT & Software</p>
          </Link>
          <Link to="/Productivity">
            <p>Office Productivity</p>
          </Link>
          <Link to="/Personal_Development">
            <p>Personal Development</p>
          </Link>
        
          <p>Design</p>
          <p>Marketig</p>
          <p>Health & Fitness</p>
          <p>Music</p>
         
        </div>
        
      </nav>

    </>
  )
}

export default NavBarTwo