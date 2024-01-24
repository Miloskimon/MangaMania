import './App.css'
import { NavLink, Outlet } from 'react-router-dom' 

function App() {
 

  return (
   
    <section className="App">
      <h1>Manga Mania</h1>
      <hr />
      <nav>
        //
        <NavLink to="/MangaMain">Mangas</NavLink>

        
        {/*! Dexei essses comentsdos para caso tiver tempo, acrescentar mais rotas */}
        {/* <NavLink to="/">Home</NavLink> */}
       {/*  <NavLink to="/about">Sobre O Projeto</NavLink> */}
      </nav>
      <hr />
      <Outlet />
   </section>
  )
}

export default App
