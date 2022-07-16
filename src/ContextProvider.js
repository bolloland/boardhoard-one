import React, { useEffect, useState, createContext } from 'react'

export const GamesContext = createContext(
    {
    games: [],
    setGames: ()=>{}
    }, 
    {
    myCollection: [], 
    setMyCollection: ()=>{}
    }
    )

const ContextProvider = (props) => {

    const [myCollection, setMyCollection] = useState([])
    const [games, setGames] = useState([])
    console.log(games, "Games-In-State")

    const values = {
        games: games, 
        setGames: setGames
    }

    useEffect( () => {
        fetch("https://api.boardgameatlas.com/api/search?random&limit=100&client_id=rXBDkScl0L")
        .then((resp) => resp.json())
        .then(json => setGames(json.games))
    }, [])

  return (
    <div>
        <GamesContext.Provider value={values} >
            {props.children}
        </GamesContext.Provider>
    </div>
  )
}

export default ContextProvider