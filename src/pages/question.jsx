import React from 'react'
import QuestionBox from "../component/question"
import data from "../component/data"
import { Link } from 'react-router-dom'
import "./css/question.css"
const Question = () => {
console.log(data);
  return (
    <>

    <div className="question-bank-display">
      <section className="q-card-container  pad-1">
        {data.map((i,index) => {
          console.log(i.data)
          return (
            <>
            <Link to={{
              pathname:`/name`,
              state:{
                item:i.data,
                index:index
              }
            }} className="link-nostyle">
              <div className="q-card-sm" >
                <img src={i.image} alt="" className="q-card-sm-img" />
                <div className="card-sm-info">
                  <div className="card-sm-head">{i.name}</div>
                  <div className="card-sm-txt">{i.desc}</div>
                  <div className="card-sm-discount">{i.points}</div>
                  <div className="card-sm-sub">{i.type}</div>
                  
              

                </div>
              </div>
              </Link>
              

            </>
          )
        })}
      </section>
      </div>
    </>
  )
}

export default Question