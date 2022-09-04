import React from 'react'
import Feedbackitem from './Feedbackitem'

import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length===0){
        return <p>no feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem key = {item.id} item = {item} 
             />
        ))}
    </div>
  )
}



export default FeedbackList