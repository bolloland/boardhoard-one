import React from 'react'
// import { addToCollection, removeFromCollection } from '../actions'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import AddToCollectionButton from './AddToCollectionButton'
import GameTitle from './GameTitle'
import ShowGame from './ShowGame'

const Game = ({gamedata}) => {

    // console.log(gamedata, "gamedata")
    const navigate = useNavigate()

    return (
        <div className="game-container">
            
            <GameTitle gamedata={gamedata} />
            
            <img onClick={() => { navigate(`/games/${gamedata.id}`, {state: {gamedata}}) }} className="thumb" src={gamedata.thumb_url ? gamedata.images.small : "picture not available" } alt="" />

          
            <h5>Average Rating: <br></br>
            {gamedata.average_user_rating ? gamedata.average_user_rating.toFixed(3) + " / 5": "n/a"}</h5>
            
            {/* <div className="add-to-collection-button">

            {!collected ? <button className="button" onClick={(event) => {
                event.preventDefault()
                dispatch(addToCollection(gamedata))}
                }>add to collection</button> : 
                <button className="button" onClick={(event) => {
                    event.preventDefault()
                    dispatch(removeFromCollection(gamedata))}
                }
                >remove from collection</button>}
                </div> */}

                    {/* increment button */}
                {/* <button onClick={handleIncrement}>0</button> */}
        
        {/* {!collected ? <button className="button" onClick={(event) => {
                event.preventDefault()
                dispatch(addToCollection(gamedata))}
                }>add to collection</button> : <button className="button" >in your collection</button>} */}
            
            {/* <AddToCollectionButton gamedata={gamedata} /> */}
        {/* <button>{gamedata.review_count === 0 ? "write a review" : "see " + gamedata.reviews.count + " review(s)"}</button> */}
    
        </div>
        
    )
    
}

export default Game
