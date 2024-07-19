import React, { useState } from 'react'
import './Categories.css'
import filterListData from '../data/filterListData'
import GameCard from '../components/GameCard'
function Categories({games, reference }) {
  const [filters, setFilters] = useState(filterListData)

  const [gamecard, setGameCard] = useState(games)

  const handleFliterGame = category => {
    setFilters(
      filters.map(filter => {
        filter.active = false
        if (filter.name === category) {
          filter.active = true
        }
        return filter;
      })
    )

    if (category === 'All') { //logic bo loc
      setGameCard(games)
      return;
    }
    setGameCard(games.filter(game => game.category === category))
  }
  
  const [text, setText] = useState('')
  const handleSearchGame = e => {
    setGameCard(
      games.filter(game => 
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
    setText(e.target.value)
  }

  return (
    <section id="categories" className='categories' ref={reference}>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-lg-8 d-flex align-items-center justify-content-start">
              <ul className="filters">
                {
                  filters.map(filter => (
                    <li 
                      key={filter.id}
                      className={`${filter.active ? 'active' : undefined}`}
                      onClick={() => handleFliterGame(filter.name)} 
                    >
                      {filter.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-end">
              <div className="search">
                <i className="bi bi-search"></i>
                <input 
                  type="text" 
                  name="search" 
                  placeholder='Search' 
                  onChange={handleSearchGame} 
                  value={text}
                />
              </div>
            </div>
          </div>
          <div className="row">
           {
            gamecard.map(game => (
              <GameCard key={game.id} game={game}/>
            ))
           }
          </div>
        </div>
    </section>
  )
}

export default Categories