import React from 'react'
import { useState, useContext } from 'react'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { useLocation } from 'react-router-dom'
import { GamesContext } from '../ContextProvider'

const ShowGame = () => {

    const gamesContext = useContext(GamesContext)
    const {games} = gamesContext
    
    const location = useLocation()
    // console.log(location, "location")

    let game = location.state.gamedata
    const [showRevForm, setShowRevForm] = useState(false)
    const revealForm = () => setShowRevForm(!showRevForm)
    const replaceHTML = (str) => {
        return str.replace(/<[^>]*>?/gm, '')
    }
    const replacequotes = (str) => {
        return str.replace(/(&quot\;)/gm,"\"")
    }

    // console.log(game, "show-game")

    return (
        <div className="one-game">
            <h1> {game && game.name} ({game && game.year_published})</h1>
            <img className="thumb-show" src={game && game.thumb_url} alt=""  />
            
            <div className="description-container">Description: {game && replacequotes(replaceHTML(game.description))}</div>
            <br></br><br></br>

            Rating: {game && game.average_user_rating.toFixed(3) } / 5 <br></br><br></br>

            <button className="button" onClick={revealForm}>Add A Review  </button>
            {showRevForm ? <ReviewForm game={game}/> : !showRevForm }

            {/* Reviews To Date: {game && game.reviews && game.reviews.length}<br></br>
            {game && game.reviews && game.reviews.map(rev => <Review rev={rev} />)} */}
            
        </div>
    )
}

export default ShowGame
