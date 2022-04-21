import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import "./css/question.css"

const QuestionBox = () => {
   
    
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);
    const location=useLocation()
    console.log(location);
    const {item,name}=location.state
    console.log(item[count].question);
    
    return (
        <>
            <div className="ques-container">
                <div className="question-box">

                    <div className="quiz-score">
                        <div className="quiz-question-no">Question no :
                            <span className="current-ques"></span>{count + 1}/<span className="total-ques">{item.length}</span>
                        </div>
                        <div className="user-score">
                            Score : <span className="current-score">{score}</span>
                        </div>
                    </div>
                    <div className="p2 quiz-question">{item[count].question}</div>
                    <div className="input-box">
                        <ul className="list question-list">

                            {
                                item[count].option.map((i, index) => {
                                    return (
                                        <li key={index}>
                                            <input type="radio" name="option" className='question-list-item' value={i} id="" disabled={check}   onChange={(i) => {
                                                console.log(i.target.value)
                                                
                                                setCheck(true)
                                                i.target.style.pointerEvent="none";
                                                if (i.target.value===item[count].crt) {
                                                    if (score<item.length) {
                                                        return(setScore(score+1))
                                                    }
                                                    
                                                }
                                            }} />{i}
                                        </li>
                                    )
                                })
                            }




                        </ul>

                    </div>




                    <div className="quiz-btn">
                        <button className="btn-sec quiz-back-btn" onClick={()=>{
                            if(count>0){
                                console.log(count);
                                return  setCount(count-1)
                            }
                        }}>back</button>
                        {
                            count+1===item.length?(<Link to={{
                                    pathname:"/topper",
                                    state:{
                                        name:name,
                                        score:score,
                                        total:count+1
                                    }
                                }} className="link-nostyle"><button className="btn quiz-nxt-btn">result</button></Link>):(<button className="btn quiz-nxt-btn" onClick={()=>{
                                    console.log(count)
                                    console.log(item.length)
                                    
                                        if(count+1<item.length){
            
                                            return setCount(count+1),setCheck(false)
                                            
                                            
                                        }
                                    }}>next</button>)
                                
                        }
                           
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default QuestionBox