import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


import { store } from './app/store.js'

import App from './App.jsx'
import MangaDescription from './features/Mangas/components/MangaDescription.jsx'
import MangaMain from './features/Mangas/components/MangaMain.jsx'


import './index.css'
import NotFound from './page/NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

    <BrowserRouter>


      <Routes>

        <Route path='/' element={<App/>}>
          <Route path='/MangaMain' element={<MangaMain/>} />


        <Route path="/MangaDescription/:id" element={<MangaDescription/>} />
        <Route path='*'element={<NotFound/>} />
        </Route>
        
      </Routes>

      </BrowserRouter>

      <footer>
        <div className="footer">
            <p>© 2024 Manga Mania - Lucas Oliveira</p>
        </div>
    </footer>
    
    </Provider>
    
  </React.StrictMode>,
)
