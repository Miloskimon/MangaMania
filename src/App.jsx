import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NavLink, Outlet } from 'react-router-dom' 
import MangaList from './features/Mangas/components/MangaList'

/* import  getMangasApi  from './api/getMangasApi.js' */
import {setMangas} from './features/Mangas/MangaSlice'

import "./App.css"


function App() {

  const dispach = useDispatch()
  const mangas = useSelector((state) => state.mangas)


  //Puxa a APi de mangas
  const loadMangas = async () => {
    const mangasApi = await getMangasApi();

    dispach(setMangas(mangasApi))

  }
  
  //puxar o loadMang e api para a visualização
  useEffect(() => {
    loadMangas();
  },[])

  return (
   
    <div className="App">
      <h1>Manga Mania</h1>
      <hr />
      <nav>

        <NavLink to="/MangaMain">Mangas</NavLink>        
        {/*! Dexei essses comentsdos para caso tiver tempo, acrescentar mais rotas */}
        {/* <NavLink to="/">Home</NavLink> */}
       {/*  <NavLink to="/about">Sobre O Projeto</NavLink> */}

       <MangaList mangas={mangas}/>
      </nav>
      <hr />
      <Outlet />
   </div>
  )
}

export default App
