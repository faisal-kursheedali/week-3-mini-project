import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Topper = () => {
    const location = useLocation()
    const {name,score,total}=location.state;
  return (
    <>
        <div className="header">
            <div className="header-text">
                heyy <span className="cta1">{name}</span>
                <div className="header-sub-txt">
                Your score is <span className="cta1">{score}</span>/{total}
            </div>
            </div>
            
        </div>
    </>
  )
}

export default Topper