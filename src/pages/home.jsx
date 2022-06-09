import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
  return (
    <>
    
    <div className="header">
    <img src="https://build-ui.netlify.app/static/media/home-header-img.701e08ed7764a3d20dfc.png" alt=""  className='header-img'/>
      <div className="header-text">
        Think Deep
        <div className="header-sub-txt">Test you'r brain today.</div>
        <Link to="/question" className="link-nostyle"><button className="btn-fancy">START </button></Link>
      </div>
    </div>
    <div className="txt-box">
    <div className="head3">Note : </div>
    <div className="p2">Before starting this enter your name</div>
    <div className="p3"> then You have  to choose any one topic and give your answer.</div>
    <Link to="/question" className="link-nostyle"><button className="btn-fancy">START </button></Link>
    <div className="head3 txt-center">All the best</div>
    </div>
    </>
  )
}


export default withRouter(Home)