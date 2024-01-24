import './App.css'
import { NavLink, Outlet } from 'react-router-dom' 
import MangaMain from "./features/Mangas/components/MangaMain"

function App() {
 

  return (
   
    <section className="App">
      <h1>Manga Mania</h1>
      <hr />
      <MangaMain/>
   </section>
  )
}

export default App
