import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

// create provider to wrap components in

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    //use effect runs app when it loads
    useEffect(() => {
        fetchFeedback()  
      }, [])

    //fetch feedback with fetch api --
    // sorted by descending order ID
    //
    const fetchFeedback = async () => {
        const response = await fetch(
            `/feedback?_sort=id&_order=desc`
            )
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }


    //add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        //gives us new item added
        const data = await response.json()
    
        //spread operator allows new data to be added to current feedback
        setFeedback([data, ...feedback])
    }
    // delete feedback
    const deleteFeedback = async (id) => {
        if(window.confirm('You sure?')){
            await fetch (`/feedback/${id}`, {
                method: 'DELETE'
            })
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // update feedback item
    const updateFeedback = async (id, updItem) => {
       const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem)
       })
       const data = await response.json()
       setFeedback(
        feedback.map((item)=>(item.id=== id ? { ...item, ...data} : item))
       )
    }
    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit ({
            item,
            edit: true
        })
    }


return (
<FeedbackContext.Provider
 value={{
    feedback, 
    feedbackEdit,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
    }}>
    {children}
</FeedbackContext.Provider>
)
}

export default FeedbackContext;