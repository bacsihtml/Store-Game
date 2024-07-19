import React from 'react'
import './Mylibrary.css'
import GameCard from '../components/GameCard'

function Mylibrary({ games, reference }) {
  return (
    <section id="library" className="library" ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>My Library</h1>
          </div>
          <div className="row">
            {
              games.length === 0 ? (
                <h1>Your library is empty</h1>
              ) : (
                games.map(game => <GameCard key={game.id} game={game}/>)
              )
            }
          </div>
        </div>
    </section>
  )
}

export default Mylibrary