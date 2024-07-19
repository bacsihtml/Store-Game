import React, { useContext, useEffect, useRef, useState } from 'react'
import './Main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home'
import Categories from './Categories'
import Mylibrary from './Mylibrary'
import Bag from './Bag'
import { AppContext } from '../App'

function Main() {
  const { library, bag } = useContext(AppContext)
  const [active, setActive] = useState(false)
  const [games, setGame] = useState([])
  
  const homeRef = useRef()
  const categoriesRef = useRef()
  const libraryRef = useRef()
  const bagRef = useRef()

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false
    },{
      name: 'bag',
      ref: bagRef,
      active: false
    },
  ]

  const handelToggleActive = () => {
    setActive(!active)
  }

  const handleSectionAcrive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active')
      if(section.ref.current.id === target) {
        section.ref.current.classList.add('active')
      }
      return section  
    })
  }

  const fetchData = () => {
    fetch('http://localhost:3000/api/GameData.json')
    .then(res => res.json())
    .then(data => {
      setGame(data)
    })
    .catch(e => console.log(e.message))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionAcrive}/>
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handelToggleActive}/>
        <div className="container-fliud">
          {
            games && games.length > 0 && ( //load category lan dau tien
              <>
                <Home games={games} reference={homeRef}/>
                <Categories games={games} reference={categoriesRef} />
                <Mylibrary games={library} reference={libraryRef}/>
                <Bag games={bag} reference={bagRef}/>
              </>
            )
          }
          
        </div>
      </div>
    </main>
  )
}

export default Main