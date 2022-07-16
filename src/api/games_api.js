import {React, useState, useEffect} from 'react'
// **IS THIS NEEDED ? DELETE?  **
const games_api = () => {
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const URL="https://api.boardgameatlas.com/api/search?random&limit=100&client_id=rXBDkScl0L"

    useEffect( () => {
        fetch(URL)
        .then((resp) => console.log(resp))
    }, [])

  return (
    <div className="api-data">games_api</div>
  )
}

export default games_api