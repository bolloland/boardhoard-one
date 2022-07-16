import {React, useState, useEffect} from 'react'
import ContextProvider from './ContextProvider';
import {Routes, Route} from 'react-router'
import Navbar from './components/Navbar';
import GamesContainer from './components/GamesContainer'
// import MyCollection from './components/MyCollection'
// import AddGame from './components/AddGame'
import ShowGame from './components/ShowGame'
// import SearchContainer from './components/SearchContainer'

function App() {
   

  return (
    <div className="App">
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<GamesContainer />} />
        {/* <Route exact path="/myCollection" element={ <MyCollection  />}  /> */}
        {/* <Route exact path="/add-game" element={ <AddGame />}  /> */}
        <Route exact path="/games/:id" element={ <ShowGame />}  />
        {/* <Route exact path="/search" element={ <SearchContainer />}  /> */}
      </Routes>
    </ContextProvider>
    </div>
  )
}

export default App;
