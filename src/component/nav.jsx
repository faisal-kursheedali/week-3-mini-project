import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { BsGithub, BsFillLightbulbFill,BsMoonStarsFill,BsFillSunFill } from "react-icons/bs"

const Nav = () => {
  const [darkmode,setDarkmode]=useState(false);
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <Link to="/" className='nav-link'>
            <BsFillLightbulbFill />
          </Link>
        </div>
        <ul className="nav-list">
          <Link to="/" className='nav-link'><li className="nav-item">Home</li></Link>
          <Link to="/question" className='nav-link'><li className="nav-item">Questions</li></Link>
          <li className="nav-item"><a href="https://github.com/faisal-kursheedali/week-3-mini-project" className='nav-link'><BsGithub /></a></li>

          {
            darkmode?<li className="nav-item" onClick={()=>{
              setDarkmode(false)
              document.body.style.backgroundColor=`var(--white-bg)`
              document.body.style.color=`var(--dark-txt)`
            }}>< BsFillSunFill style={{color:"orange"}}/></li>:<li className="nav-item" onClick={()=>{
              setDarkmode(true)
              document.body.style.backgroundColor=`var(--dark-bg)`
              document.body.style.color=`var(--white-txt)`
              
            }}>< BsMoonStarsFill /></li>
          }
          
        </ul>
      </div>
    </>
  )
}

export default Nav