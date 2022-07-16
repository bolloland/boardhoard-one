import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GamesContext } from '../ContextProvider';


const ReviewForm = (props) => {
    const gamesContext = useContext(GamesContext)
    const {games, setGames} = gamesContext
    const navigate = useNavigate()

        const [reviewData, setReviewData] = useState({});
        const [submittedData, setSubmittedData] = useState(false)
      
        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setReviewData(values => ({...values, [name]: value}))
        }

        const submitNewReview = () => {
            
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          submitNewReview(reviewData, navigate, props.game)
           
          navigate(`/`)
          alert("You added a new review!");
          setSubmittedData(true)
        }

        useEffect(() => {

        }, [submittedData])
      
        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your review:<br></br>
            <input 
                type="text" 
                name="title" 
                value={reviewData.title || ""} 
                placeholder="title your review"
                onChange={handleChange}
            /> <br/>
            <input 
                type="text" 
                name="rev_text" 
                value={reviewData.rev_text || ""} 
                placeholder="place review text here"
                onChange={handleChange}
                /> <br/>
            <input 
                type="text" 
                name="rating" 
                value={reviewData.rating|| ""} 
                placeholder="rate 1 (low) - 5 (high)"
                onChange={handleChange}
                /> <br/>
            <input 
                type="hidden" 
                name="game_id" 
                value={reviewData.game_id = props.game.id} 
                placeholder="place review here"
                onChange={handleChange}
                />
          
            </label>
                <input type="submit" />
            </form>
        )
    
}

export default ReviewForm
