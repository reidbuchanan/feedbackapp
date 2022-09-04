import Header from "./components/Header"


import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutLink from "./components/AboutLink"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App () {
  

    

   


    return (
        <FeedbackProvider>
        <Router>
            <Header />
           
            <div className="container">
            <Routes>
                <Route exact path='/' element={
                <>
                <FeedbackForm />
                <FeedbackStats  />
                <FeedbackList  />
                </>
                }>
            </Route>
            <Route path = '/about' element={<About />} />
            
            </Routes>
            <AboutLink />
            </div>
        </Router>
        </FeedbackProvider>
       
       
    )
}

export default App