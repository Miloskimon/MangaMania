import { useEffect } from 'react'
import { useDispatch, } from 'react-redux'

import { NavLink, Outlet } from 'react-router-dom' 

import {setMangas} from './features/Mangas/MangaSlice'

import "./App.css"
import  {getMangasAPI} from './api/getMangasApi'


 

function App() {

  const dispach = useDispatch()

  
  //puxar o loadMang e api para a visualização
  useEffect(() => {
    const loadMangas = async () => {
      const mangasApi = await getMangasAPI();
  
      dispach(setMangas(mangasApi))
  
    }
    
    loadMangas();
  },[])

  return (
   
    <div className="App">
      <h1 className="FsTitle">Manga Mania</h1>
      <hr className='line' />
      <nav>

        <NavLink to="/MangaMain">Mangas</NavLink>
        <NavLink to="/MangaSingup">Manga Register</NavLink>
      </nav>
      <hr className='line' />
      <Outlet />
      
   </div>
  )
}

export default App
