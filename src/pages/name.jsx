import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Name = () => {
    const [name,setName]=useState("")
    const location = useLocation()
    const {item,index}=location.state;
  return (
    <>
        <div className="header">
            <img src="" alt="" className="header-image" />
            <div className="header-text">
                Are you ready
                <div className="header-sub-txt">Don't copy 🤫</div>
            </div>
            <input type="text" className="input-md header-input" value={name} onChange={(e)=>{
                setName(e.target.value);
            }} placeholder="Enter Your name" />
            {
                name!==""?(
                    <Link to={{
                        pathname:`/question:${index}`,
                        state:{
                            item:item,
                            name:name
                        }
                    }} className='link-nostyle'>
                        <button className="btn-fancy header-btn">Start</button>
                    </Link>
                ):(
                    <button className="btn btn-sec header-btn">Start</button>
                )
            }
            
        </div>
    </>
  )
}

export default Name