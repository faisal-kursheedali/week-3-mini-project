import React from 'react'
import{Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <ul className="nav-list">
         <Link to="/" className='nav-link'><li className="nav-item">Home</li></Link>
         <Link to="/question" className='nav-link'><li className="nav-item">Questions</li></Link>
        </ul>
      </div>
    </>
  )
}

export default Nav