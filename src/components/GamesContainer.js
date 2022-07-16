import React, {useContext} from 'react'
import '../styles.css'
import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import Game from './Game'
// import { useState } from 'react'
import { GamesContext } from '../ContextProvider'

const GamesContainer = () => {
    
    const gamesContext = useContext(GamesContext)
    const {games, setGames} = gamesContext

    
    useEffect(() => {
        console.log(games, "games updated")
    }, [games])
    

    return (
        <div className="allgames-container"> 
        {games && games.map(game => <Game key={game.id} gamedata={game}/>)}
        </div>
        
    )
}

export default GamesContainer
