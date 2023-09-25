import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import StarRating from './StarRating'

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return(
    <>
      <StarRating color='blue' maxRating={1} onSetRating={setMovieRating}/>
      <p>This movies was rated {movieRating} stars.</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/>
    <StarRating maxRating={10} color='red' size={22} className={'test'} defaultRating={3}/>
    <Test/>
    {/* <App /> */} 
  </React.StrictMode>,
)
