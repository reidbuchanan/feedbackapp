import React from 'react'
import Feedbackitem from './Feedbackitem'
import Spinner from './shared/Spinner'

import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext)
    if (!isLoading && (!feedback || feedback.length===0)){
        return <p>no feedback yet</p>
    }

   return isLoading ? <Spinner /> :( 
  
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem key = {item.id} item = {item} 
             />
        ))}
    </div>
  )
}



export default FeedbackList